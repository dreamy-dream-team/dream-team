import {Col, Container, Nav, Navbar, Row, Spinner} from "react-bootstrap";
import {useGetAllPostsByPostCategoryQuery} from "../../../store/apis";
import {useParams} from "react-router-dom";
import {PostCard} from "../../../shared/components/PostCard";
import {Post} from "../../../shared/interfaces/Post";

export function CategoryPage() {
    const { categoryId, categoryName } = useParams()
    const { data: posts, isLoading } = useGetAllPostsByPostCategoryQuery(categoryId as string)

    if(isLoading || posts === undefined) {
        return(<Spinner animation="border" />)
    }
    console.log(posts)
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Dreamery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">filler navbar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
            <Row>
                <Col>
                    <h1 key={categoryId} className={'m-5 text-center'}>{categoryName}</h1>
                </Col>
                <Col>
                    <Container>

                        {posts.map((post:Post) =>
                        <PostCard post={post}></PostCard>)}
                    </Container>
                </Col>
            </Row>
            {/*<PostFormModal/>*/}
            {/*<PostForm/>*/}
            </Container>
        </>
    );
}