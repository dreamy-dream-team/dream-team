import {PostContainer} from "./Post-container.tsx";
import {DreamPost} from "./Posts.tsx";
import {FindADream} from "./Find.tsx";


export function Home() {
    return (
        <>
           <PostContainer/>
            <FindADream/>
            <DreamPost/>
        </>
    );
}