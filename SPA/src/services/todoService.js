import * as constants from '../constants'
import baseService from './baseService'

export function getAllTodoItems() {
    return baseService(constants.GET_METHOD, 'http://127.0.0.1:3000/api/todos');
}