import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./Todo.css";

const LOCAL_STORAGE_KEY = "react-todo-list-task";

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  function back(){
    window.location.href = "/";
  }


  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text) return;
    setTodos([todo, ...todos]);
  };

  const removeTodo = (id) => {
    const removeArray = todos.filter((todo) => todo.id !== id);
    setTodos(removeArray);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) return;
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <section style={{backgroundColor:"#2D2D2D"}} className="main-container overlap-hidden flex flex-col items-center w-full ">
      {/* <div style={{borderColor:"black"}} className='w-full text-center border-b-2 p-4 border-black'>
          <h2 className="whitespace-nowrap truncate text-white mx-auto text-xl font-light ">To Do</h2>
      </div> */}
      <div style={{backgroundColor:"#1A1A1A"}} className="min-h-full">
        <TodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </section>
  );
};

