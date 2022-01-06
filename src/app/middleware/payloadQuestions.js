import { getAllQuestions , getByIdQuestions } from "../../service/getQuestions";
import { questionsLoading ,questionsLoadSucces,questionsLoadError } from "../../actions/QuestionActions";

export const loadAllQuestion=()=>async(dispatch)=>{

    dispatch(questionsLoading())

    await getAllQuestions()
    .then(response=>dispatch(questionsLoadSucces(response.data)))
    .catch(error=>dispatch(questionsLoadError(error.message)))

}

export const loadById=(id)=>async(dispatch)=>{
    console.log(id)

    dispatch(questionsLoading())
    await getByIdQuestions(id)
    .then(response=>dispatch(questionsLoadSucces(response.data)))
    .catch(error=>dispatch(questionsLoadError(error.message)))

}