import {useEffect} from'react'
import { useDispatch,useSelector } from "react-redux";
import { loadAllQuestion } from '../../app/middleware/payloadQuestions';
import QuestionPrivate from '../../components/private/QuestionsPrivate';

const QuestionsPagePrivate = () => {
    const dispatch = useDispatch()
    const {isLoading,questions,error}=useSelector(state=>state.question)


    useEffect(()=>{
      dispatch(loadAllQuestion())
    },[])
  
    
    return (
        <div className=" flex flex-col max-w-5xl  mx-auto mt-5 ">
            <h1>private</h1>
            {error&& <h1>{error}</h1>}
            {questions && questions.map((question)=>{
                return(
                    <QuestionPrivate key={question.id} question={question}/>
                )
               
            })}
        </div>
    )
}

export default QuestionsPagePrivate
