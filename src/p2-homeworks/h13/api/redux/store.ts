import { applyMiddleware, combineReducers, createStore } from "redux"
import { requestReducers } from "./requestReducer"
import thunk from 'redux-thunk';



const rootReducer = combineReducers ({
    request: requestReducers,
    
})

export type rootReducerTypes = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer,applyMiddleware(thunk))

