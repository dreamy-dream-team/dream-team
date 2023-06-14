import {useGetAnonymousPostsQuery, useGetJournalPostsQuery, useGetPublicPostsQuery} from "../../../store/apis.ts";
import {TopNav} from "../TopNav.tsx";
import {Col, Container, Row} from "react-bootstrap";
import {SideNav} from "../SideNav.tsx";
import Categories from "../../../ui/Pages/profile/left.tsx";
import {PostCard} from "../PostCard.tsx";


export function ProfileArchiveForm() {
    const {data: publicPosts, isError: publicError, isLoading: publicLoading} = useGetPublicPostsQuery();
    const {data: journalPosts, isError: journalError, isLoading: journalLoading} = useGetJournalPostsQuery();
    const {data: anonymousPosts, isError: anonymousError, isLoading: anonymousLoading} = useGetAnonymousPostsQuery();

    if (publicLoading || journalLoading || anonymousLoading) return <p>Loading...</p>
    if (publicError || journalError || anonymousError) return <p>Error while fetching posts</p>

    return (
        <>
            <TopNav/>
            <Container fluid>
                <Row style={{marginTop: '200px'}}>
                    <Col className="p-3" md={3} xs={12} style={{height: "100vh"}}>
                        <SideNav/>
                        <Categories/>
                    </Col>

                    <Col md={{span:6, offset: 1}} xs={12}>
                        <h2>Public</h2>
                        {publicPosts?.map((post, idx) => (
                            <PostCard key={idx} post={post}/>
                            ))}
                        <h2>Journal</h2>
                        {journalPosts?.map((post, idx) => (
                            <PostCard key={idx} post={post}/>
                            ))}
                        <h2>Anonymous</h2>
                        {anonymousPosts?.map((post, idx) => (
                            <PostCard key={idx} post={post}/>
                            ))}
                    </Col>
                </Row>
            </Container>
        </>
    );
}