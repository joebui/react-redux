import axios from 'axios'

export function getAllTodoItems() {
    return axios.get('http://127.0.0.1:3000/api/patients');
}