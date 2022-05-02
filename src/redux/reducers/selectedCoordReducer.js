import { typesSelectedCoord } from "../types/types";

const initialState = 'Bogota';

export const selectedCoordReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesSelectedCoord.selected:
            console.log(action.payload.city);
            return {
                city: action.payload.city
            }
        default:
            return state;
    }
}