import React from 'react';
import Main from './Components/Main';
import './Components/style.css';
import MovieDetail from './Components/MovieDetail';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
   <BrowserRouter>
     <Routes>
      <Route path='/' element={<Main/>}></Route>
      
      <Route path="movie/:id" element={<MovieDetail />}></Route>

     </Routes>
   </BrowserRouter>
      
    </>
  );
}

export default App;