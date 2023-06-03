// import React from "react";
import {Col, Container, Navbar, Row} from "react-bootstrap";
import React from "react";

// export const Navbar = () => {
function BrandExample() {
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
                                     className="bi bi-person text-white" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
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

export default BrandExample;