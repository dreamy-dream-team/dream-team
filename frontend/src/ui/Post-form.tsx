import {Button, Col, FloatingLabel, Form, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";



export function PostForm() {
    return (
        <>

            <div className={'my-4 mx-auto px-3 py-2 border rounded-1 shadow-lg'} style={{overflow: 'hidden', width: "35rem"}}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Title"
                        className="mb-1 mx-auto"
                    >
                        <Form.Control type="title" placeholder="Title" style={{ height: '50px', width: '500px'}}/>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Tell us your dream...">
                        <Form.Control
                            as="textarea"
                            placeholder="Tell us your dream..."
                            style={{ height: '175px', width: '500px'}}
                        />
                    </FloatingLabel>
                    <Form>
                        <p className={'mb-0'}>Add category</p>
                        <ToggleButtonGroup type="checkbox" className="mb-1">
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-1" value={1}>
                                Funny
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-2" value={2}>
                                Nightmare
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-3" value={3}>
                                Animals
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-4" value={4}>
                                School
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-5" value={5}>
                                Work
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-6" value={6}>
                                Weird
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <br/>
                        <ToggleButtonGroup type="checkbox" className="mb-2">
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-7" value={7}>
                                Reoccurring
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-8" value={8}>
                                Out of Body
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-9" value={9}>
                                Daydream
                            </ToggleButton>
                            <ToggleButton variant={'outline-secondary'} id="tbg-check-10" value={10}>
                                Lucid Dream
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Form>

                    <Form>
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
                            <Col md="auto" className="my-1 align-content-end">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
            </div>
        </>
    );
}