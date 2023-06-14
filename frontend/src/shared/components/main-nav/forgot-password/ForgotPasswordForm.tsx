import * as Yup from 'yup';
import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {ErrorMessage, Field, Formik} from "formik";


export const ForgotPasswordForm = () => {
    const [show, setShow] = React.useState(true);
    const [showConfirmation, setShowConfirmation] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleConfirmationClose = () => setShowConfirmation(false);

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
    });


    return (
        <>
            <Button variant="link" onClick={() => setShow(true)}>
                ForgotPassword
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Forgot Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{email: ''}}
                        validationSchema={validationSchema}
                        onSubmit={(values, {setSubmitting}) => {
                            fetch('', {
                                method: 'POST',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify(values),
                            })
                                .then((response) => response.json())
                                .then((data) => {
                                    if (data.success) {
                                        setShowConfirmation(true);
                                        handleClose();
                                    }
                                })
                                .catch((error) => {
                                    console.error('Error:', error);
                                })
                                .finally(() => setSubmitting(false));
                        }}
                    >
                        {({isSubmitting}) => (
                            <Form>
                                <div>
                                    <label htmlFor="email">Email Address</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    <ErrorMessage name="email" component="div"/>
                                </div>

                                <Button variant="primary" type="submit" disabled={isSubmitting}>
                                    Get New Password
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>

            <Modal show={showConfirmation} onHide={handleConfirmationClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Password Reset</Modal.Title>
                </Modal.Header>
                <Modal.Body>Check your email for a password reset</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleConfirmationClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

