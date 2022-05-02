import { typesSelectedCoord } from "../types/types"

export const selectedCoordSync = (city) => {
    console.log('CITY ACTION ', city);
    return {
        type: typesSelectedCoord.selected,
        payload: {
            city: city
        }
    }
}