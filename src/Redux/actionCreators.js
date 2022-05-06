import { FOLLOWING_STATUS, ISSEARCHING, LOADING, SETSEARCHRESULT, SETUSER} from './actions'


export const setUser = (payload)=>({ type : SETUSER , payload})
export const setSearchResult = (payload)=>({type : SETSEARCHRESULT, payload})
export const setIsSearching = (payload)=>({type : ISSEARCHING, payload})
export const toggleFollowingStatus = (payload) => ({ type : FOLLOWING_STATUS, payload})
export const setLoading = (payload) => ({ type : LOADING, payload})

export const performSearch = (searchText)=> async (dispatch)=>{
    if(searchText == "")
        return dispatch(setSearchResult([]))
    const url = `http://localhost:7000/search?search=${searchText}`
    const response = await fetch(url)
    const result = await response.json()
    dispatch(setSearchResult(result))
}
