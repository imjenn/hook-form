import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm'

function App() {
  return (
    <div className="App">
      <UserForm firstName lastName/>  
    </div>
  );
}

export default App;
