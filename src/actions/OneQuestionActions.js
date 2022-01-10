import ActionsTypeOneQuestion from "./actionsTypes/ActionsTypeOneQuestion";


export const oneQuestionLoadSucces=(question)=>{
    return {
        type:ActionsTypeOneQuestion.LOAD_SUCCESS_QUESTION,
        payload:question
    }
}

export const oneQuestionLoading=(error)=>{
    return {
        type:ActionsTypeOneQuestion.LOADING_SUCCESS_QUESTION,
        payload:error
    }
}

export const oneQuestionLoadError=()=>{
    return {
        type:ActionsTypeOneQuestion.LOAD_FAILURE_QUESTION,
    }
}