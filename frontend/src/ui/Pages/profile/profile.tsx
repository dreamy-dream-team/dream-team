
import {Col, Container, Row} from "react-bootstrap"
// import {TopNav} from "../../../shared/components/TopNav.tsx";
import Links from "./right.tsx";
import ProfilePost from "./post.tsx";
import {SideNav} from "../../../shared/components/SideNav.tsx";


export const Profile = () => {
    return(
        <>
        {/*< TopNav />*/}

        <Container fluid className="bg-secondary">
            {/*navbar*/}
            <Row>
                {/*Categories*/}
                <Col lg={3}>
                <SideNav />
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