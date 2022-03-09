export type initStateColorType = {
    color: string
}

const initState = {
color: 'white'
};


export const themeReducer = (state:initStateColorType  = initState, action: MaainActionType): initStateColorType => { // fix any
    switch (action.type) {
        case 'CHANGE-COLOR': {
            return {...state, color: action.payload.color}
        }
        default: return state;
    }
};

type MaainActionType = changeThemeACtype
type changeThemeACtype = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (color: string) => {
    return {
        type: "CHANGE-COLOR",
        payload: {
            color,
        }
    } as const
}; // fix any