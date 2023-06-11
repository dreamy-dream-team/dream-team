
import {Col, Container, Row} from "react-bootstrap"
import BrandExample from "../navbar/navbar.tsx";
import Categories from "./left.tsx";
import Links from "./right.tsx";
import ProfilePost from "./post.tsx";


export const Profile = () => {
    return(
        <>
        < BrandExample />

        <Container fluid className="bg-secondary">
            {/*navbar*/}
            <Row>
                {/*Categories*/}
                <Col lg={3}>
                <Categories />
                </Col>

                {/*Posts*/}
                <Col lg={6}>
                <ProfilePost />


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