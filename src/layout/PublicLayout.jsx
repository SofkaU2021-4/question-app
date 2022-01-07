import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {publicNavbar} from "../utils/NavbarList"
import { app, google } from "../service/firebase"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch , useSelector  } from "react-redux"
import {loginAction ,loggedAction} from "../actions/AuthorActions"



const PublicLayout = () => {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()

    const navigate=useNavigate()



      
useEffect(()=>{
    app.auth().onAuthStateChanged((user)=>{
      if(user){
        dispatch(loggedAction(user.multiFactor.user.email , 
            user.multiFactor.user.displayName,
            user.multiFactor.user.uid,
            user.multiFactor.user.photoURL))
            navigate("/private/QuestionsPage")
        }
})},[])




    return (
        <div className=" w-full h-full flex flex-col justify-between"> 
            <Navbar elements={publicNavbar}/>
        
            <div className="w-full h-full flex flex-col justify-center">
                <Outlet/>
            </div> 
                       
            <Footer/>
        </div>
    )
}
    
export default PublicLayout
