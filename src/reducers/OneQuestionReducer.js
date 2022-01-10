import actionsTypesOneQuestion from "../actions/actionsTypes/ActionsTypeOneQuestion";

const initialState={
    oneQuestion:null,
    error:null,
    isLoading:false
}

const OneQuestionReducer = (state=initialState, {type,payload})=>{
    switch(type){
        case actionsTypesOneQuestion.LOADING_SUCCESS_QUESTION:
            return{
                ...state,
                isLoading:true
            }
        case actionsTypesOneQuestion.LOAD_SUCCESS_QUESTION:
            return {
                ...state,
                oneQuestion:payload,
                isLoading:false
                }
        case actionsTypesOneQuestion.LOAD_FAILURE_QUESTION:
            return {
                ...state,
                error:payload,
                isLoading:false
                }
        default: return state;
    }
}

export default OneQuestionReducer

