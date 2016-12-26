import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, getTodos } from './actions/todoAction'

import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'
import Header from './components/Header.jsx'

class App extends Component {
    componentWillMount() {
        // Call API to get list of todos.
        this.props.dispatch(getTodos());
    }

    render() {
        const { dispatch, todos } = this.props

        return (
            <div>
                <Header />

                <div className="container">
                    <AddTodo onAddClick={text => dispatch(addTodo(todos.nextId, text))} />

                    <TodoList todos={todos.data} />
                </div>
            </div>
        )
    }
}

App.propTypes = {
    todos: React.PropTypes.object.isRequired
}

function select(state) {
    return {
        todos: state.todos
    }
}

export default connect(select)(App)