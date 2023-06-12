import {Post} from "../interfaces/Post";
import {Card, Spinner} from "react-bootstrap";
import {
    useGetAllPostsByPostCategoryQuery,
    useGetProfileByProfileIdQuery
} from "../../store/apis";
import Carousel from "react-multi-carousel";
import {Category} from "../interfaces/Category";
import {CategoryTag} from "./Tags";
import {Link} from "react-router-dom";

interface CategoryCardProps {
    category : Category
}


export function CategoryCarousel(props: CategoryCardProps) {
    const { category } = props
    const { data: dataPostsByCategory, isLoading: isLoadingPostsByCategory } = useGetAllPostsByPostCategoryQuery(category.categoryId)

    if(isLoadingPostsByCategory || dataPostsByCategory === undefined) {
        return(<Spinner animation="border" />)
    }

    return (
        <>
            <h4 key={category.categoryId}>{category.categoryName}</h4>
            <Carousel showDots={true} responsive={responsive}>

            {dataPostsByCategory.map((post:Post) =>
                <Card>
                <Card.Body>
                    <DisplayProfileHandle profileId={post.postProfileId} postProfileHandleIsVisible={post.postProfileHandleIsVisible}/>
                    <Card.Title>{post.postTitle}</Card.Title>
                    <Card.Text as={"div"}>
                        {post.postContent.slice(0,100)}...
                        <br></br>
                        <Link to={`/post/${post.postId}`}>Read more</Link>
                    </Card.Text>
                    <CategoryTag postId={post.postId}></CategoryTag>
                    <br></br>
                    {new Date(post.postDateTime).toLocaleString()}
                </Card.Body>
            </Card>)}
            </Carousel>
        </>
    )
}
interface DisplayProfileHandleProps {
    profileId: string,
    postProfileHandleIsVisible: boolean

}
function DisplayProfileHandle(props: DisplayProfileHandleProps) {
    const {profileId, postProfileHandleIsVisible} = props
    const { data: profile, isLoading} = useGetProfileByProfileIdQuery(profileId)

    if(isLoading || profile === undefined) {
        return <></>
    }
    if(postProfileHandleIsVisible === false) {
        return <><Card.Title>anonymous</Card.Title></>
    }
    return (
        <><Card.Title>{profile.profileHandle}</Card.Title></>
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
