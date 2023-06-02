import {
    Button,
    Card,
    Col,
    Container,
    Form,
    ListGroup,
    Row,
    Tab
} from "react-bootstrap";

export function Settings() {
    return (
        <>
            <Container className="light-style flex-grow-1 container-p-y">
                <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
                <Card className="overflow-hidden">
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#account-info">
                    <Row className="no-gutters row-bordered row-border-light">
                        <Col md={3} className="pt-0">
                            <ListGroup className="list-group-flush account-settings-links">
                                <ListGroup.Item href="#account-info">Account Information</ListGroup.Item>
                                <ListGroup.Item href="#account-password">Change your Password</ListGroup.Item>
                                <ListGroup.Item href="#account-deactivate">Deactivate your Account</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#account-info" id="account-info">
                                    <Card.Body className="pb-2">
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" placeholder="username" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="email@myemail.com" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Account Creation Date</Form.Label>
                                            <Form.Control type="text" value="date" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Language</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option value="1">English</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Card.Body>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#account-password" id="account-password">
                                    <Card.Body className="pb-2">
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Current Password</Form.Label>
                                            <Form.Control type="password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>New Password</Form.Label>
                                            <Form.Control type="password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" />
                                        </Form.Group>
                                    </Card.Body>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#account-deactivate" id="account-deactivate">
                                    <Card.Body className="pb-2">
                                        <Button>Deactivate</Button>
                                    </Card.Body>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>
                </Card>
                <Button className="text-right mt-3">Save Changes</Button>&nbsp;
                <Button className="text-right mt-3">Cancel</Button>
            </Container>
        </>
    )
}``