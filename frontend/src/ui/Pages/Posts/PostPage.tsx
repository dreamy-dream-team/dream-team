import {Container, Spinner} from "react-bootstrap";
import {PostCard} from "../../../shared/components/PostCard";
import {Post} from "../../../shared/interfaces/Post";
import {useGetPostByPostIdQuery} from "../../../store/apis";

interface Props {
    post: Post

}
export function PostPage() {


    return(
        <>
        <Container>
            <h4>Post Page</h4>

        </Container>
        </>
    )

}