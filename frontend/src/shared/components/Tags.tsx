import {Badge, Spinner} from "react-bootstrap";
import {Category} from "../interfaces/Category";
import {useGetCategoriesByPostCategoryPostIdQuery} from "../../store/apis";

interface CategoryTagProps {
    postId: string | null
}

export function CategoryTag(props: CategoryTagProps) {
    const { postId } = props
    const { data: categories, isLoading: isLoadingCategoryTag } = useGetCategoriesByPostCategoryPostIdQuery(postId)

    if(isLoadingCategoryTag || categories === undefined) {
        return(<Spinner animation="border" />)
    }

    return (
        <>
            <a href="#">
                {categories.map((category) => <Badge pill bg="dark">{category.categoryName}</Badge>)}
            </a>
        </>
    )
}