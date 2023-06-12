// import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
// import {DisplayError} from "../../../shared/components/display-error/DisplayError.tsx";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {DisplayStatus} from "../../../shared/components/display-status/Display.Status.tsx";
// import {FormDebugger} from "../../../shared/components/FormDebugger.tsx";
//
// export const SignIn = () => {
//
//     return (
//         <>
//             <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
//                 <h1 className="text-center mt-4 mb-4 ">Dreamery World</h1>
//                 {/*<img src={Logo} alt="logo" className="mb-4" style={{ width: '100px', height: '100px' }} />*/}
//                 <Row className={"w-100 h-auto"}>
//                     <h4 className="text-center mt-4 mb-4">Sign-In</h4>
//                     <Col xs={12} md={8} lg={6} className="mx-auto">
//                         <Form>
//                             <Form.Group className="mb-3 mt-4" controlId="formEmail">
//                                 <Form.Label>Email Address</Form.Label>
//                                 <Form.Control type="email" placeholder="Enter Email"/>
//                             <InputGroup>
//                                 <FormControl
//                                     className="form-control"
//                                     name="profileEmail"
//                                     type="text"
//                                     value={values.profileEmail}
//                                     placeholder="Email"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                             </InputGroup>
//                             <DisplayError errors={errors} touched={touched} field={"profileEmail"} />
//                             </Form.Group>
//
//                             <Form.Group className="mb-3" controlId="formPassword">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control type="password" placeholder="Password"/>
//                             <InputGroup>
//                                 <InputGroup.Text>
//                                     <FontAwesomeIcon icon="key" />
//                                 </InputGroup.Text>
//                                 <FormControl
//                                     className="form-control"
//                                     name="profilePassword"
//                                     type="password"
//                                     value={values.profilePassword}
//                                     placeholder="Password"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                             </InputGroup>
//                             <DisplayError errors={errors} touched={touched} field={"profilePassword"} />
//                             </Form.Group>
//
//                             <Form.Group className={"mt-3"}>
//                                 <Button variant="primary" type="submit" className="w-100 mb-2">
//                                 Login
//                                 </Button>
//                                 {" "}
//                                 <Button
//                                     className="btn btn-danger"
//                                     onClick={handleReset}
//                                     disabled={!dirty || isSubmitting}
//                                 >Reset
//                                 </Button>
//                             </Form.Group>
//
//                         </Form>
//                         <a href="/login/ForgotPassword" className="d-block text-center mb-2">Forgot Password</a>
//                         <a href="/login/SignUp" className="d-block text-center mb-2">Create New Account</a>
//                     </Col>
//                 </Row>
//             </Container>
//             <div className="pt-3">
//                 <DisplayStatus status={status} />
//                 <FormDebugger {...props}/>
//             </div>
//         </>
//     );
// };
