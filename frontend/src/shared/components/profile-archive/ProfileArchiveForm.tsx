import styles from "./ProfileArchiveForm.module.css";
import {Col, Container, Row} from "react-bootstrap";
import Categories from "../../../ui/Pages/profile/left.tsx";
import {PostCard} from "../PostCard.tsx";
import {useAppSelector} from "../../../store/store.ts";
import {useGetAnonymousPostsByProfileIdQuery} from "../../../store/apis.ts";
import {Post} from "../../interfaces/Post.tsx";


/*import {useSelector} from "react-redux";*/


export function ProfileArchiveForm() {

    const auth = useAppSelector((state) => state.auth);
    // @ts-ignore
    const postProfileId = auth?.profileId;


    const {data, isLoading: anonymousLoading} = useGetAnonymousPostsByProfileIdQuery(postProfileId);

    if (anonymousLoading === undefined) {
        return <>is Loading</>
    }

    interface SortedPosts {
        anonymousPosts: Post [],
        privatePosts: Post[],
        normalPosts: Post[]

    }

    const posts = data ?? []

    const sortedPosts: SortedPosts = posts.reduce((acc: SortedPosts, cur: Post) => {

        if (cur.postProfileHandleIsVisible === false) {
            acc.anonymousPosts.push(cur)
        } else if (cur.postIsPublished === false) {
            console.log(cur)
            acc.privatePosts.push(cur)
        } else {
            acc.normalPosts.push(cur)
        }
        return acc

    }, {
        anonymousPosts: [], privatePosts: [], normalPosts: []
    })
    console.log(sortedPosts)
    /*    //extract the array of posts from the data
        const publicPosts = publicPostsData?.data;
        const journalPosts = journalPostsData?.data;
        const anonymousPosts = anonymousPostsData?.data;*/


    /*if (!Array.isArray(publicPosts)) {
    console.log(publicPosts);
    return <div>Received data is not an array</div>;*/

    return (
        <>

            <Container fluid>

                <Row style={{marginTop: '200px'}}>
                    <Col className="p-3" md={3} xs={12} style={{height: "100vh"}}>

                        <Categories/>
                    </Col>

                    <Col md={{span: 6, offset: 1}} xs={12}>
                        <div className={styles.postSection}>
                            <h2>Public</h2>
                            <div className={styles.postContainer}>
                                {sortedPosts.normalPosts.map((post, idx) => (
                                    <PostCard key={idx} post={post}/>
                                ))}
                            </div>
                        </div>
                        <div className={styles.postSection}>
                            <h2>Journal</h2>
                            <div className={styles.postContainer}>
                                {sortedPosts.privatePosts.map((post, idx) => (
                                    <PostCard key={idx} post={post}/>
                                ))}
                            </div>
                        </div>
                        <div className={styles.postSection}>
                            <h2>Anonymous</h2>
                            <div className={styles.postContainer}>
                                {sortedPosts.anonymousPosts.map((post, idx) => (
                                    <PostCard key={idx} post={post}/>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}