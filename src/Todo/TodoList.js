import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';   // validation todo which we get from app.js

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props)  {
    return (
        <ul style={styles.ul}>
            { props.todos.map((todo, index) => {
                return <TodoItem key={todo.id} index={index} todo={todo} onChange={props.onToggle}/>
            }) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList