import {Container, Spinner} from "react-bootstrap";
import styles from './category-main.module.css';
import 'react-multi-carousel/lib/styles.css';
import {useGetAllCategoryQuery} from "../../../store/apis";
import {Category} from "../../../shared/interfaces/Category";
import {CategoryCarousel} from "../../../shared/components/category-carousel/CategoryCarousel";

export function CategoryMain() {
    return(
        <>
            <Container>
                <h4>Category Main Page</h4>
                <div className={styles.content_wrapper}>
                <CategoryRow/>
                </div>
            </Container>
        </>
    )
}

export function CategoryRow() {
        const {data: dataCategory, isLoading: isLoadingCategory} = useGetAllCategoryQuery("")
        const categories = dataCategory ?? []
        if(isLoadingCategory) {
            return(<Spinner animation="border" />)
        }

    return (
        <>
            <div className={styles.wrapper}>
                {categories.map((category:Category) => (

                    <CategoryCarousel key={category.categoryId} category={category} />

                ) )}
            </div>
        </>
    )
}

