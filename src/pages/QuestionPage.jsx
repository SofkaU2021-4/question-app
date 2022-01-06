import { useDispatch,useSelector } from "react-redux";
import { loadById } from '../app/middleware/payloadQuestions';
import Question from '../components/Question';
import {useEffect} from'react'
import { useParams } from "react-router-dom";

const QuestionPage = () => {
    const {id}=useParams();
    console.log(id)

    const dispatch = useDispatch()
    const {isLoading,questions,error}=useSelector(state=>state.question)

    useEffect(()=>{
      dispatch(loadById(id))
    },[])
  


    return (
        <>
            {questions&&<Question question={questions}/>
                    
               
            }
            
        </>
    )
}

export default QuestionPage
