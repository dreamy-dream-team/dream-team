import {Col, Container, Navbar, Row} from "react-bootstrap";

export function TopNav() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Row>
                            <Col lg={2}>
                        <img
                            alt=""
                            src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                            </Col>
                            <Col lg={8}>
                        <Navbar.Brand href="#home" className="text-center">DREAMERY</Navbar.Brand>
                            </Col>
                            <Col lg={2}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-person-fill text-white" viewBox="0 0 16 16">
                                    <path
                                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                </svg>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
                <br />
        </Navbar>
        </>
    )
}

export default TopNav;