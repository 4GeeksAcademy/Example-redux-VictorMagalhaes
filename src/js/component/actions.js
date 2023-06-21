export const ADD_ONE = 'ADD_ONE'
export const MINUS_ONE = 'MINUS_ONE'
export const ADD_USER = 'ADD_USER'

const addUsername = (username) =>{
    return {
        type: ADD_USER,
        username: username
    }
}

export {addUsername};