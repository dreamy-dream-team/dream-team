import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Settings } from "./Settings/Settings";
import { Terms } from './Pages/Terms.tsx'
import { Home } from './Pages/Homepage/Home.tsx'
import { FourOhFour } from './Pages/FourOhFour'
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Provider } from "react-redux";
import { ProfileArchive } from "./Pages/ProfileArchive/ProfileArchive.tsx";
import { CategoryMain } from "./Pages/CategoryMain/CategoryMain";
import { PostPage } from "./Pages/Posts/PostPage";
import { CategoryPage } from "./Pages/Category/CategoryPage";
import { TopNav } from "../shared/components/TopNav";
import {Profile} from "./Pages/profile/profile.tsx";



interface Props {
    store: ToolkitStore
}

export function App(props: Props)  {
    const {store} = props
    return (
        <>
            <Provider store = {store}>
            <BrowserRouter>
                <TopNav/>
                <Routes>
                    <Route path='/category-page/:categoryId/:categoryName' element={<CategoryPage />} />
                    <Route path='/post-page/:postId' element={<PostPage />} />
                    <Route path='/category-main' element={<CategoryMain />} />
                    <Route path='/ProfileArchive' element={<ProfileArchive />} />
                    <Route path='/Terms' element={<Terms />} />
                    <Route path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path={'/settings'} element={<Settings />} />
                    <Route path='/profile/:profileId' element={<Profile />} />
                </Routes>
            </BrowserRouter>
            </Provider>
        </>
    )
}