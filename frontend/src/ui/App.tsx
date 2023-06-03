import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.tsx'
import { FourOhFour } from './FourOhFour'
import {Category} from "./Category.tsx";


export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path='/' element={<Category />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}