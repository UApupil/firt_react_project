import React from 'react';
import TodoList from "./Todo/TodoList";

function App() {
    const todoList = [
        {id:1, completed: false, title: "wake up early"},
        {id:2, completed: false, title: "Go to school"},
        {id:3, completed: false, title: "go back home"},
    ]


    return (
        <div className="wrapper">
            <h1>My Todo List</h1>

            <TodoList todos={todoList}/>
        </div>
    );
}

export default App;
