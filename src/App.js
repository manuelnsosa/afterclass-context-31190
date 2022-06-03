import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ToDoContextProvider from './Context/ToDoContext';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
function App() {
  return (
    <ToDoContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Welcome to the To-Do App!</h1>} />
        <Route path='/addtodo' element={<ToDoForm />} />
        <Route path='/todos' element={<ToDoList />} />
      </Routes>
    </ToDoContextProvider>
  );
}

export default App;
