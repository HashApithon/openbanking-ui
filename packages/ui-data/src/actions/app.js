import { INIT_DATA, SET_DATA } from '../actionCreators/app'

export const setData = (data) => {
    return { type: SET_DATA, data }
}
