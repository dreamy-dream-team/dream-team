import {Post} from "../interfaces/Post";
import {PostCard} from "./PostCard";
import {Card, Spinner} from "react-bootstrap";
import {
    useGetAllPostsByPostCategoryQuery
} from "../../store/apis";

interface CategoryCardProps {
    categoryId : string
}


export function CategoryCard(props: CategoryCardProps) {
    const { categoryId } = props

    const {
        data: dataPostsByCategory,
        isLoading: isLoadingPostsByCategory
    } = useGetAllPostsByPostCategoryQuery(categoryId)

    if(
         isLoadingPostsByCategory || dataPostsByCategory === undefined
    ) {
        return(
            <Spinner animation="border" />)
    }
    return (
        <>

            {dataPostsByCategory.map((post:Post) => <PostCard post={post} key={post.postId}/>)}

        </>
    )
}
