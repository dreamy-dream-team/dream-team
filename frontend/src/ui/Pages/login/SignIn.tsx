import {Button, Col, Container, Form, Row} from "react-bootstrap";

export const SignIn = () => {

    return (
        <>
            <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
                <h1 className="text-center mt-4 mb-4 ">Dreamery World</h1>
                {/*<img src={Logo} alt="logo" className="mb-4" style={{ width: '100px', height: '100px' }} />*/}
                <Row className={"w-100 h-auto"}>
                    <h4 className="text-center mt-4 mb-4">Sign-In</h4>
                    <Col xs={12} md={8} lg={6} className="mx-auto">
                        <Form>
                            <Form.Group className="mb-3 mt-4" controlId="formEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100 mb-2">
                                Login
                            </Button>
                        </Form>
                        <a href="/login/ForgotPassword" className="d-block text-center mb-2">Forgot Password</a>
                        <a href="/login/SignUp" className="d-block text-center mb-2">Create New Account</a>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
