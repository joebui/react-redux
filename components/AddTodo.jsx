import React, { Component, PropTypes } from 'react'
import { Button } from 'react-bootstrap';

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input className='form-control' type='text' ref='input' />

                <Button bsStyle='success' bsSize='small' onClick={(e) => this.handleClick(e)}>
                    Add
                </Button>
            </div >
        )
    }

    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }
}