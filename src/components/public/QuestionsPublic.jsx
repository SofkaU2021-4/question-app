import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill"

const QuestionsPublic = ({question}) => {  
    const navigate = useNavigate();
    const [openDialog,setOpenDialog]=useState(false)

    return(<div className="flex max-h-80 relative overflow-y-auto shadow-md mt-5" key={question.id}>
    <div className="w-full" >
        <div className="cards-container  shadow-lg bg-white  ">
        <div className=" px-3 my-3">
            <div className="flex flex-col">
                <div className="w-full flex justify-end">
                </div>
                <div className=" flex w-full">
                    <div className="w-full self-center flex sticky">
                        <img src={question.userDTO.pictureUrl} className="h-6 rounded-full " />
                        <span className="ml-2 text-sm  text-gray-400 self-center ">Creado por</span>
                        <span className="ml-2 text-sm font-semibold self-center">{question.userDTO.name}</span>
                    </div>
                    
                    
                    <div className="w-full self-center justify-end flex">
                        <span className="ml-2 text-sm  self-center">Fecha de creacion</span>
                        <span className="ml-2 text-sm font-semibold self-center ">{question.fechaCreacion}</span>
                    </div>
                </div>
                <div className="card-info w-full align-center flex justify-between mt-5 ">
                    <span className="font-semibold self-center text-gray-400 text-lg ">{question.question}</span>
                    <div className="edit-card pt-4 space-x-5">
                 
                        
                    </div>
                    <button onClick={()=>navigate(`/Question/${question.id}`)} className="text-blue-500">Respuestas</button>
             
                </div>
            

                    <div className="mt-4  ">
                            <ReactQuill value={question.descripcion}  
                            modules={modules}   
                            readOnly={true}/>
                    </div>     
                       
            </div>
            
            </div>
         
            
        </div>
        


    </div>


</div>
                

    )
}


const modules = {
    toolbar: false
};




export default QuestionsPublic