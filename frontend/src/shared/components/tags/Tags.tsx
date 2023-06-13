import {Badge, Spinner} from "react-bootstrap";
import { useGetCategoriesByPostCategoryPostIdQuery} from "../../../store/apis";
import {Link} from "react-router-dom";


interface CategoryTagProps {
    postId: string
    // category: Category
}

export function CategoryTag(props: CategoryTagProps) {
    const { postId } = props

    // const { data: postCategory, isLoading: isLoadingPostCategoryPostId } = useGetAllPostsByPostCategoryQuery(category.categoryId)
    const { data: categories, isLoading: isLoadingCategoryTag } = useGetCategoriesByPostCategoryPostIdQuery(postId)

    if(isLoadingCategoryTag || categories === undefined) {
        return(<Spinner animation="border" />)
    }
    // if(isLoadingPostCategoryPostId || postCategory === undefined) {
    //     return(<Spinner animation="border" />)
    // }

    return (
        <>
                {categories.map((category) =>
                    <Link to={`/category-page/${category.categoryId}/${category.categoryName}`}>
                        <Badge pill bg="dark">{category.categoryName}</Badge>
                    </Link>
                )}
        </>
    )
}