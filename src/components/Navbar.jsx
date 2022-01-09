import {Link} from "react-router-dom"
import { useSelector } from "react-redux"


const Navbar = () => {
    const {user} = useSelector(state => state.auth)
    return (
        <div className="flex py-3  flex-column w-full shadow-lg bg-slate-200 ">
            
        <div className="flex w-full  max-w-5xl justify-between  mx-auto">
                <div className="flex">
                    <i className="fab fa-grav fa-3x  text-black self-center"></i>
                    <span className="logo text-3xl text-black self-center ml-2 font-bold">SofkAsk</span>
                </div>
                <div className="flex">
                    <Link to="/QuestionsPage" className="text-white shadow-md self-center font-bold border px-6 rounded-full py-1 bg-pink-700 ">PREGUNTAS</Link>
                </div>
            {user?(
                <div className="flex">
                    <div className="flex">
                        <Link to="/private/CreateQuestion" className="text-white shadow-md self-center font-bold border px-6 rounded-full py-1 bg-pink-700 ">Crea una pregunta</Link>
                    </div>
                    <div className="flex">
                        <Link to="/private/MyQuestions" className="text-white shadow-md self-center font-bold border px-6 rounded-full py-1 bg-pink-700 ">Mis Preguntas</Link>
                    </div>
                    <div className="flex">
                        <Link to="/private/CreateQuestion" className="text-white shadow-md self-center font-bold border px-6 rounded-full py-1 bg-pink-700 ">Mi perfil</Link>
                    </div>
                 </div>
            ):null }
        </div>
    </div>
    )
}

export default Navbar



