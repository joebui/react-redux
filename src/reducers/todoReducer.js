import * as types from '../actions/actionTypes';

function todo(action) {
    return [{
        id: action.id,
        text: action.text,
    }]
}

export default function todos(state = {
    isLoading: false,
    data: [],
    status: 0,
    nextId: 0
}, action) {
    switch (action.type) {
        case types.REQ_TODOS:
            return Object.assign({}, state, { isLoading: true, status: 0 });

        case types.GET_TODOS_SUCCESS:
            return Object.assign({}, state, { isLoading: false, data: action.data, status: action.status, nextId: action.data.length });

        case types.GET_TODOS_ERROR:
            return Object.assign({}, state, { isLoading: false, data: action.data, status: action.status });

        case types.ADD_TODO:
            let newTodo = state.data.concat(todo(action));
            return Object.assign({}, state, { isLoading: true, data: newTodo, status: 0, nextId: state.nextId + 1 });

        default:
            return state;
    }
}