import { combineReducers } from "@reduxjs/toolkit";
import reducerQuestion from "../reducers/QuestionsReducer";
import reducerAuth from "../reducers/AuthReducer";

const rootReducer=()=>{

    return combineReducers(
        {
        question:reducerQuestion,
        auth:reducerAuth
        }

    )
}

export default rootReducer
