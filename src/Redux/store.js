import { configureStore} from '@reduxjs/toolkit'
import { reducer } from './reducer'


const thunk = (store)=>(next)=>(action)=>{
    if(typeof action === 'function')
        action(store.dispatch)
    else
        next(action)
}

export const store = configureStore({
    reducer : reducer,
    middleware : [thunk]
})
