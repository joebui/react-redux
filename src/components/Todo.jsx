import React, { Component, PropTypes } from 'react'

class Todo extends Component {
    render() {
        return (
            <li>
                {this.props.text}
            </li>
        )
    }
}

Todo.propTypes = {
    text: React.PropTypes.string
}

export default Todo;