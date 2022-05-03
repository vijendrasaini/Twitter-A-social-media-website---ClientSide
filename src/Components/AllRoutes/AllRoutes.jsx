import { Routes, Route }  from "react-router-dom"
import { Home } from "../Home/Home"
import { Login } from "../LoginPage/Login"
import { ProfileHome } from "../ProfileHome/ProfileHome"



export const AllRoutes = ()=>{


    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/:username" element={<ProfileHome/>}/>
        </Routes>
    )
}