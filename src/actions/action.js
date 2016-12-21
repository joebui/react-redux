import * as todoService from '../services/todoService';
import * as types from './actionTypes'

function requestData() {
    return { type: types.REQ_TODOS }
};

function receiveData(json) {
    return {
        type: types.GET_TODOS,
        data: json.data,
        status: json.status
    }
};

function receiveError(json) {
    return {
        type: types.GET_TODOS_ERROR,
        data: json.data,
        status: json.status
    }
};

export function addTodo(id, text) {
    return {
        type: types.ADD_TODO,
        id: id,
        text
    }
}

export function getTodos() {
    return function (dispatch) {
        dispatch(requestData());

        return todoService.getAllTodoItems()
            .then(function (res) {                
                dispatch(receiveData(res));
            })
            .catch(function (err) {
                dispatch(receiveError(err));
            });
    }
}