import {Col, Container, Row, Spinner} from "react-bootstrap";
import {useGetAllPostsByPostCategoryQuery} from "../../../store/apis";
import {useParams} from "react-router-dom";
import {PostCard} from "../../../shared/post-card/PostCard";
import {Post} from "../../../shared/interfaces/Post";
import {PostFormModal} from "../../PostForm/PostFormModal";


export function CategoryPage() {
    const { categoryId, categoryName } = useParams()
    const { data: posts, isLoading } = useGetAllPostsByPostCategoryQuery(categoryId as string)

    if(isLoading || posts === undefined) {
        return(<Spinner animation="border" />)
    }
    console.log(posts)
    return (
        <>
            <Container>
            <Row>
                <h1 key={categoryId}>{categoryName}</h1>
                <Col>
                    <Container>
                        <PostFormModal/>
                        {posts.map((post:Post) =>
                        <PostCard post={post}></PostCard>)}
                    </Container>
                </Col>
            </Row>
            </Container>
        </>
    );
}