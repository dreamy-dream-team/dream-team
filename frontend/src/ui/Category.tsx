import {PostForm} from "./Post-form/Post-form";
import {DreamPost} from "./Posts/Posts";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {PostFormModal} from "./Post-form/Post-formModal";


export function Category() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Dreamery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className="me-auto">
                            <Nav.Link href="#home">filler navbar</Nav.Link>
                        </Nav>
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