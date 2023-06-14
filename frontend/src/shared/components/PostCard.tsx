import {Button, Card} from "react-bootstrap";
import {Post} from "../interfaces/Post.tsx";
import {useGetProfileByProfileIdQuery, useGetVotesByVotePostIdQuery, useToggleVoteMutation} from "../../store/apis";
import {CategoryTag} from "./tags/Tags";
import {useJwtToken} from "../hooks/useJwtHook";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Vote} from "../interfaces/Vote";

interface Props {
    post: Post
}
export function PostCard(props: Props) {
    const { post } = props
    const [submitVote] = useToggleVoteMutation()
    const { data: profile, isLoading} = useGetProfileByProfileIdQuery(post.postProfileId)
    const loggedInProfile = useJwtToken().profile
    const { data, isLoading: voteIsLoading, refetch } = useGetVotesByVotePostIdQuery(post.postId)
    const vote = data ?? []
    const countedVotes = vote.reduce((acc: {upVote: number, downVote: number}, cur: Vote) => {
        if(cur.voteValue) {
            acc.upVote = acc.upVote + 1
        } else if(cur.voteValue === false) {
            acc.downVote = acc.downVote + 1
        }
        return acc
    },
        {
        upVote: 0,
        downVote: 0
    })
    console.log(countedVotes)
    const clickVoteUp = async () => {
        const profileId = loggedInProfile?.profileId
        if (profileId) {
            await submitVote({votePostId: post.postId, voteValue: true, voteProfileId: profileId})
            await refetch()
        }
    }
    const clickVoteDown = async () => {
        const profileId = loggedInProfile?.profileId
        if (profileId) {
            await submitVote({votePostId: post.postId, voteValue: false, voteProfileId: profileId})
            await refetch()
        }
    }

    if(isLoading || profile === undefined) {
        return <></>
    }
    if(voteIsLoading || vote === undefined) {
        return <></>
    }
    if (profile === null) {
        return (<></>)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{profile.profileHandle}</Card.Title>
                    <Card.Title>{post.postTitle}</Card.Title>
                    <Card.Text as={"div"}>
                        {post.postContent}
                    </Card.Text>
                    <CategoryTag postId={post.postId}/>
                    <br></br>
                    <Button onClick={clickVoteUp}><FontAwesomeIcon icon="arrow-up"/>{countedVotes.upVote}</Button>
                    <Button onClick={clickVoteDown}><FontAwesomeIcon icon="arrow-down"/>{countedVotes.downVote}</Button>
                    {new Date(post.postDateTime).toLocaleString()}
                </Card.Body>
            </Card>
        </>
    )
}