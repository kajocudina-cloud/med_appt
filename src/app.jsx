import React from 'react';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import SignUp from './Sign_Up/Sign_Up';
import './app.css';

function App() {
  return (
    <div className="App">
      {/* We display the Navbar at the top of every page */}
      <Navbar />

      <main>
        {/* For testing, we will put both forms one below the other.
Later, when you learn Routing, you will display them on separate links. */}
        <Login />
        <hr />
        <SignUp />
      </main>
    </div>
  );
}

export default App;