import React, { Component, PropTypes } from 'react'
import Todo from './Todo.jsx'

class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo =>
                        <Todo
                            key={todo.id}
                            {...todo}
                            />
                    )
                }
            </ul>
        )
    }
}

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired
}

export default TodoList