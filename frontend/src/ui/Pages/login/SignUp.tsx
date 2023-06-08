import {useState} from "react";
import {Button, Container, Form, FormControl, Modal} from "react-bootstrap";


export const SignUp = () => {

    const[show, setShow] = useState(true);
    const[agreed, setAgreed] = useState(false);
    const handleClose = () => setShow(false);

    return(
     <>
         <Container className="text-center">
         <h1 className="my-5">Dreamery World</h1>
    <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Create Username</Form.Label>
                    <FormControl type="Username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <FormControl type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <FormControl type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword2">
                    <Form.Label>Confirm Password</Form.Label>
                    <FormControl type="password" placeholder="Retype Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label={<span>I agree to the <a href="/terms">Terms of Use</a> and Privacy</span>} onChange={ () => setAgreed (!agreed)} />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-2" disabled={!agreed}>
                    Sign Up
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
         </Container>

     </>
    )
}