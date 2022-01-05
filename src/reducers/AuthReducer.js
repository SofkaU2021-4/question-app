import actionsTypesAuth from "../actions/actionsTypes/ActionsTypesAuth";

const initialState = {
    data: null,
}

const reducerAuth = (state=initialState,{type,payload})=>{
    switch(type){
        case actionsTypesAuth.LOGIN:
            return {
                    ...state,
                    data : payload,         
                }
        case actionsTypesAuth.LOGGED:
            return {
                    ...state,
                    data : payload,         
                }
                
        case actionsTypesAuth.LOGOUT:
            return {
                ...state,
                    data : payload,
                }

        default: return state;
    }
}
export default reducerAuth; 