import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { getUserQuestion } from "../../app/middleware/payloadQuestions"
import QuestionsPrivate from "../../components/private/QuestionsPrivate"


 
const MyQuestions = () => {
    const dispatch = useDispatch()
    const {user}=useSelector(state=>state.auth)
    const {
        isLoading,
        myQuestions,
        error
    } = useSelector(state => state.myQuestion)
    
    useEffect(() =>{
        dispatch(getUserQuestion(user.uid));
       console.log(myQuestions)
    },[])

    return (
        <div className="flex flex-col max-w-5xl  mx-auto mt-5 ">
        {isLoading&& null}
        {myQuestions && !isLoading && myQuestions.map((question)=>{
            return(
                <QuestionsPrivate key={question.id} question={question}/>
                )
        })}
        
        
        
        
            {error && <h1> Error {error} </h1>}

        </div>
    )
}

export default MyQuestions
