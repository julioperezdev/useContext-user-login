import { SET_USER_INFO, SET_TOKEN} from "../types";


export default (state, action) =>{
    const {payload, type} = action

    switch(type){
        case SET_USER_INFO:
            return {
                ...state,
                users: payload
            }
        case SET_TOKEN:
            return {
                ...state,
                selectedUser: payload
            }
        default:
            return state;
    }
}