import { INIT_DATA } from '../actionCreators/app'

export const initializeData = (message) => {
    return {
        type:INIT_DATA,
        message
    };
}