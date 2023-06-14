
import {Col, Container, Row} from "react-bootstrap"
import BrandExample from "../navbar/navbar.tsx";
import Categories from "./left.tsx";
import Links from "./right.tsx";
import ProfilePost from "./post.tsx";


export const Profile = () => {
    return(
        <>
        < BrandExample />
        <h3 className="bg-secondary text-center text-white">Welcome Username to your profile </h3>
        <Container fluid className="bg-secondary pt-5">
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