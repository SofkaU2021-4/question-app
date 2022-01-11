import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {privateNavbar} from "../utils/NavbarList"
import { app } from "../service/firebase"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import {  useDispatch ,useSelector  } from "react-redux"
import { getUser } from "../app/middleware/payloadQuestions"



const PrivateLayout = () => {


    const state = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate=useNavigate()

  

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
        <main className=" bg-slate-200 w-full h-full flex flex-col ">
            <Navbar elements={privateNavbar} url="/private/QuestionsPage"/>
        
            <div className="  flex flex-col justify-center my-auto w-full h-full overflow-y-auto"> 
                <div className="w-full h-full">
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
