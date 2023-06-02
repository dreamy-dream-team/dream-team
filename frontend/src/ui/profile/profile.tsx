// import React from "react";
import {Col, Container, Row, Image} from "react-bootstrap"
import BrandExample from "../navbar/navbar.tsx";
import Categories from "./left.tsx";
import Links from "./right.tsx";
// import Cloud from './images/cloud.jpg';

export const Profile = () => {
    return(
        <>
        < BrandExample />

        <Container fluid className="bg-black">
            {/*navbar*/}
            <Row>
                {/*Categories*/}
                <Col lg={3}>
                <Categories />
                </Col>

                {/*Posts*/}
                <Col lg={6}>
                {/*<Image src={Cloud} alt="cloud" />*/}

                </Col>

                {/*Links*/}
                <Col lg={3}>
                < Links />
                </Col>
            </Row>
        </Container>
        </>
    )
}