import {Post} from "../../interfaces/Post";
import {Card, Spinner} from "react-bootstrap";
import {
    useGetAllPostsByPostCategoryQuery,
    useGetProfileByProfileIdQuery
} from "../../../store/apis";
import Carousel from "react-multi-carousel";
import {Category} from "../../interfaces/Category";
import {CategoryTag} from "../tags/Tags";
import {Link} from "react-router-dom";
import styles from "./category-carousel.module.css";

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
            <div className={styles.row_wrapper}>
            <h4 key={category.categoryId}>{category.categoryName}</h4>
            <Carousel showDots={true} responsive={responsive}>
            {dataPostsByCategory.map((post:Post) =>
                <Card>
                <Card.Body>
                    <DisplayProfileHandle profileId={post.postProfileId} postProfileHandleIsVisible={post.postProfileHandleIsVisible}/>
                    <Card.Title>{post.postTitle}</Card.Title>
                    <Card.Text as={"div"}>
                        {post.postContent.slice(0,115)}...
                        <br></br>
                        <Link to={`/post-page/${post.postId}`}>Read more</Link>
                    </Card.Text>
                    <CategoryTag postId={post.postId}/>
                    <br></br>
                    {new Date(post.postDateTime).toLocaleString()}
                </Card.Body>
            </Card>)}
            </Carousel>
            </div>
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
