import React, { useState } from 'react';
import './FindDoctorSearch.css';

// List of specialties to display
const initSpeciality = [
    'Dentist', 'Gynecologist/Obstetrician', 'General Physician', 
    'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
];

const FindDoctorSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSpecialities, setShowSpecialities] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Pretražujem:", searchQuery);
        setShowSpecialities(false); // Sakrij listu nakon pretrage
    };

    // Function called when the user clicks on a specialty from the list
    const handleSpecialitySelect = (speciality) => {
        setSearchQuery(speciality);
        setShowSpecialities(false);
    };

    return (
        <div className="find-doctor-container">
            <center>
                <h1>Find a doctor and Consult instantly</h1>
                <div className="doctor-icon-main">
                    <img src="doctor-icon.png" alt="Doctor Icon" style={{width: '150px'}} />
                </div>
                
                <div className="search-container">
                    <form className="search-form" onSubmit={handleSearch}>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search doctors, clinics, hospitals, etc."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            // Implementacija onFocus i onBlur
                            onFocus={() => setShowSpecialities(true)}
                            onBlur={() => setTimeout(() => setShowSpecialities(false), 200)} // Delay omogućuje klik na stavku
                        />
                        <button type="submit" className="search-button">
                            <i className="fa fa-search"></i> Search
                        </button>
                    </form>

                    {/* List of specialties that is conditionally displayed */}
                    {showSpecialities && (
                        <ul className="speciality-list">
                            {initSpeciality.map((spec, index) => (
                                <li 
                                    key={index} 
                                    onMouseDown={() => handleSpecialitySelect(spec)} // onMouseDown se okida prije onBlur
                                    className="speciality-item"
                                >
                                    <i className="fa fa-search" style={{marginRight: '10px', color: '#888'}}></i>
                                    {spec}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </center>
        </div>
    );
};

export default FindDoctorSearch;