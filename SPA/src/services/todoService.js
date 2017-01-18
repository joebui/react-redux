import * as constants from '../constants'
import baseService from './baseService'

export function getAllTodoItems() {
    return baseService(constants.GET_METHOD, constants.URL + '/api/todos');
}