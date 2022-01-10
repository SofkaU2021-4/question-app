import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
import ModalPerfil from "./private/ModaPefil"
import { app } from "../service/firebase"
import {logoutAction} from "../actions/AuthorActions"
import { useDispatch } from "react-redux"

const Navbar = () => {
    const dispatch = useDispatch();
    const handler=()=>{
        app.auth().signOut()
        dispatch(logoutAction())
    }
    const {user} = useSelector(state => state.auth)
    return (
        <div className="flex py-3  flex-column w-full shadow-lg bg-slate-200 ">
            
        <div className="flex w-full  max-w-5xl justify-between  mx-auto">
                <div className="flex">
                    <i className="fab fa-grav fa-3x  text-black self-center"></i>
                    <span className="logo text-3xl text-black self-center ml-2 font-bold">SofkAsk</span>
                </div>
                <div className="flex justify-center">
                    <Link to="/private/QuestionsPage" className="text-white shadow-md self-center font-bold border px-6 rounded-full py-1 bg-pink-700 ">PREGUNTAS</Link>
                    {user?(
                <div className="flex">
                    <div className="flex">
                        <Link to="/private/CreateQuestion" className="text-white shadow-md self-center font-bold border px-6 rounded-full py-1 bg-pink-700 ">Crea una pregunta</Link>
                    </div>
                    <div className="flex">
                        <Link to="/private/MyQuestions" className="text-white shadow-md self-center font-bold border px-6 rounded-full py-1 bg-pink-700 ">Mis Preguntas</Link>
                    </div>

                    <div className="flex">
                        <ModalPerfil user={user}></ModalPerfil>
                    </div>
                    <button className="text-blue-500" onClick={handler}>Cerrar sesion</button>
                 </div>
            ):null }
                </div>
                        
        </div>
    </div>
    )
}

export default Navbar



