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

    const handler=()=>{
        app.auth().signInWithPopup(google)
        .then(user =>{
             dispatch(loginAction(user.user.multiFactor.user.email , 
                user.user.multiFactor.user.displayName,
                user.user.multiFactor.user.uid,
                user.user.multiFactor.user.photoURL))
                navigate("/private/QuestionsPage")    
        })
        .catch()
      }

      
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
            <div className="w-full flex justify-center">
                <button onClick={handler} className=" rounded-full cursor-pointer bg-gray-200 border-1 h-14 py-18 px-1 mt-7 mb-10 w-96">
                    <div className=' flex justify-center space-x-2'>
                        <img className="h-8 self-center" />
                        <span className="text-gray-500 font-semibold self-center">Ingresa con tu cuenta Google</span>
                    </div>
                </button>
            </div>
               
            <Footer/>
            
        </div>
    )
}
    
export default PublicLayout
