import { ADD_ONE, ADD_USER, MINUS_ONE } from "./actions.js";

const inicialState = {
    numberOfItems: 0
}

function reducer(state=inicialState, action) {
    switch(action.type) {
        case ADD_ONE:
            return {
                ...state,
                numberOfItems: state.numberOfItems + 1
            }
        case MINUS_ONE:
            return {
                ...state,
                numberOfItems: state.numberOfItems - 1
            }
        case ADD_USER:
            return {
                ...state,
                username: action.username
            }
        default:
            return state;
    }
}

export default reducer;