import {Container, Spinner} from "react-bootstrap";
import styles from './category-main.module.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import { TopNav } from "../../../shared/components/TopNav.tsx";
import {useGetAllCategoryQuery, useGetAllPostsPublishedQuery} from "../../../store/apis";
import {Category} from "../../../shared/interfaces/Category";
import {CategoryCard} from "../../../shared/components/CategoryCard";
import {Post} from "../../../shared/interfaces/Post";


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

        const {
            data: dataPosts,
            isLoading: isLoadingPosts
        } = useGetAllPostsPublishedQuery("")
        const {
            data: dataCategory,
            isLoading: isLoadingCategory
        } = useGetAllCategoryQuery("")
        const categories = dataCategory ?? []
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

                {categories.map((category:Category) => (
                    <>
                        <h4 key={category.categoryId}>{category.categoryName}</h4>
                        <Carousel showDots={true} responsive={responsive}>
                            {categories.map((category:Category) => <CategoryCard categoryId={category.categoryId}/>)}
                        </Carousel>
                    </>
                ) )}

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
