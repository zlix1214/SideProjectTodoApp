import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const addTodo = (content) => {
    setTodos([
      ...todos,
      {
        content,
        id: Math.random(),
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };
  const toggleIsEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      })
    );
  };
  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, content: newContent, isEditing: false }
          : todo;
      })
    );
  };
  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted}
            toggleIsEditing={toggleIsEditing}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
}
export default TodoWrapper;