import {Container, Spinner} from "react-bootstrap";
import {PostCard} from "../../../shared/post-card/PostCard";
import {useGetPostByPostIdQuery} from "../../../store/apis";
import {useParams} from "react-router-dom";

export function PostPage() {
    const { postId } = useParams()
    const {data: post, isLoading} = useGetPostByPostIdQuery(postId as string)

    if(isLoading || post === undefined) {
        return(<Spinner animation="border" />)
    }

    return(
        <>
        <Container>
            <h4>Post Page</h4>
            <PostCard post={post}/>
        </Container>
        </>
    )

}