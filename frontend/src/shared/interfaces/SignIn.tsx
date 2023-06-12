// import {ErrorMessage, Field} from "formik";
// import {Form} from "react-bootstrap";
// import * as Yup from 'yup';
//
// export interface SignIn {
//     username: string
//     password: string
// }
//
// export const validationSchema = Yup.object().shape({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string().required('Password is required'),
// });
//
//     return (
//         <Formik
//             initialValues={{
//                 username: '',
//                 password: '',
//             }}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}>
//             {() => (
//                 <Form>
//                     <Field name="username" type="text" placeholder="Username" />
//                     <ErrorMessage name="username" component="div" />
//
//                     <Field name="password" type="password" placeholder="Password" />
//                     <ErrorMessage name="password" component="div" />
//
//                     <button type="submit" disabled={isLoading}>
//                         Sign In
//                     </button>
//                     {error && <div>Error: {error.message}</div>}
//                 </Form>
//             )}
//         </Formik>
//     );
// };