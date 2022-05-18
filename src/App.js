import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAuth';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        <Route path='/home' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>




    </div>
  );
}

export default App;
