import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Pages/Homepage/Home.tsx'
import { FourOhFour } from './Pages/FourOhFour'
import { CategoryMain } from "./Pages/CategoryMain/CategoryMain";
import { ProfileArchive } from "./Pages/ProfileArchive.tsx";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Provider } from "react-redux";


interface Props {
    store: ToolkitStore
}

export function  App(props: Props)  {
    const {store} = props
    return (
        <>
            <Provider store = {store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/ProfileArchive' element={<ProfileArchive />} />
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path={'/category-main'} element={<CategoryMain />} />
                </Routes>
            </BrowserRouter>
            </Provider>
        </>
    )
}