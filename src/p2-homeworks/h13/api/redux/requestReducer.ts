
type initialStateType = {
    success: boolean
}


export const initialState :initialStateType = {
    success: true
}
    


export const requestReducers = (state: initialStateType = initialState, action: MainActionType) => {
    return state
}

export type MainActionType = ''