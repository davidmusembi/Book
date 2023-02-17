import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Book from './book';
import Admin from './admin';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/book' element={<Book />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
