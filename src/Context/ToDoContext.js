import { createContext, useState } from 'react';

export const ToDoContext = createContext();

const ToDoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    const id = todos.length + 1;
    const newToDo = { ...todo, id };
    setTodos([...todos, newToDo]);
  };

  const removeToDo = (id) => {
    const todosArrayCopy = [...todos];
    // el método filter devuelvo un nuevo array con los elementos que cumplan con la condición que tenga la función callback que recibe
    const newTodosArray = todosArrayCopy.filter((todo) => todo.id !== id);
    setTodos(newTodosArray);
  };

  const updateStatusToDo = (id, newStatus) => {
    const todosArrayCopy = [...todos];
    // el método map también nos devuelve un nuevo array. Entonces itero el array y si el id que recibe updateStatusToDo es igual al del todo, va a devolver un objeto con todas las props de ese todo pero con el status modificado por el nuevo
    const newTodosArray = todosArrayCopy.map((todo) => {
      if (id === todo.id) {
        return { ...todo, status: newStatus };
      } else {
        // caso contrario, devuelve el objeto sin modificar
        return todo;
      }
    });
    setTodos(newTodosArray);
  };

  const removeAll = () => {
    setTodos([]);
  };

  const amountOfTodos = () => {
    const amount = todos.length;
    return amount;
  };

  return (
    <ToDoContext.Provider
      value={{
        todos,
        addToDo,
        removeToDo,
        updateStatusToDo,
        removeAll,
        amountOfTodos,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;
