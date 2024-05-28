import React, { useState } from "react";
import "./style.css"

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    function generateId(){
        return Math.floor(Math.random() * 1000);
    }

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((t) => t.id !== id))
    }

    const handleSubmit = () => {
        if (input.trim() === '') return; // Prevent adding empty todos
        setTodos(todos => [
            ...todos,
            {
                text: input,
                id: generateId()
            }
        ]);
        setInput("");
    }
    return (
        <>
            <div className="container">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="New Todo" />
                <button onClick={handleSubmit}>Submit</button>
                <ul className="todos-list">
                    {todos.map(({text, id}) => (
                        <li key={id} className="todo">
                            <span>{text}</span>
                            <button className="close" onClick={() => removeTodo(id)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todo;