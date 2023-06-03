import {Badge, Card, Form, Row} from "react-bootstrap";

export function DreamPost() {
    return (
        <>
            <div className={'border rounded-1 mx-auto p-5 m-2'} style={{width: '35rem'}}>
                <Form.Check
                    type="checkbox"
                    id="autoSizingCheck2"
                    label="Most Popular"
                />
                <Form.Check
                    type="checkbox"
                    id="autoSizingCheck2"
                    label="Most Recent"
                />
                <Row>
                    <Card className={'mx-auto'} style={{ width: '30rem' }}>
                        <Card.Body>
                            <Card.Title>Dream Title</Card.Title>
                            <Card.Text>
                                In my funny dream, I turned into a mischievous monkey in a jungle. I stumbled upon a secret comedy club where animals performed. A squirrel hosted, a turtle did a slow-motion routine, and an owl shared puns. I joined in and had the crowd laughing with my animal imitations. But then, a group of monkeys crashed the show, throwing banana peels and causing chaos. An elephant stepped in and ended the madness with a loud trumpeting noise.
                            </Card.Text>
                            <a href="#">
                                <Badge pill bg="dark">
                                    Funny
                                </Badge>
                            </a>
                            <a href="#">
                                <Badge pill bg="dark">
                                    Animals
                                </Badge>
                            </a>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        </>
    );
}