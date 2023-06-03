import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.tsx'
import { SignIn } from './login/SignIn'
import { SignUp } from './login/SignUp'
import { FourOhFour } from './FourOhFour'
import {ForgotPassword} from './login/ForgotPassword.tsx';
import ProfileArchive from "./ProfileArchive.tsx";
//import React from "react";



export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/ProfileArchive' element={<ProfileArchive />}/>
                    <Route path='/ForgotPassword' element={<ForgotPassword />}/>
                    <Route path='/SignUp' element={<SignUp />} />
                    <Route path='/SignIn' element={<SignIn />} />
                    <Route path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}