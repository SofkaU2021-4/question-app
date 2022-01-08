import { useDispatch,useSelector } from "react-redux";
import { loadById } from '../../app/middleware/payloadQuestions';
import OneQuestionPublic from '../../components/public/OneQuestionPublic';
import {useEffect} from'react'
import { useParams } from "react-router-dom";
import ViewAnswer from "../../components/private/ViewAnswer";

const OneQuestionPagePublic = () => {
    const {id}=useParams();

    const dispatch = useDispatch()
    const {oneQuestion} = useSelector(state => state.oneQuestion)

    useEffect(()=>{
      dispatch(loadById(id))
      console.log(oneQuestion)
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
                        <ViewAnswer key={index} answer={answer} ></ViewAnswer>
                )})}
            </div>
            </>
            )}
            
            </div>
        </div>    
    )
}

export default OneQuestionPagePublic;
