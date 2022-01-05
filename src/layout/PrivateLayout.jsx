import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {privateNavbar} from "../utils/NavbarList"
import { app } from "../service/firebase"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"



const PrivateLayout = () => {

    const [user,setUser]=useState()

    const navigate=useNavigate()

    const handler=()=>{
        app.auth().signOut()
        navigate("/")

    }

    useEffect(()=>{
        app.auth().onAuthStateChanged((users)=>{
        
            users?setUser(users):navigate("/")
          
        })

      },[])



    return (
        <>
        {user
        ?(<div>
            <button onClick={handler}>adios socio</button>
            <Navbar elements={privateNavbar}/>
            <span>PrivateLayout</span>
            <Outlet/>
            <Footer/>
        </div>)
        :
        null}
        </>
       
    )
}

export default PrivateLayout
