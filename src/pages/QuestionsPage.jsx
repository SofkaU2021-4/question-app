import {useEffect} from'react'
import { useDispatch,useSelector } from "react-redux";
import { loadAllQuestion } from '../app/middleware/payloadQuestions';
import Question from '../components/Question';

const QuestionsPage = () => {
    const dispatch = useDispatch()
    const {isLoading,questions,error}=useSelector(state=>state.question)


    useEffect(()=>{
      dispatch(loadAllQuestion())
    },[])
  
    
    return (
        <>
            {isLoading && <h1> cargando mi socio </h1>}
            {error&& <h1>{error}</h1>}
            {questions && questions.map((question)=>{
                return(
                    <Question key={question.id} question={question}/>
                )
               
            })}
        </>
    )
}

export default QuestionsPage
