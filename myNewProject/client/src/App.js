import React from 'react';
import Main from './views/Main';
import className from './App.css'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/people/" />
        <Route element={<Detail />} path="/people/:id" />
      </Routes>
    </div>
  );
}
export default App;

