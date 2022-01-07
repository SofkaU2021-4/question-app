import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex  flex-column w-screen shadow-sm bg-slate-200">
            
        <div className="flex w-screen max-w-5xl justify-between  mx-auto">
                <div className="flex">
                    <i className="fab fa-grav fa-3x  text-black self-center"></i>
                </div>
                <div className="flex">
                    <button className="text-white self-center border px-6 rounded-lg bg-pink-700 ">PREGUNTAS</button>
                </div>
            <div className =" h-20 flex  items-center justify-end ">
            <div className= " bg-white border border-gray-500 rounded-xl ">
                <i className="fas fa-search text-gray-500 pl-4 mr-3"></i>
                <input className= "outline-none w-60 h-9 rounded-xl" type="text" placeholder="...busqueda"/>
            </div>
            <div className="flex items-center ">
                <div className="flex flex-col  mr-5 items-end">
                    <span className="font-bold">ID  </span>
                    <span className="nameUser">oe</span>
                </div>
                {/* <img src={usuario.field8} className=" flex justify-center  rounded-full h-16"/> */}
            </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar



