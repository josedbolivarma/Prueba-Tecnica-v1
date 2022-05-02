import { typesTravels } from "../types/types";

const initialState = {
    travels: []
}

export const travelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesTravels.list:
            return {
                travels: [...action.payload]
            }
        case typesTravels.add: 
            return {
                travels: [action.payload]
            }
        case typesTravels.edit: 
            return {
                ...state
            }
            case typesTravels.delete:
                return {
                    travels: state.travels.filter(t => t.nombre !== action.payload)
                }
        default:
            return state;
    }
}