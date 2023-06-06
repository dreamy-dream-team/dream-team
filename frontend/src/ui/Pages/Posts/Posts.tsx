import {Badge, Card, Dropdown, Row} from "react-bootstrap";

export function DreamPost() {
    return (
        <>
            <div className={'border rounded-1 mx-auto p-3 m-2'} style={{width: '35rem'}}>
                <Dropdown className={'mb-3'}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Sort By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Most Popular</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Most Recent</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

                <Row>
                    <Card className={'mx-auto shadow-lg'} style={{ width: '30rem' }}>
                        <Card.Body>
                            <Card.Title>Dream Title</Card.Title>
                            <Card.Text>
                                In my funny dream, I turned into a mischievous monkey in a jungle. I stumbled upon a secret comedy club where animals performed. A squirrel hosted, a turtle did a slow-motion routine, and an owl shared puns. I joined in and had the crowd laughing with my animal imitations. But then, a group of monkeys crashed the show, throwing banana peels and causing chaos. An elephant stepped in and ended the madness with a loud trumpeting noise.
                            </Card.Text>
                            <a href="Posts#">
                                <Badge pill bg="dark">
                                    Funny
                                </Badge>
                            </a>
                            <a href="Posts#">
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