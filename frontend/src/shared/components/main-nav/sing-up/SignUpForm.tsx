import {object, string} from "yup";
import {PartialProfile} from "../../../interfaces/Profile.tsx";
import {MutationResponse, usePostSignUpMutation} from "../../../../store/apis.ts";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {Button, Container, Form, FormControl} from "react-bootstrap";
import {useState} from "react";
import {DisplayError} from "../../display-error/DisplayError.tsx";
import {DisplayStatus} from "../../display-status/Display.Status.tsx";
import {FormDebugger} from "../../FormDebugger.tsx";


export function SignUpForm() {
    const signUp: PartialProfile = {
        profileEmail: "",
        profileHandle: "",
        profilePassword: "",
        profilePasswordConfirm: "",
    };
const [submit] = usePostSignUpMutation()
    const validator = object({
        profileEmail: string()
            .email("email must be a valid email")
            .required('email is required')
            .max(128, 'email is required'),
        profileHandle: string()
            .required("profile handle is required")
            .max(54, "profile handle needs to be less than 55 characters"),
        profilePassword: string()
            .required("Password is required")
            .min(8, "Password needs to be longer than 8 characters")
            .max(97, "Password needs to be less than 98 characters"),
        profilePasswordConfirm: string()
            .required("Password Confirm is required")
            .min(8, "Password needs to be longer than 8 characters")
            .max(97, "Password needs to be less than 98 characters")
    });

    async function handleSubmit(values: PartialProfile, actions: FormikHelpers<PartialProfile>){
        const {resetForm, setStatus} = actions
        console.log(values)

        const result = await submit(values) as MutationResponse
        const {data: response, error} = result

        if (error) {
            setStatus({type: error.type, message: error.message})
        } else if (response?.status === 200) {
            resetForm()
            setStatus({type: response.type, message: response.message})
        }else{
            setStatus({type: response?.type, message: response?.message})
        }

    }
    return (
        <>
            <Formik initialValues={signUp} onSubmit={handleSubmit} validationSchema={validator}>
                {SignUpFormContent}
            </Formik>
        </>
    )
}

function SignUpFormContent(props: FormikProps<PartialProfile>) {
    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    } = props;

const [agreed, setAgreed] = useState(false)
    // @ts-ignore
    // @ts-ignore
    return(
        <>
            <Container className="text-center">
                <h1 className="my-5"> Dreamery World</h1>

                        <Form onSubmit={handleSubmit}>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Create Username</Form.Label>
                                <FormControl
                                    className="form-control"
                                    name="profileHandle"
                                    type="text"
                                    value={values.profileHandle}
                                    placeholder="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </Form.Group>
                            <DisplayError errors={errors} touched={touched} field={"profileHandle"}/>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                            <FormControl
                                className="form-control"
                                name="profileEmail"
                                type="text"
                                value={values.profileEmail}
                                placeholder="email"
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            </Form.Group>
                            <DisplayError errors={errors} touched={touched} field={"profileEmail"}/>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                            <FormControl
                                className="form-control"
                                name="profilePassword"
                                type="password"
                                value={values.profilePassword}
                                placeholder="password"
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            </Form.Group>
                            <DisplayError errors={errors} touched={touched} field={"profilePassword"}/>

                            <Form.Group className="mb-3" controlId="formPassword2">
                                <Form.Label>Confirm Password</Form.Label>
                            <FormControl
                                className="form-control"
                                name="profilePasswordConfirm"
                                type="password"
                                value={values.profilePasswordConfirm}
                                placeholder="re-enter password"
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            </Form.Group>
                            <DisplayError errors={errors} touched={touched} field={"profilePasswordConfirm"}/>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check onClick={() => {setAgreed(!agreed)}} type="checkbox" label={<span>I agree to the <a
                                    href="/terms">Terms of Use</a> and Privacy</span>}>

                                </Form.Check>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 mb-2" disabled={!agreed}>
                                Sign Up
                            </Button>
                        </Form>
                <DisplayStatus status={status}/>
                <FormDebugger {...props}/>
            </Container>

        </>
    )
}
