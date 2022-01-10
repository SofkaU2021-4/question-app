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
    const {oneQuestion} = useSelector(state => state.oneQuestion)

    useEffect(()=>{
      dispatch(loadById(id))
    },[])
    console.log("aparece ", oneQuestion);

    return (
        <div className=" flex flex-col max-w-5xl  mx-auto mt-5 ">  
            {oneQuestion && 
            <>
                 <OneQuestionPrivate oneQuestion={oneQuestion}/>
                 {oneQuestion.answers&&oneQuestion.answers.map((answer)=>{
                     return(
                         <ViewAnswer key={answer.id} answer={answer} />
                     )
                 }) }
                 <FormAnswer idQuestion={oneQuestion.id}></FormAnswer>
            </>     
            }
            
        </div>
    )
}

export default OneQuestionPagePrivate
