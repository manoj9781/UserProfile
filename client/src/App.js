import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from "./SignUp";
import Error from './Error';
function App() {
  return <div>
    <Routes>
      <Route exact path="/" element={<Signup />} />
      <Route path="*" element={<Error />} />
      </Routes>
  </div>;
}

export default App;
