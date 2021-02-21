import React from 'react';
import TodoList from "./Todo/TodoList";

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: "Wake up early"},
        {id: 2, completed: false, title: "Go to school"},
        {id: 3, completed: false, title: "Go back home"},
    ])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    return (
        <div className="wrapper">
            <h1>My Todo List</h1>

            <TodoList todos={todos} onToggle={toggleTodo}/>
        </div>
    );
}

export default App;
