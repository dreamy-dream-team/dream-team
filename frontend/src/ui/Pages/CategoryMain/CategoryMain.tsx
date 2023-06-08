import {Container, Spinner} from "react-bootstrap";
import styles from './category-main.module.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import { TopNav } from "../../Components/TopNav";
import { PostCard } from "../../Components/PostCard";
import {Post} from "../../../shared/interfaces/Post";
import {useGetAllCategoryQuery, useGetAllPostsPublishedQuery} from "../../../store/apis";
import {Category} from "../../../shared/interfaces/Category";


export function CategoryMain() {
    return(
        <>
            <TopNav/>
            <Container className="container">
                <h4 className="font-weight-bold py-3 mb-4">Category Main Page</h4>
                <div className={styles.content_wrapper}>
                <CategoryRow/>
                <CategoryRow/>
                <CategoryRow/>
                </div>
            </Container>
        </>
    )
}
export function CategoryRow() {

        const {
            data: dataPosts,
            error: errorPosts,
            isLoading: isLoadingPosts
        } = useGetAllPostsPublishedQuery("")
        const {
            data: dataCategory,
            error: errorCategory,
            isLoading: isLoadingCategory
        } = useGetAllCategoryQuery("")
        if(
            isLoadingPosts ||
            isLoadingCategory
        ) {
            return(
                <Spinner animation="border" />)
        }

    return (
        <>
            <div className={styles.wrapper}>

                {dataCategory.map((category:Category) => <h4 key={category.categoryId}>{category.categoryName}</h4>)}

                <Carousel showDots={true} responsive={responsive}>

                    {dataPosts.map((post:Post) => <PostCard post={post} key={post.postId}/>)}

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
