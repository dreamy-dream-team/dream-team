import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Settings } from "./Settings/Settings";
// import { SignIn } from './Pages/login/SignIn'
import { SignUp } from './Pages/login/SignUp'
import { Terms } from './Pages/Terms.tsx'
import { ForgotPassword } from './Pages/login/ForgotPassword.tsx';
import { Home } from './Pages/Homepage/Home.tsx'
import { FourOhFour } from './Pages/FourOhFour'
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Provider } from "react-redux";
import {SignInForm} from "../shared/components/main-nav/sign-in/SignInForm.tsx";
import { ProfileArchive } from "./Pages/ProfileArchive/ProfileArchive.tsx";
import { CategoryMain } from "./Pages/CategoryMain/CategoryMain";
import { PostPage } from "./Pages/Posts/PostPage";
import { CategoryPage } from "./Pages/Category/CategoryPage";



interface Props {
    store: ToolkitStore
}

export function App(props: Props)  {
    const {store} = props
    return (
        <>
            <Provider store = {store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/category-page/:categoryId/:categoryName' element={<CategoryPage />} />
                    <Route path='/post-page/:postId' element={<PostPage />} />
                    <Route path='/category-main' element={<CategoryMain />} />
                    <Route path='/ProfileArchive' element={<ProfileArchive />} />
                    <Route path='/ForgotPasswordForm' element={<ForgotPassword />} />
                    <Route path='/SignUp' element={<SignUp />} />
                    <Route path='/Terms' element={<Terms />} />
                    <Route path='/SignIn' element={<SignInForm />} />
                    <Route path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path={'/settings'} element={<Settings />} />
                </Routes>
            </BrowserRouter>
            </Provider>
        </>
    )
}