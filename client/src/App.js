import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from "./SignUp";
import Error from './Error';
import Login from './Login'
import Details from './Details'
function App() {
  return <div>
    <Routes>
      <Route exact path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path='details' element={<Details/>}/>
      <Route path="*" element={<Error />} />
      </Routes>
  </div>;
}

export default App;
