//Build a Todo List:
//Implement a simple todo list application using React components.
//Users should be able to add, edit, and delete items on the list.

import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  function addInput() {
    if (inputValue.trim() !== "") {
      setToDos([...toDos, inputValue]);
      setInputValue("");
    }
  }

  function handleEditTodo(index, newValue) {
    const updatedTodos = [...toDos];
    updatedTodos[index] = newValue;
    setToDos(updatedTodos);
  }

  function handleDeleteTodo(index) {
    const updatedTodos = toDos.filter((_, i) => i !== index);
    setToDos(updatedTodos);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Add To do"
        value={inputValue}
        onChange={handleInput}
      />
      <button onClick={addInput}>Add</button>
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>
            <input
              className="list-items"
              type="text"
              value={toDo}
              onChange={(event) => handleEditTodo(index, event.target.value)}
            />
            <button
              className="deleteBtn"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [todos, setTodos] = useState([]);

//   function handleInputChange(event) {
//     setInputValue(event.target.value);
//   }

//   function handleAddTodo() {
//     if (inputValue.trim() !== "") {
//       setTodos([...todos, inputValue]);
//       setInputValue("");
//     }
//   }

//   function handleEditTodo(index, newValue) {
//     const updatedTodos = [...todos];
//     updatedTodos[index] = newValue;
//     setTodos(updatedTodos);
//   }

//   function handleDeleteTodo(index) {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   }

//   return (
//     <div className="App">
//       <h1>To do List</h1>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Add a new to do"
//       />
//       <button onClick={handleAddTodo}>Add</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             <input
//               type="text"
//               value={todo}
//               onChange={(event) => handleEditTodo(index, event.target.value)}
//             />

//             <button onClick={() => handleDeleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
