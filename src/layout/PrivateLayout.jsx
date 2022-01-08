import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {privateNavbar} from "../utils/NavbarList"
import { app } from "../service/firebase"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import {  useDispatch ,useSelector  } from "react-redux"
import {logoutAction} from "../actions/AuthorActions"
import { getUser } from "../app/middleware/payloadQuestions"



const PrivateLayout = () => {


    const state = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const handler=()=>{
        app.auth().signOut()
        dispatch(logoutAction())
        navigate("/")
    }

    useEffect(()=>{
        app.auth().onAuthStateChanged((user)=>{
            if(user){
                dispatch(getUser(user.multiFactor.user.uid))
                }else{
                    navigate("/")
                }
        })
      },[])



    return (
        <>
        {state.user
        ?(
        <main className=" bg-slate-100 w-full h-full flex flex-col">
            <Navbar elements={privateNavbar}/>
            <button onClick={handler}>adios socio</button>
            <div className="  flex flex-col justify-center my-auto"> 
                <div className="">
                    <Outlet/>
                </div>         
        
            </div>
                <Footer/>
        
            </main>
        )
        :
        null}
        </>
       
    )
}

export default PrivateLayout
