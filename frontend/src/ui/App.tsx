import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.tsx'
import { FourOhFour } from './FourOhFour'
import ProfileArchive from "./ProfileArchive.tsx";


export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/ProfileArchive' element={<ProfileArchive />} />
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}