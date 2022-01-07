import { useDispatch,useSelector } from "react-redux";
import { loadById } from '../../app/middleware/payloadQuestions';
import OneQuestionPublic from '../../components/public/OneQuestionPublic';
import {useEffect} from'react'
import { useParams } from "react-router-dom";
import ViewAnswer from "../../components/private/ViewAnswer";

const OneQuestionPagePublic = () => {
    const {id}=useParams();
    console.log(id)

    const dispatch = useDispatch()
    const {oneQuestion} = useSelector(state => state.oneQuestion)

    useEffect(()=>{
      dispatch(loadById(id))
    },[])
  


    return (
        <>
        <h1>public</h1>
            {oneQuestion&&<OneQuestionPublic question={oneQuestion}/>}
            {oneQuestion.answers &&  oneQuestion.answers.map((answer)=>{
                return(
                    <ViewAnswer answer={answer} ></ViewAnswer>
                )
                
            })}
            
        </>
    )
}

export default OneQuestionPagePublic;
