// import {object, string} from "yup";
// import {Formik, FormikHelpers} from "formik";
// import jwtDecode from "jwt-decode";
//
//
// export const SignInForm = () => {
//     const [submitRequest] = usePostSignInMutation()
//     const dispatch: AppDispatch = useAppDispatch()
//
//     const validator = object().shape({
//         profileEmail: string()
//             .email("please provide a valid email")
//             .required('email is required'),
//         profilePassword: string()
//             .required("password is required")
//             .min(8, "password must be at least eight characters")
//     });
//     const signIn: SignIn = {
//         profileEmail: "",
//         profilePassword: ""
//     };
//
//     const submitSignIn = async (values: SignIn, formikHelpers: FormikHelpers<SignIn>)=>{
//         const{resetForm, setStatus} = FormikHelpers
//         const result = await submitRequest(values)
//         const {data: response, error} = result as {data: ClientResponseforSignIn, error: ClientResponseforSignIn}
//         if(error){
//             setStatus({type: error.type, message: error.message})
//         }else if (response?.status === 200){
//             window.localStorage.removeItem("authorization");
//             window.localStorage.setItem("authorization", response.authorization as string);
//             const decodedToken = jwtDecode<jwtToken>(response.authorization as string)
//             dispatch(getAuth(decodedToken))
//             resetForm()
//             setStatus({type: response.type, message: response.message})
//         }else{
//             setStatus({type: response?.type, message: response?.message})
//         }
//
//     };
//
//     return(
//         <>
//         <Formik
//             initialValues={signIn}
//             onSubmit={submitSignIn}
//             validationSchema={validator}>
//
//             {SignInFormContent}
//         </Formik>
//         </>
//     )
// };
//
// function SignInFormContent(props:)