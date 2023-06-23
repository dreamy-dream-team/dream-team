import { Button,Modal,} from "react-bootstrap";
import { useState } from "react";
import {PostForm} from "./PostForm";
import {useWindowSize} from "usehooks-ts";


//Conditional rendering function to create responsive modal button. Imports PostForm and is exported on the pages. PostForm is only imported here.
export function PostFormModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {width} = useWindowSize()
    const isDesktopView = width >= 768;
    const mobileViewModal = (
        <div>
            {
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tell us your dream...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
               <PostForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Post
                    </Button>
                </Modal.Footer>
            </Modal>}
        </div>
    );
    const desktopViewForm = (
        <PostForm/>
    );
    return (

        <>
            <div className="text-end m-3">
                {!isDesktopView && (
                    <Button variant="secondary" onClick={handleShow} className="bi bi-cloud-plus">
                        Tell us your dream...
                    </Button>
                )}
                {isDesktopView ? desktopViewForm : mobileViewModal}
            </div>
        </>
    );
}