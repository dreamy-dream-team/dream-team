import React from "react"
import {
    Button,
    Col,
    Container,
    FloatingLabel,
    Form,
    Row,
    ToggleButton,
    ToggleButtonGroup,
    ListGroup
} from "react-bootstrap";

export function Home() {
    return (
        <>
            {/*<div className={'mt-1'}>*/}
            {/*    <Container className={'border rounded-1'}>*/}
            {/*            <FloatingLabel*/}
            {/*                controlId="floatingInput"*/}
            {/*                label="Title"*/}
            {/*                className="mb-1"*/}
            {/*            >*/}
            {/*                <Form.Control type="title" placeholder="Title"/>*/}
            {/*            </FloatingLabel>*/}

            {/*            <FloatingLabel controlId="floatingTextarea2" label="Tell us your dream...">*/}
            {/*                <Form.Control*/}
            {/*                    as="textarea"*/}
            {/*                    placeholder="Tell us your dream..."*/}
            {/*                    style={{ height: '175px'}}*/}
            {/*                />*/}
            {/*            </FloatingLabel>*/}
            {/*        <Form>*/}
            {/*            <Row>*/}
            {/*               <Col breakpoints={'lg'}>*/}
            {/*                <p className={'mb-0'}>Add a tag</p>*/}
            {/*                <ToggleButtonGroup type="checkbox" className="mb-1">*/}
            {/*                    <ToggleButton variant={'outline-secondary'} id="tbg-check-1" value={1}>*/}
            {/*                        Funny*/}
            {/*                    </ToggleButton>*/}
            {/*                    <ToggleButton variant={'outline-secondary'} id="tbg-check-2" value={2}>*/}
            {/*                        Nightmare*/}
            {/*                    </ToggleButton>*/}
            {/*                    <ToggleButton variant={'outline-secondary'} id="tbg-check-3" value={3}>*/}
            {/*                        Animals*/}
            {/*                    </ToggleButton>*/}
            {/*                    <ToggleButton variant={'outline-secondary'} id="tbg-check-4" value={4}>*/}
            {/*                        School*/}
            {/*                    </ToggleButton>*/}
            {/*                    <ToggleButton variant={'outline-secondary'} id="tbg-check-5" value={5}>*/}
            {/*                        Work*/}
            {/*                    </ToggleButton>*/}
            {/*                    <ToggleButton variant={'outline-secondary'} id="tbg-check-6" value={6}>*/}
            {/*                        Lucid Dream*/}
            {/*                    </ToggleButton>*/}
            {/*                    <ToggleButton variant={'outline-secondary'} id="tbg-check-7" value={7}>*/}
            {/*                        Reoccurring*/}
            {/*                    </ToggleButton>*/}
            {/*                    <ToggleButton variant={'outline-secondary'} id="tbg-check-8" value={8}>*/}
            {/*                        Out of Body*/}
            {/*                    </ToggleButton>*/}
            {/*                    <ToggleButton variant={'outline-secondary'} id="tbg-check-9" value={9}>*/}
            {/*                        Daydream*/}
            {/*                    </ToggleButton>*/}
            {/*                    <ToggleButton variant={'outline-secondary'} id="tbg-check-10" value={10}>*/}
            {/*                        Weird*/}
            {/*                    </ToggleButton>*/}
            {/*                </ToggleButtonGroup>*/}
            {/*               </Col>*/}
            {/*            </Row>*/}
            {/*        </Form>*/}

            {/*            <Form>*/}
            {/*                <Row className="align-items-center">*/}
            {/*                    <Col sm="auto" className="my-1">*/}
            {/*                        <Form.Check*/}
            {/*                            type="checkbox"*/}
            {/*                            id="autoSizingCheck2"*/}
            {/*                            label="Anonymous"*/}
            {/*                        />*/}
            {/*                    </Col>*/}
            {/*                    <Col sm="auto" className="my-1">*/}
            {/*                        <Form.Check*/}
            {/*                            type="checkbox"*/}
            {/*                            id="autoSizingCheck2"*/}
            {/*                            label="Private"*/}
            {/*                        />*/}
            {/*                    </Col>*/}
            {/*                    <Col className="my-1 align-content-end">*/}
            {/*                        <Button type="submit">Submit</Button>*/}
            {/*                    </Col>*/}
            {/*            </Row>*/}
            {/*        </Form>*/}
            {/*    </Container>*/}
            {/*</div>*/}

            <Container className={'border rounded-1 bg-secondary p-5'}>
                <Row>
                    <h2 className={'text-center'}>Find a Dream</h2>
                    <Col className={'text-center'}>
                        <ListGroup.Item className={'bg-secondary'} action variant="secondary">
                            Funny
                        </ListGroup.Item>
                        <ListGroup.Item className={'bg-secondary'} action variant="secondary">
                            Nightmare
                        </ListGroup.Item>
                        <ListGroup.Item className={'bg-secondary'} action variant="secondary">
                            Animals
                        </ListGroup.Item>
                        <ListGroup.Item className={'bg-secondary'} action variant="secondary">
                            School
                        </ListGroup.Item>
                        <ListGroup.Item className={'bg-secondary'} action variant="secondary">
                            Work
                        </ListGroup.Item>
                        <ListGroup.Item className={'bg-secondary'} action variant="secondary">
                            Lucid Dreams
                        </ListGroup.Item>
                        <ListGroup.Item className={'bg-secondary'} action variant="secondary">
                            Reoccurring
                        </ListGroup.Item>
                        <ListGroup.Item className={'bg-secondary'} action variant="secondary">
                            Out of Body
                        </ListGroup.Item>
                        <ListGroup.Item className={'bg-secondary'} action variant="secondary">
                            Daydream
                        </ListGroup.Item>
                        <ListGroup.Item className={'bg-secondary'} action variant="secondary">
                            Weird
                        </ListGroup.Item>
                    </Col>
                </Row>
            </Container>
        </>
    );
}