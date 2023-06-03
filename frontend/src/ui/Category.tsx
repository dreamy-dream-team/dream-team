import {PostForm} from "./Post-form.tsx";
import {DreamPost} from "./Posts.tsx";
import {FindADream} from "./Find.tsx";


export function Category() {
    return (
        <>
            <PostForm/>
            <FindADream/>
            <DreamPost/>
        </>
    );
}