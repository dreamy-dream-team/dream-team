import {Badge, Card} from "react-bootstrap";
import {Post} from "../interfaces/Post.tsx";

interface Props {
    post: Post
}
export function PostCard(props: Props) {
    const { post } = props
    return (
        <>
    <Card>
        <Card.Body>
            <Card.Title>{post.postTitle}</Card.Title>
            <Card.Text as={"div"}>
                {post.postContent}
            </Card.Text>
            <a href="#">
                <Badge pill bg="dark">
                    Funny
                </Badge>
            </a>
            <a href="#">
                <Badge pill bg="dark">
                    Animals
                </Badge>
            </a>
        </Card.Body>
    </Card>
        </>
    )
}