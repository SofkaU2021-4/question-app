import { combineReducers } from "@reduxjs/toolkit";
import reducerQuestions from "../reducers/QuestionsReducer";
import OneQuestionReducer from "../reducers/OneQuestionReducer";
import reducerAuth from "../reducers/AuthReducer";

const rootReducer=()=>{

    return combineReducers(
        {
        question:reducerQuestions,
        auth:reducerAuth,
        oneQuestion:OneQuestionReducer
        }
    )
}

export default rootReducer
