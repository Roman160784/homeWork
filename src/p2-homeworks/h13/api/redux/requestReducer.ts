import { Dispatch } from "redux"
import { requestAPI } from "../requestAPI"


type initialStateType = {
    success:  string | null
}


export const initialState :initialStateType = {
    success: null
}
    


export const requestReducers = (state: initialStateType = initialState, action: MainActionType) : initialStateType => {
    switch(action.type){
        case 'REQUEST/SET-CHECKBOX-VALUE' : {
             let a = {...state, success: action.success}
             debugger
             return a
        }
    }

    return state
}

export type MainActionType = setCheckBoxValueType

export type setCheckBoxValueType = ReturnType<typeof setCheckBoxValueAC>


export const setCheckBoxValueAC = (success: string) => ({type : 'REQUEST/SET-CHECKBOX-VALUE', success} as const)

export const setCheckBoxValueTC = (success: boolean) => {
    return (dispatch: Dispatch) =>{
        requestAPI.postSuccess(success)
        .then((res) => {
            dispatch(setCheckBoxValueAC(res.data.errorText))
        })
    }
}