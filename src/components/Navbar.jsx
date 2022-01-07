import {Link} from "react-router-dom"

const Navbar = () => {
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
            {/* <div className =" h-20 flex  items-center justify-end ">
            <div className= " bg-white border border-gray-500 rounded-xl ">
                <i className="fas fa-search text-gray-500 pl-4 mr-3"></i>
                <input className= "outline-none w-60 h-9 rounded-xl" type="text" placeholder="...busqueda"/>
            </div>
            <div className="flex items-center ">
                <div className="flex flex-col  mr-5 items-end">
                    <span className="font-bold">ID  </span>
                    <span className="nameUser">oe</span>
                </div>
                <img src={usuario.field8} className=" flex justify-center  rounded-full h-16"/>
            </div>
            </div> */}
        </div>
    </div>
    )
}

export default Navbar



