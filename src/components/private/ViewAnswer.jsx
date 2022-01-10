import ReactQuill from "react-quill"
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { useEffect } from "react";
import { Dialog } from '@material-ui/core';
import  {useNavigate} from"react-router-dom"
import { useDispatch,useSelector } from 'react-redux';
import { useState } from "react";

const ViewAnswer = ({answer}) => {  

    const dispatch = useDispatch()
    const {user}=useSelector(state=>state.auth)

    const navigate=useNavigate()  
    const [openDialog,setOpenDialog]=useState(false)


 

    return(

    <div className="flex  relative  shadow-md mt-5" key={answer.id}>
        <div className="w-full" >
            <div className="cards-container  shadow-lg bg-white  ">
                <div className=" px-3 my-3">
                    <div className="flex flex-col">
            <div className=" flex w-full">
                <div className="w-full self-center flex sticky">
                    <img  src={answer.userDTO.pictureUrl} className="h-6 rounded-full " />
                    <span className="ml-2 text-sm  text-gray-400 self-center ">Creado por</span>
                    <span className="ml-2 text-sm font-semibold self-center">{answer.userDTO.name}</span>
                </div>
                
                
                <div className="w-full self-center justify-end flex">
                    <span className="ml-2 text-sm  self-center">Fecha de respuesta</span>
                    <span className="ml-2 text-sm font-semibold self-center ">{answer.fechaCreacio}</span>
                </div>
            </div>

                <div className="mt-4  ">
                    <ReactQuill value={answer.answer}  
                    modules={modules}   
                    readOnly='true'/>
                </div>     
                   
        </div>
        <Dialog open={openDialog}>
            <div className ='p-8 flex flex-col'>
            <h1 className= 'text gray-800 text-xl font-bold'> ¿Esta seguro de querer eliminarlo? </h1>
            <div className='flex w-full items-center justify-center'> 
                <button onClick={()=>{
                    // dispatch(deleteQuestion(oneQuestion.id))
                    setOpenDialog(false)}} className= 'mx-2 my-4 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'> Si </button>
                <button onClick={()=>setOpenDialog(false)} className= 'mx-2 my-4 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md' to="{variableCards.page}"> No </button>
            </div>
            </div>
            </Dialog>
        
        </div>
     
        
        </div>
    


        </div>


    </div>


    )
}

const modules = {
    toolbar: false
};



export default ViewAnswer


