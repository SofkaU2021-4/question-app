import { useDispatch,useSelector } from "react-redux";
import { loadById } from '../../app/middleware/payloadQuestions';
import OneQuestionPrivate from '../../components/private/OneQuestionPrivate';
import {useEffect} from'react'
import { useParams } from "react-router-dom";
import FormAnswer from "../../components/private/FormAnswer";
import ViewAnswer from "../../components/private/ViewAnswer";

const OneQuestionPagePrivate = () => {
    const {id}=useParams();
    

    const dispatch = useDispatch()
    const {oneQuestion,isLoading} = useSelector(state => state.oneQuestion)

    useEffect(()=>{
      dispatch(loadById(id))
    },[])

    return (
    
        <div className=" flex flex-col max-w-5xl  mx-auto mt-5 ">
            {isLoading && null  }  
            {oneQuestion && !isLoading && 
            <>  

                 <OneQuestionPrivate oneQuestion={oneQuestion}/>
                 <span className="mt-8"> Respuestas {oneQuestion.answers.length}</span>
                 <div className=" mt-2">
                 {oneQuestion.answers&&oneQuestion.answers.map((answer)=>{
                     return(
                         
                         <ViewAnswer key={answer.id} answer={answer} />
                     )
                 }) }
                 </div>
                 <FormAnswer idQuestion={oneQuestion.id}></FormAnswer>
            </>     
            }
                
        </div>
    
        
    )
}

export default OneQuestionPagePrivate
