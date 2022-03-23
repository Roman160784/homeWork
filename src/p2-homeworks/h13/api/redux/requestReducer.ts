
type initialStateType = {
    success: boolean
}


export const initialState :initialStateType = {
    success: true
}
    


export const requestReducers = (state: initialStateType = initialState, action: MainActionType) => {
    switch(action.type){
        case 'REQUEST/SET-CHECKBOX-VALUE' : {
            return {...state, success: action.success}
        }
    }

    return state
}

export type MainActionType = setCheckBoxValueType

export type setCheckBoxValueType = ReturnType<typeof setCheckBoxValueAC>


export const setCheckBoxValueAC = (success: boolean) => ({type : 'REQUEST/SET-CHECKBOX-VALUE', success} as const)

export const setCheckBoxValueTC = (success: boolean) => {

}