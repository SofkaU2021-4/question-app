import { useDispatch,useSelector } from "react-redux";
import { loadById } from '../../app/middleware/payloadQuestions';
import OneQuestionPublic from '../../components/public/OneQuestionPublic';
import {useEffect} from'react'
import { Link, useParams } from "react-router-dom";
import ViewAnswer from "../../components/private/ViewAnswer";

const OneQuestionPagePublic = () => {
    const {id}=useParams();

    const dispatch = useDispatch()
    const {oneQuestion} = useSelector(state => state.oneQuestion)

    useEffect(()=>{
      dispatch(loadById(id))
    },[])
  
    return (
       
        <div className="">
            <div className="max-w-5xl  mx-auto mt-5 flex flex-col justify-start h-full" >
            {oneQuestion&&(
            <>
                <OneQuestionPublic question={oneQuestion}/>
                <span> Respuestas {oneQuestion.answers.length}</span>
            <div className="mt-10">
            
                {oneQuestion.answers.map((answer,index)=>{
                    return(
                        <ViewAnswer key={index} answer={answer} privated={false} ></ViewAnswer>
                )})}
                <Link to="/"><h1 className="mt-10 text-blue-500 underline">Conoces la respuesta ? ingresa con tu cuenta para contestar</h1></Link>
            </div>
            </>
            )}
            
            </div>
            
        </div> 
      
         
    )
}

export default OneQuestionPagePublic;
