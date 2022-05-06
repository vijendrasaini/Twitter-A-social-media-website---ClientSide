import {FOLLOWING_STATUS, ISSEARCHING, LOADING,SETSEARCHRESULT, SETUSER} from './actions'



const initState = {
    user : JSON.parse(localStorage.getItem('user')),
    loading : false,
    searchArr : [],
    isSearching : false,
    followingStatus : {
        follow : false,
        followers : 0
    },
}
export const reducer = (state = initState, { type, payload})=>{
    switch(type){
        case SETUSER:
            return { ...state, user : payload}
        case ISSEARCHING :
            return { ...state, isSearching : payload }
        case SETSEARCHRESULT:
            return { ...state, searchArr : payload}
        case FOLLOWING_STATUS:
            return { ...state, followingStatus : payload}
        case LOADING:
            return { ...state, loading : payload}
        default : 
            return state
    }
}