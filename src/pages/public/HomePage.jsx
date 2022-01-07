import React from 'react'
import image from '../../media/googleLogo.png';
import { app,google } from '../../service/firebase';
import {  useDispatch   } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../actions/AuthorActions';



const HomePage = () => {
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



    return (
            <div className="flex flex-col w-full max-w-5xl  justify-center   mx-auto">
                <form className=" container-login w-full h-full flex flex-col justify-center items-center text-white ">
            <div className="logo text-7xl text-black mt-3">Ingresa</div>
            <div>
                <div className=" bg-white border-solid border-1 p-1 mt-14 w-96">
                    <i className="fas fa-envelope text-gray-400 pl-4 "></i>
                    <input className= " h-14 pl-5 text-base text-gray-400 outline-none border-0 " type="email" name="pass" placeholder="Email" required/>
                </div>
            </div>
            <div >
                <div className="bg-white border-solid border-1 p-1 mt-7 mb-2 w-96">
                    <i className="fas fa-lock text-gray-400 pl-4"></i>
                    <input className= "text-gray-400 h-14 pl-5 text-base text-grey-400 outline-none border-0" type="password" name="pass" placeholder="Contraseña" required/>
                </div>
            </div>
            <div className="link-button mt-3 ">
                <button className=" rounded-full loginButton-login w-44 h-12 text-white  bg-black py-3.5 px-16 font-bold text-base  "  to="/dashboard">LOGIN</button>
            </div>
            </form>
            <div className="w-full flex justify-center">
                <button  className=" rounded-full cursor-pointer bg-gray-200 border-1 h-14 py-18 px-1 mt-7 mb-10 w-96">
                    <div className=' flex justify-center space-x-2'>
                        <img src={image} className="h-8 self-center" />
                        <span onClick={handler} className="text-gray-500 font-semibold self-center">Ingresa con tu cuenta Google</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default HomePage
