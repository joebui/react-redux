import { ADD_TODO } from '../actions/actionTypes';

function todo(state, action) {
    switch (action.type) {

        case ADD_TODO:
            return [{
                id: action.id,
                text: action.text,
            }]

        default:
            return state;
    }
}

export default function todos(state = [], action) {
    switch (action.type) {

        case ADD_TODO:
            return state.concat(todo(undefined, action));

        default:
            return state;
    }
}