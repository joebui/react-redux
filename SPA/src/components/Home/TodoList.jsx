import React, { Component } from 'react'
import Todo from './Todo.jsx'

class TodoList extends Component {
    render() {
        return (
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.todos.map(todo =>
                            <Todo
                                key={todo.id}
                                {...todo}
                                />
                        )
                    }
                </tbody>
            </table>
        )
    }
}

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired
}

export default TodoList