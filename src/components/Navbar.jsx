import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <header className="flex flex-column w-screen">
        <div className="flex justify-end w-screen max-w-2xl shadow-sm mx-auto">
            <div className =" h-20 flex  items-center  ">
            <div className= " bg-white border border-gray-500 rounded-xl ">
                <i className="fas fa-search text-gray-500 pl-4 mr-3"></i>
                <input onChange=""  className= "outline-none w-60 h-9 rounded-xl" type="text" placeholder="...busqueda"/>
            </div>
            <div className="flex items-center text-white">
                <div className="flex flex-col  mr-5 items-end">
                    <span className="font-bold">ID  </span>
                    <span clase="nameUser">oe</span>
                </div>
                {/* <img src={usuario.field8} className=" flex justify-center  rounded-full h-16"/> */}
            </div>
            </div>
        </div>
    </header>
    )
}

export default Navbar



