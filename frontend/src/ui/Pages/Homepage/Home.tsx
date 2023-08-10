import {PostFormModal} from "../../PostForm/PostFormModal.tsx";
import {SideNav} from "../../../shared/components/SideNav.tsx";
import {useGetAllPostsQuery} from "../../../store/apis.ts";
import {PostCard} from "../../../shared/post-card/PostCard.tsx";
import {Col, Container, Row} from "react-bootstrap";
import Pagination from "../../../shared/components/pagination/Pagination.tsx";
import {useState} from "react";


export function Home() {
    const {data} = useGetAllPostsQuery("")
    const posts = data?? []


    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            <SideNav />
            <PostFormModal/>
            <Container>
                <Row className={"py-2"}>
                    <Col>
                        {posts.map(post => <PostCard post={post} key={post.postId}/>)}
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={posts.length}
                            paginate={paginate}
                        />
                    </Col>

                </Row>
            </Container>
        </>
    )
}