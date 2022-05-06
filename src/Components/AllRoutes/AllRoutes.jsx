import { Routes, Route }  from "react-router-dom"
import { Home } from "../../Pages/Home/Home"
import { Login } from "../../Pages/LoginPage/Login"
import { ProfileHome } from "../../Pages/ProfileHome/ProfileHome"



export const AllRoutes = ()=>{


    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/:username" element={<ProfileHome/>}/>
        </Routes>
    )
}