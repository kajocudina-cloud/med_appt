import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';

import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';


function App() {
    return (
        <center>
            <div className="searchpage-container">
                <FindDoctorSearch onSearch={handleSearch} />
                
                <div className="search-results-container" style={{ marginTop: '70px' }}>
                    
                    <h2>{isSearched ? filteredDoctors.length : doctors.length} doctors available</h2>
                    <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                    
                   
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'row', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center', 
                        gap: '20px', 
                        marginTop: '30px' 
                    }}>
                        
                        {(isSearched ? filteredDoctors : doctors).map((doctor, index) => (
                            <DoctorCard 
                                className="doctorcard" 
                                {...doctor} 
                                key={`${doctor.name}-${index}`} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </center>
    );
}
export default App;