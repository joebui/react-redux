import React, { Component, PropTypes } from 'react'
import { Button } from 'react-bootstrap';

export default class AddTodo extends Component {
    handleClick() {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-4'>
                    <input className='form-control' type='text' ref='input' />
                </div>
                <div className='col-md-1'>
                    <Button bsStyle='success' onClick={() => this.handleClick()}>
                        Add
                    </Button>
                </div>
            </div >
        )
    }    
}