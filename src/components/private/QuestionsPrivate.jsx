import { Dialog,Tooltip } from '@material-ui/core';
import { useState } from "react";
import  {useNavigate} from"react-router-dom"

const QuestionsPrivate = ({question}) => {
    const navigate=useNavigate()  
    const [openDialog,setOpenDialog]=useState(false)

    return(<div className="flex">
            <button className="w-full" key={question.id} onClick={()=>navigate(`/private/question/${question.id}`)}>
                <div className="cards-container mb-6 shadow-sm bg-white transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-100  ">
                <div className="mx-6 mb-5">
                    <div className="flex">
                            <i className="fas fa-question text-white bg-gray-800 mr-4 pt-4 px-3 pb-2"></i>
                        <div className="card-info w-full align-center flex justify-between">
                            <span className="font-semibold pt-3">{question.question}</span>
                            <div className="edit-card pt-4 space-x-5">
                            
                            </div>
                        </div>
                    </div>
                    <Dialog open={openDialog}>
                        <div className ='p-8 flex flex-col'>
                        <h1 className= 'text gray-800 text-xl font-bold'> ¿Esta seguro de querer eliminarlo? </h1>
                        <div className='flex w-full items-center justify-center'> 
                            <button to="{variableCards.page}" className= 'mx-2 my-4 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'> Si </button>
                            <button onClick={()=>setOpenDialog(false)} className= 'mx-2 my-4 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md' to="{variableCards.page}"> No </button>
                        </div>
                        </div>
                    </Dialog>
                    </div>
                </div>
        

            </button>

            <button className=" self-center mb-6  py-5 mx-3" onClick={()=>{setOpenDialog(true)}}>
                <Tooltip title="Eliminar">
                    <i className="deleteIcon  text-black hover:text-pink-700 fas fa-trash fa-lg"></i>
                </Tooltip>
            </button>
        </div>
    )
}

export default QuestionsPrivate