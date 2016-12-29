import * as todoService from '../services/todoService';
import * as types from './actionTypes'

function requestData() {
    return { type: types.REQ_TODOS }
}

function receiveData(value) {
    return {
        type: types.GET_TODOS_SUCCESS,
        data: value.data,
        status: value.status
    }
}

function receiveError(value) {
    return {
        type: types.GET_TODOS_ERROR,
        data: [],
        status: value.status
    }
}

export function addTodo(id, text) {
    return {
        type: types.ADD_TODO,
        id: id,
        text
    }
}

export function getTodos() {
    return (dispatch) => {
        dispatch(requestData());

        return todoService.getAllTodoItems()
            .then((res) => {
                dispatch(receiveData(res));
            })
            .catch((err) => {
                dispatch(receiveError(err));
            });
    }
}