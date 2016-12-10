import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <li>
                {this.props.patientName}
            </li>
        )
    }
}