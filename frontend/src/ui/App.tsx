import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Homepage/Home.tsx'
import { FourOhFour } from './FourOhFour'
import { CategoryMain } from "./CategoryMain/CategoryMain";


export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path={'/category-main'} element={<CategoryMain />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}