import { Dialog,Tooltip } from '@material-ui/core';
import { useState } from "react";
import  {useNavigate} from"react-router-dom"
import { useDispatch,useSelector } from 'react-redux';
import { deleteQuestion } from '../../app/middleware/payloadQuestions';


const QuestionsPrivate = ({question}) => {
    const dispatch = useDispatch()
    const {user}=useSelector(state=>state.auth)

    const navigate=useNavigate()  
    const [openDialog,setOpenDialog]=useState(false)

    return(<div className="flex">
            <div className="w-full" key={question.id} >
                <div className="cards-container mb-6 shadow-sm bg-white  ">
                <div className=" px-3 my-3">
                    <div className="flex">
                        <img src={question.userDTO.pictureUrl} className="h-8 self-center" />
                        <span className="">{question.userDTO.name}</span>
                        <div className="card-info w-full align-center flex justify-between mx-6">
                            <span className="font-semibold self-center  ">{question.question}</span>
                            <div className="edit-card pt-4 space-x-5">
                         
                                
                            </div>
                            <button onClick={()=>navigate(`/private/Question/${question.id}`)} className="text-blue-500">Respuestas</button>
                     
                        </div>
                        {question.userDTO.uid===user.uid?(
                                        <button className=" self-center " onClick={()=>{setOpenDialog(true)}}>
                                        <Tooltip title="Eliminar">
                                            <i className="deleteIcon  text-black hover:text-pink-700 fas fa-trash fa-lg"></i>
                                        </Tooltip>
                                    </button>

                                ):null}
                    </div>
                    <Dialog open={openDialog}>
                        <div className ='p-8 flex flex-col'>
                        <h1 className= 'text gray-800 text-xl font-bold'> ¿Esta seguro de querer eliminarlo? </h1>
                        <div className='flex w-full items-center justify-center'> 
                            <button onClick={()=>{
                                dispatch(deleteQuestion(question.id))
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

export default QuestionsPrivate