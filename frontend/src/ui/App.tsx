import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import {Category} from "./Category";


export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route  path={'/Home'}element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path={'/Category'}element={<Category />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}