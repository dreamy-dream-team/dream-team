import {DreamPost} from "../Posts/Posts.tsx";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {PostFormModal} from "../../PostForm/PostFormModal.tsx";
import {PostForm} from "../../PostForm/PostForm.tsx";



export function Category() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Dreamery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">filler navbar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Row>
                <Col>
                    <Container>
                        <p>Placeholder for Find a Dream</p>
                    </Container>
                </Col>
                <Col>
                    <h1 className={'m-5 text-center'}>Category</h1>
                </Col>
                <Col>
                    <Container>
                    </Container>
                </Col>
            </Row>
            <PostFormModal/>
            <PostForm/>
            <DreamPost/>
        </>
    );
}