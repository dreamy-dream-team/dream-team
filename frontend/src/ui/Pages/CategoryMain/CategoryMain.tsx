import {Container, Spinner} from "react-bootstrap";
import styles from './category-main.module.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import { TopNav } from "../../Components/TopNav";
import { PostCard } from "../../Components/PostCard";
import {Post} from "../../../shared/interfaces/Post";
import {useGetAllPostsQuery} from "../../../store/apis";


export function CategoryMain() {
    return(
        <>
            <TopNav/>
            <Container className="container">
                <h4 className="font-weight-bold py-3 mb-4">Category Main Page</h4>
                <div className={styles.content_wrapper}>
                <CategoryRow/>
                </div>
            </Container>
        </>
    )
}
export function CategoryRow() {

        const { data, isLoading } = useGetAllPostsQuery("")
        if(isLoading || data === undefined) {
            return(
                <Spinner animation="border" />)
        }

    return (
        <>
            <div className={styles.wrapper}>
                <h4>$Category Title</h4>
                <Carousel showDots={true} responsive={responsive}>

                    {data.map((post:Post) => <PostCard post={post} key={post.postId}/>)}

                </Carousel>
            </div>
        </>
    )
}

const responsive = {
    largeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
