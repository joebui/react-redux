import * as types from '../actions/actionTypes';

function todo(state, action) {
    switch (action.type) {

        case types.ADD_TODO:
            return [{
                id: action.id,
                text: action.text,
            }]

        default:
            return state;
    }
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

        case types.GET_TODOS:
            return Object.assign({}, state, { isLoading: false, data: action.data, status: action.status, nextId: action.data.length });

        case types.GET_TODOS_ERROR:
            return Object.assign({}, state, { isLoading: false, data: action.data, status: action.status });

        case types.ADD_TODO:
            let newData = state.data.concat(todo(undefined, action));
            return Object.assign({}, state, { isLoading: true, data: newData, status: 0, nextId: state.nextId + 1 });

        default:
            return state;
    }
}