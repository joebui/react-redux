import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, getTodos, setNextTodoId } from './actions/action'

import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'
import Header from './components/Header.jsx';

class App extends Component {
    componentWillMount() {
        // Call API to get list of todos.
        this.props.dispatch(getTodos());
    }

    render() {
        const { dispatch, todos, nextId } = this.props

        return (
            <div>
                <Header />

                <div className="container">
                    <AddTodo onAddClick={text => dispatch(addTodo(nextId, text))} />

                    <TodoList todos={todos} />
                </div>
            </div>
        )
    }
}

function select(state) {
    return {
        todos: state.todos.data,
        nextId: state.todos.nextId
    }
}

export default connect(select)(App)