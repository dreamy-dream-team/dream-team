import {object, string} from "yup";
import {Formik, FormikHelpers, FormikProps} from "formik";
import jwtDecode from "jwt-decode";
import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {DisplayError} from "../../display-error/DisplayError.tsx";
import {DisplayStatus} from "../../display-status/Display.Status.tsx";
import { ClientResponseForSignIn, usePostSignInMutation } from '../../../../store/apis.ts'
import { SignIn} from '../../../interfaces/Profile.tsx'
import { getAuth, JwtToken } from '../../../../store/auth.ts'
import {FormDebugger} from "../../FormDebugger.tsx";
import {AppDispatch, useAppDispatch} from "../../../../store/store.ts";
import {useNavigate} from "react-router-dom";


export const SignInForm = () => {
    const [submitRequest] = usePostSignInMutation()
    const dispatch: AppDispatch = useAppDispatch()
    const navigate = useNavigate()
    const validator = object().shape({
        profileEmail: string()
            .email("please provide a valid email")
            .required('email is required'),
        profilePassword: string()
            .required("password is required")
            .min(8, "password must be at least eight characters")
    });
    const signIn: SignIn = {
        profileEmail: "",
        profilePassword: ""
    };

    const submitSignIn = async (values: SignIn, formikHelpers: FormikHelpers<SignIn>)=>{
        const{resetForm, setStatus} = formikHelpers
        const result = await submitRequest(values)
        const {data: response, error} = result as {data: ClientResponseForSignIn, error: ClientResponseForSignIn}
        if(error){
            setStatus({type: error.type, message: error.message})
        } else if (response?.status === 200){
            window.localStorage.removeItem("authorization");
            window.localStorage.setItem("authorization", response.authorization as string);
            const decodedToken = jwtDecode<JwtToken>(response.authorization as string)
            dispatch(getAuth(decodedToken))
            resetForm()
            setStatus({type: response.type, message: response.message})
            navigate('/')
        } else {
            setStatus({type: response?.type, message: response?.message})
        }

    };

    return(
        <>
        <Formik
            initialValues={signIn}
            onSubmit={submitSignIn}
            validationSchema={validator}>
            {SignInFormContent}
        </Formik>
        </>
    )
};

function SignInFormContent(props: FormikProps<SignIn>) {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;
    return (
        <>
            <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
                <h1 className="text-center mt-4 mb-4 ">Dreamery World</h1>
                {/*<img src={Logo} alt="logo" className="mb-4" style={{ width: '100px', height: '100px' }} />*/}
                <Row className={"w-100 h-auto"}>
                    <h4 className="text-center mt-4 mb-4">Sign-In</h4>
                    <Col xs={12} md={8} lg={6} className="mx-auto">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 mt-4" controlId="formEmail">
                                <Form.Label>Email Address</Form.Label>
                                <InputGroup>
                                    <FormControl    className="form-control"
                                     name="profileEmail"
                                     type="text"
                                     value={values.profileEmail}
                                     placeholder="Email"
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                    />
                                </InputGroup>
                                <DisplayError errors={errors} touched={touched} field={"profileEmail"} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon="key" />
                                    </InputGroup.Text>
                                    <FormControl className="form-control"
                                        name="profilePassword"
                                        type="password"
                                        value={values.profilePassword}
                                        placeholder="Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </InputGroup>
                                <DisplayError errors={errors} touched={touched} field={"profilePassword"} />
                            </Form.Group>

                            <Form.Group className={"mt-3"}>
                                <Button variant="primary" type="submit" className="w-100 align-content-center mb-2">
                                    Submit
                                </Button>
                                {" "}
                                <Button
                                    className="btn btn-danger"
                                    onClick={handleReset}
                                    disabled={!dirty || isSubmitting}
                                >Reset
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <div className="pt-3">
                <DisplayStatus status={status} />
                <FormDebugger {...props}/>
            </div>
        </>
    )
}