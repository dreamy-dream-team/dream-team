import {Col, Container, ListGroup, Row} from "react-bootstrap";

export function FindADream() {
    return (
        <>
            <Container className={'border rounded-1 bg-secondary p-5 w-25'} style={{position: 'absolute'}}>
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
                            Weird
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
                            Lucid Dreams
                        </ListGroup.Item>
                    </Col>
                </Row>
            </Container>
        </>
    );
}