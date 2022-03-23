import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { themeReducer } from '../../h12/bll/themeReducer'
import { requestReducers } from '../../h13/api/redux/requestReducer'
import {loadingReducer} from './loadingReducer'

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    request: requestReducers
})

export type AppStoreType = ReturnType<typeof reducers>
const store = createStore(reducers, applyMiddleware(thunk))


export default store
// export type rootReducerTypes = ReturnType<typeof reducers>
// export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev



