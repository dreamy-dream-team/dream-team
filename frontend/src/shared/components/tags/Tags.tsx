import {Badge, Spinner} from "react-bootstrap";
import {useGetCategoriesByPostCategoryPostIdQuery} from "../../../store/apis";

interface CategoryTagProps {
    postId: string
}

export function CategoryTag(props: CategoryTagProps) {
    const { postId } = props
    const { data: categories, isLoading: isLoadingCategoryTag } = useGetCategoriesByPostCategoryPostIdQuery(postId)

    if(isLoadingCategoryTag || categories === undefined) {
        return(<Spinner animation="border" />)
    }

    return (
        <>
            <a href="frontend/src/shared/components#">
                {categories.map((category) => <Badge pill bg="dark">{category.categoryName}</Badge>)}
            </a>
        </>
    )
}