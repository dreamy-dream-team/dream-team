import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'


import { SignIn } from './Pages/login/SignIn'
import { SignUp } from './Pages/login/SignUp'
import { Terms } from './Pages/Terms.tsx'
import { ForgotPassword } from './Pages/login/ForgotPassword.tsx';
import { Home } from './Pages/Homepage/Home.tsx'
import { FourOhFour } from './Pages/FourOhFour'
import { ProfileArchive } from './Pages/ProfileArchive/ProfileArchive.tsx';
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Provider } from "react-redux";
import { CategoryMain } from "./Pages/CategoryMain/CategoryMain";


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
                    <Route path='/CategoryMain' element={<CategoryMain />} />
                    <Route path='/ProfileArchive' element={<ProfileArchive />} />
                    <Route path='/ForgotPassword' element={<ForgotPassword />} />
                    <Route path='/SignUp' element={<SignUp />} />
                    <Route path='/Terms' element={<Terms />} />
                    <Route path='/SignIn' element={<SignIn />} />
                    <Route path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                </Routes>
            </BrowserRouter>
            </Provider>
        </>
    )
}