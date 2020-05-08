import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import LoginForm from './components/LoginForm'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
      <TodoItem />
    </div>
  );
}

export default App;
