import { Button, Col, Form, Modal, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useState } from "react";
import {PostForm} from "./PostForm";
import {useWindowSize} from "usehooks-ts";

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
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="title"
                                placeholder="Title"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Your Dream</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <p className={'mb-0'}>Add category</p>
                        <ToggleButtonGroup type="checkbox" className="mb-1" style={{overflow: "auto"}}>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-11" value={11}>
                                Funny
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-12" value={12}>
                                Nightmare
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-13" value={13}>
                                Animals
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-14" value={14}>
                                School
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-15" value={15}>
                                Work
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-16" value={16}>
                                Weird
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <br/>
                        <ToggleButtonGroup type="checkbox" className="mb-2">
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-17" value={17}>
                                Reoccurring
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-18" value={18}>
                                Out of Body
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-19" value={9}>
                                Daydream
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-20" value={20}>
                                Lucid Dream
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <Row className="align-items-center">
                            <Col sm="auto" className="my-1">
                                <Form.Check
                                    type="checkbox"
                                    id="autoSizingCheck2"
                                    label="Anonymous"
                                />
                            </Col>
                            <Col sm="auto" className="my-1">
                                <Form.Check
                                    type="checkbox"
                                    id="autoSizingCheck2"
                                    label="Private"
                                />
                            </Col>
                        </Row>
                    </Form>
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