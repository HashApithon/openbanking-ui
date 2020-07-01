import { SET_LOADING,SET_ERROR } from '../actionCreators/common'

export const setLoader = (loading) => {
    return {type:SET_LOADING,loading}
}

export const setError = (error) =>{
    return {type: SET_ERROR,error}
}