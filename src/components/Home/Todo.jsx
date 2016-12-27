import React, { Component } from 'react'

class Todo extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.text}</td>
            </tr>
        )
    }
}

Todo.propTypes = {
    text: React.PropTypes.string
}

export default Todo;