import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ToDoContextProvider from './Context/ToDoContext';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import Home from './components/Home';
function App() {
  return (
    <ToDoContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addtodo' element={<ToDoForm />} />
        <Route path='/todos' element={<ToDoList />} />
      </Routes>
    </ToDoContextProvider>
  );
}

export default App;
