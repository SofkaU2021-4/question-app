import image from '../../media/googleLogo.png';
import { app,google } from '../../service/firebase';
import {  useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../actions/AuthorActions';
import useFormData from '../../hooks/UseFormData';
import { postUser,getUser } from '../../app/middleware/payloadQuestions';
import { useState } from 'react';



const HomePage = () => {

    const [registro,setRegistro]=useState(false)
    const {form, formData, updateFormData} = useFormData();
    const dispatch = useDispatch()
    const navigate=useNavigate()


    const submitForm = (e) => {
        e.preventDefault();
        if(registro){
            app.auth().createUserWithEmailAndPassword(formData.email,formData.pass)
            .then(user=>dispatch(postUser(user.user.multiFactor.user.email,
                user.user.multiFactor.user.uid,
                "https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/pngwing.com.png?alt=media&token=ae687cb3-1160-4aa6-909c-a4e320f0a1c6"
                ,formData.nombre)))
            .catch(error=>console.log("Cuenta ya creada"))
            form.current.reset();
        }else{
            app.auth().signInWithEmailAndPassword(formData.email,formData.pass)
            .then(user=>dispatch(getUser(user.user.multiFactor.user.uid)))
            .catch(error=>console.log("usuario no existe o contraseña erronea"))
        }
    
      }

    const handler=()=>{
    
            app.auth().signInWithPopup(google)
            .then(user =>{
                 dispatch(loginAction(user.user.multiFactor.user.email , 
                    user.user.multiFactor.user.displayName,
                    user.user.multiFactor.user.uid,
                    user.user.multiFactor.user.photoURL))
                    dispatch(postUser(user.user.multiFactor.user.email , 
                    user.user.multiFactor.user.uid,
                    user.user.multiFactor.user.photoURL,
                    user.user.multiFactor.user.displayName))
                    navigate("/private/QuestionsPage")    
            })
      }

    return (
        <div className="flex flex-col">

        <form ref={form} onSubmit={submitForm} onChange={updateFormData} className="flex flex-col w-full max-w-5xl  justify-center   mx-auto">
            
            <div className=" container-login w-full h-full flex flex-col justify-center items-center text-white ">
                    {registro?<span className="logo text-7xl text-black mt-3">Registate</span>:
                    <span className="logo text-7xl text-black mt-3">Ingreso</span>}
                <div>
                    <div className=" bg-white border-solid border-1 p-1 mt-14 w-96">
                        <i className="fas fa-envelope text-gray-400 pl-4 "></i>
                        <input className= " h-14 pl-5 text-base text-gray-400 outline-none border-0 " type="email" name="email" placeholder="Email" required/>
                     </div>
                </div>
                {registro?(
                <div>
                    <div className=" bg-white border-solid border-1 p-1 mt-7 w-96">
                        <i className="fas fa-user text-gray-400 pl-4 "></i>
                        <input className= " h-14 pl-5 text-base text-gray-400 outline-none border-0 " type="text" name="nombre" placeholder="Nombre" required/>
                     </div>
                </div>
                ):null
                }
                <div>
                    <div className="bg-white border-solid border-1 p-1 mt-7 mb-2 w-96">
                        <i className="fas fa-lock text-gray-400 pl-4"></i>
                        <input className= "text-gray-400 h-14 pl-5 text-base text-grey-400 outline-none border-0" type="password" name="pass" placeholder="Contraseña" required/>
                    </div>
                </div>
                    <div className="link-button mt-3 ">
                        {registro?
                        <button type="submit" className=" rounded-full loginButton-login  text-white   bg-black py-3.5 px-16 font-bold text-lg  "  to="/dashboard">REGISTRO</button>
                        :
                        <button type="submit" className=" rounded-full loginButton-login  text-white   bg-black py-3.5 px-16 font-bold text-lg  "  to="/dashboard">LOGIN</button>
                        }
                    </div>
            </div>
        </form>
            <button  className=" rounded-full cursor-pointer bg-gray-200 border-1 h-14 py-18 px-1 mt-7 mb-10 w-96 self-center">
                <div className=' flex justify-center space-x-2'>
                    <img src={image} className="h-8 self-center" />
                    <span onClick={handler} className="text-gray-500  font-semibold self-center">Ingresa con tu cuenta Google</span>
                </div>
            </button>

            {registro?<button className="self-center text-blue-400" onClick={()=>setRegistro(false)} >¿Ya estas Registrado? Login click aqui </button>
            :<button className="self-center text-blue-400" onClick={()=>setRegistro(true)} >¿Aun no estas Registrado? Registrate click aqui </button>}
        </div>
    )
}

export default HomePage
