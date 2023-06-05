//import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const categories = [
    "Funny",
    "Nightmares",
    "School",
    "Animals",
    "Daydreams",
    "Out of body",
    "Weird"
];

const comments = [
    { title: "Private", posts: ["Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."] },
    { title: "Journal", posts: ["Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."] },
    { title: "Anonymous", posts: ["Parite enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
        " aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."] },
];

export const ProfileArchive = () => {
    return (
        <>
            <Container fluid>
                <Row className="justify-content-center text-center" style={{marginTop:'20px'}}>
                    <Col xs ={12}>
                        <Image src="/Images/Logo-1.jpeg" alt="Logo" />
                    </Col>
                    <Col xs={12}>
                    <h1 className="mt-3">Dreamery Journal</h1>
                    </Col>
                </Row>
                <Row style={{marginTop: '200px'}}>
                    <Col className="p-3" md={3} xs={12} style={{height: "100vh"}}>
                        <div className="border border-3 rounded p-2 bg-light h-100 d-flex flex-column justify-content-center align-items-center">
                            {categories.map((category, idx) => (
                                <Card key={idx} className="text-center my-2 border border-3">
                                    {category}
                                </Card>
                            ))}
                        </div>
                    </Col>

                    <Col md={{span: 6, offset: 1}} xs={12}>
                        {comments.map((comment, idx) => (
                            <Card key={idx} className="my-4 border-0 shadow-lg rounded">
                                <Card.Body className="p-4">
                                    <Card.Title>{comment.title}</Card.Title>
                                    <hr/>
                                    <div style={{overflowY: 'auto', maxHeight: '200px'}}>
                                        {comment.posts.map((post, pidx) => (
                                            <div key={pidx} className="mt-3 mb-2">
                                                <Card.Text>
                                                    {post}
                                                </Card.Text>
                                                <hr/>
                                            </div>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProfileArchive;