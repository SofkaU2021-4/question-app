import { Link } from "react-router-dom"
import ReactQuill from "react-quill"
import { Dialog } from '@material-ui/core';
import  {useNavigate} from"react-router-dom"
import { useDispatch,useSelector } from 'react-redux';
import { useState } from "react";

const OneQuestionPrivate = ({oneQuestion}) => {
    const dispatch = useDispatch()
    const {user}=useSelector(state=>state.auth)

    const navigate=useNavigate()  
    const [openDialog,setOpenDialog]=useState(false)

    


    return(
        <div className="flex  relative  shadow-md mt-5" key={oneQuestion.id}>
            <div className="w-full" >
                <div className="cards-container  shadow-lg bg-white  ">
                <div className=" px-3 my-3">
                    <div className="flex flex-col">
                        <div className=" flex w-full">
                            <div className="w-full self-center flex sticky">
                                <img  src={oneQuestion.userDTO.pictureUrl} className="h-6 rounded-full " />
                                <span className="ml-2 text-sm  text-gray-400 self-center ">Creado por</span>
                                <span className="ml-2 text-sm font-semibold self-center">{oneQuestion.userDTO.name}</span>
                            </div>
                            
                            
                            <div className="w-full self-center justify-end flex">
                                <span className="ml-2 text-sm  self-center">Fecha de creacion</span>
                                <span className="ml-2 text-sm font-semibold self-center ">{oneQuestion.fechaCreacion}</span>
                            </div>
                        </div>
                        <div className="card-info w-full align-center flex justify-between mt-5 ">
                            <span className="font-semibold self-center text-gray-400 text-lg ">{oneQuestion.question}</span>
                            <div className="edit-card pt-4 space-x-5">
                         
                                
                            </div>

                     
                        </div>

                            <div className="mt-4  ">
                                    <ReactQuill value={oneQuestion.descripcion}  
                                    modules={modules}   
                                    readOnly={true}/>
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

export default OneQuestionPrivate
