import {SignInForm} from "./SignInForm";
import {Button, Modal} from "react-bootstrap";

export interface SignInModalProps {
    handleShow: () => void,
    handleClose: () => void,
    show: boolean
}

export const SignInModal = (props: SignInModalProps) => {
    const {handleShow, handleClose, show} = props

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Sign In
        </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignInForm/>
                </Modal.Body>
            </Modal>
        </>
    )
}