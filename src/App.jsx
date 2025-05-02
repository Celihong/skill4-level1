import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
function App() {
  return (
    <div>
      <h1>Welcome to the API Data Viewer</h1>
      <nav>
        <ul>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
