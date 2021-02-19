import React from 'react';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map(todo => {
                return <li>{todo.title}</li>
            })}
        </ul>
    )
}