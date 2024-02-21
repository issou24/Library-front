import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import useToken from './useToken';
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

/*

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}
*/
function App() {

  const { token, setToken } = useToken();

  // console.log('debut if')
  if(!token) {
    // console.log('je suis dans le if')
    return <Login setToken={setToken} />
  }
  // console.log('pas dans le if')
  

  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App