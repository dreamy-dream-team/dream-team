import {useState, ChangeEvent, FormEvent} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {ForgotPasswordForm} from "../../../shared/components/main-nav/forgot-password/ForgotPasswordForm.tsx";


export const ForgotPassword = () => {
    const [show, setShow] = useState(true);
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleConfirmationClose = () => setShowConfirmation(false);
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setIsValid(event.target.checkValidity());
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (isValid) {
            setShowConfirmation(true);
            setShow(false);
            fetch('', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email}),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        setShowConfirmation(true);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            setShow(false);
        }
    };

    return (
        <>

            <ForgotPasswordForm/>
{/*            <Button variant="link" onClick={handleShow}>
                ForgotPassword
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Forgot Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                required
                                onChange={handleEmailChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={!isValid}>
                            Get New Password
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showConfirmation} onHide={handleConfirmationClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Password Reset</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Check your email for a password reset
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleConfirmationClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>*/}

        </>
    );
};