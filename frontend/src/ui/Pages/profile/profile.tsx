
import {Col, Container, Row} from "react-bootstrap"
// import {TopNav} from "../../../shared/components/TopNav.tsx";
import Links from "./right.tsx";
// import ProfilePost from "./post.tsx";
import {SideNav} from "../../../shared/components/SideNav.tsx";
import {useGetPublicPostsByProfileIdQuery} from "../../../store/apis.ts";
import {useParams} from "react-router-dom";
import {PostCard} from "../../../shared/components/PostCard.tsx";


export const Profile = () => {
    const {profileId} = useParams()
    const {data} = useGetPublicPostsByProfileIdQuery(profileId as string)
    const posts = data ?? []
    console.log(posts)
    return(
        <>
        {/*< TopNav />*/}

        <Container fluid className="bg-secondary">
            {/*navbar*/}
            <Row>
                <Col sm={3}>
                <SideNav />
                </Col>

                <Col sm={6}>
                    {posts.map((post)=> <PostCard post={post}/>)}
                </Col>

                <Col sm={3}>
                < Links />
                </Col>
            </Row>

        </Container>
        </>
    )
}