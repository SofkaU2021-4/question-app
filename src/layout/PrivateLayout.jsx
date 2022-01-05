import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import privateNavbar from "./utils/NabvarList"
const PrivateLayout = () => {


    return (
        <div>
            <Navbar elements={privateNavbar}/>
            <span>PrivateLayout</span>
            <Outlet/>
        </div>
    )
}

export default PrivateLayout
