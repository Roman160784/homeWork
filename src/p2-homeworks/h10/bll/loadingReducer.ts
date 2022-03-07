
export type initStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state: initStateType = initState, action: mainActiomType): initStateType => {
    switch (action.type) {
        case "CANGE-LOADING": {
            return { ...state, isLoading: action.payload.isLoading }
        }
        default: return state
    }
}

export type mainActiomType = loadingACType

type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => {
    return {
        type: "CANGE-LOADING",
        payload: {
            isLoading,
        }
    } as const
} 