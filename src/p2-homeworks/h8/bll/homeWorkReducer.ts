import { initialStateType } from "./tests/homeWorkReducer.test"

export const homeWorkReducer = (state: initialStateType[], action: any): initialStateType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix сщртировка объекта по имени
            const newState = [...state].sort((a,b) => {
                if(a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up'? newState : newState.reverse() 
        }

        case 'check': {
            // need to fix
            return state.filter(p => p.age >= action.payload)
        }
        default: return state
    }
}