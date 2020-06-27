import { INIT_DATA ,SET_DATA} from '../actionCreators/app'

export const initializeData = (message) => {
    return {
        type:INIT_DATA,
        message
    };
}

export const setData = (data) =>{
    return { type:SET_DATA ,data} 
}

