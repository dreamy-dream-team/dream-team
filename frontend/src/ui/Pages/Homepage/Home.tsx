import {PostFormModal} from "../../PostForm/PostFormModal.tsx";
import {SideNav} from "../../../shared/components/SideNav.tsx";
import {useGetAllPostsQuery} from "../../../store/apis.ts";
import {PostCard} from "../../../shared/post-card/PostCard.tsx";
import {Col, Container, Row} from "react-bootstrap";


export function Home() {
    const {data} = useGetAllPostsQuery("")
    const posts = data?? []
    return (
        <>
            <SideNav />
            <PostFormModal/>
            <Container>
                <Row className={"py-2"}>
                    <Col>
                        {posts.map(post => <PostCard post={post} key={post.postId}/>)}
                    </Col>
                </Row>
            </Container>
        </>
    )
}