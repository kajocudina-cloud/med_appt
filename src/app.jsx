import React from 'react';
// Importing components from react-router-dom for navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing your page components
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';

function App() {
  return (
    <div className="App">
      {/* BrowserRouter must wrap the entire application that uses routing */}
      <BrowserRouter>
        
        {/* Navbar is outside <Routes>, so it appears on every page */}
        <Navbar />

        {/* Routes component decides which page to show based on the URL */}
        <Routes>
          {/* Path "/" is your home page */}
          <Route path="/" element={<Landing_Page />} />
          
          {/* Path "/login" will render the Login component */}
          <Route path="/login" element={<Login />} />
          
          {/* Path "/signup" will render the SignUp component */}
          <Route path="/signup" element={<SignUp />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;