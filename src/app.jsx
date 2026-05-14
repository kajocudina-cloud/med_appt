import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Uvezi Notification komponentu
import Notification from './Components/Notification/Notification';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';

function App() {
    return (
        <BrowserRouter>
            
            <Notification>
                <Routes>
                    <Route path="/" element={<Landing_Page />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/instant-consultation" element={<InstantConsultation />} />
                    <Route path="/booking-consultation" element={<BookingConsultation />} />
                </Routes>
            </Notification>
        </BrowserRouter>
    );
}

export default App;