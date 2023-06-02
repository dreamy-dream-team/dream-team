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
                        <img
                            alt=""
                            src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
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