import {ISSEARCHING, SETSEARCHRESULT, SETUSER} from './actions'



const initState = {
    user : JSON.parse(localStorage.getItem('user')),
    searchArr : [],
    isSearching : false
}
export const reducer = (state = initState, { type, payload})=>{
    switch(type){
        case SETUSER:
            return { ...state, user : payload}
        case ISSEARCHING :
            return { ...state, isSearching : payload }
        case SETSEARCHRESULT:
            return { ...state, searchArr : payload}
        default : 
            return state
    }
}