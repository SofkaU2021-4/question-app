import actionsTypesQuestions from "../actions/actionsTypes/ActiosTypesQuestions";

const initialState={

    isLoading:false,
    questions:null,
    error:null

}

const QuestionsReducer = (state=initialState,{type,payload})=>{
    switch(type){

        case actionsTypesQuestions.LOADING:
            return {
                ...state,
                isLoading:true,
                }
        case actionsTypesQuestions.LOAD_SUCCESS:
            return {
                ...state,
                isLoading:false,
                questions:payload
                }
        case actionsTypesQuestions.LOAD_FAILURE:
            return {
                ...state,
                isLoading:false,
                error:payload
                }
        case actionsTypesQuestions.DELETE_SUCCESS_QUESTION:
            return {
                ...state,
                    questions:payload.filter(question=>question.id!==payload.id)
                }
                

        default: return state;
    }
}

export default QuestionsReducer
