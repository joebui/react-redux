import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions/action'

import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'
import Header from './components/Header.jsx';

class App extends Component {
    render() {
        const { dispatch, visibleTodos } = this.props

        return (
            <div>
                <Header />

                <div className="container">
                    <AddTodo
                        onAddClick={text => dispatch(addTodo(text))}
                        />

                    <TodoList todos={visibleTodos} />
                </div>
            </div>
        )
    }
}

function select(state) {
    return {
        visibleTodos: state.todos
    }
}

export default connect(select)(App)