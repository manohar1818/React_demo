import React from 'react'
import PropTypes from 'prop-types'

export const TodoForm = props => { 
    return(
        <form onSubmit={props.handleSubmit}>
            <input focus="true" type="text" placeholder="Enter ur todo" value={props.currentTodo} onChange={props.handleOnchangeInput} />
          </form>
    )
}

TodoForm.propTypes = {
    currentTodo: PropTypes.string.isRequired,
    handleOnchangeInput: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}