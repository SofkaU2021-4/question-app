import actionsTypesQuestions from "./actionsTypes/ActiosTypesQuestions";


export const questionsLoading=()=>{
    return {
        type:actionsTypesQuestions.LOADING
    }
}

export const questionsLoadSucces=(questions)=>{
    return {
        type:actionsTypesQuestions.LOAD_SUCCESS,
        payload:questions
    }
}

export const questionsLoadError=(error)=>{
    return {
        type:actionsTypesQuestions.LOAD_FAILURE,
        payload:error
    }
}

export const deleteQuestionLoad=(question)=>{
    return {
        type:actionsTypesQuestions.DELETE_SUCCESS_QUESTION,
        payload:question
    }
}
