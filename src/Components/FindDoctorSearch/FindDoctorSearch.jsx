import React, { useState } from 'react';
import './FindDoctorSearch.css';

const initSpeciality = [
    'Dentist', 'Gynecologist/Obstetrician', 'General Physician', 
    'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
];

const FindDoctorSearch = ({ onSearch }) => { // Dodan prop onSearch
    const [searchQuery, setSearchQuery] = useState('');
    const [showSpecialities, setShowSpecialities] = useState(false);

    const handleSearch = (e) => {
        if (e) e.preventDefault();
        onSearch(searchQuery); // Poziva funkciju iz InstantConsultation
        setShowSpecialities(false);
    };

    const handleSpecialitySelect = (speciality) => {
        setSearchQuery(speciality);
        setShowSpecialities(false);
        onSearch(speciality); // Odmah filtrira kad klikneš na listu
    };

    return (
        <div className="find-doctor-container">
            <center>
                <h1>Find a doctor and Consult instantly</h1>
                <div className="doctor-icon-main">
                    {/* IZBRISAN IMG TAG I ZAMIJENJEN IKONOM DA NE PIŠE "Doctor Icon" */}
                    <i className="fa fa-user-md" style={{color:'#007bff', fontSize:'5rem', marginBottom:'20px'}}></i>
                </div>
                
                <div className="search-container">
                    <form className="search-form" onSubmit={handleSearch}>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search doctors, clinics, hospitals, etc."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setShowSpecialities(true)}
                            onBlur={() => setTimeout(() => setShowSpecialities(false), 200)}
                        />
                        <button type="submit" className="search-button">
                            <i className="fa fa-search"></i> Search
                        </button>
                    </form>

                    {showSpecialities && (
                        <ul className="speciality-list">
                            {initSpeciality.map((spec, index) => (
                                <li 
                                    key={index} 
                                    onMouseDown={() => handleSpecialitySelect(spec)}
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