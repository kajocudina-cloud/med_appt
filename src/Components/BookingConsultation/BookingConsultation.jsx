import React, { useState } from 'react';
import './BookingConsultation.css'; 
import FindDoctorSearch from '../FindDoctorSearch/FindDoctorSearch';
import DoctorCard from '../DoctorCard/DoctorCard';

const MY_DOCTORS = [
    { 
        name: "Dr. Mathew Philip", 
        speciality: "Dentist", 
        experience: "12", 
        ratings: "4.5", 
        profilePic: "https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_1280.png" 
    },
    { 
        name: "Dr. Annie Andrews", 
        speciality: "Dermatologist", 
        experience: "8", 
        ratings: "4.8", 
        profilePic: "https://cdn-icons-png.flaticon.com/512/3304/3304567.png"
    },
    { 
        name: "Dr. Mark Landon", 
        speciality: "Gynecologist/Obstetrician", 
        experience: "7", 
        ratings: "5.0", 
        profilePic: "https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_1280.png" 
    }
];

const BookingConsultation = () => {
        const [filteredDoctors, setFilteredDoctors] = useState(MY_DOCTORS);
    const [isSearched, setIsSearched] = useState(false);

        const handleSearch = (searchText) => {
        if (!searchText || searchText.trim() === "") {
            setFilteredDoctors(MY_DOCTORS);
            setIsSearched(false);
        } else {
            const searchTerm = searchText.toLowerCase().trim();
            const filtered = MY_DOCTORS.filter((doctor) => 
                doctor.speciality.toLowerCase().includes(searchTerm)
            );
            setFilteredDoctors(filtered);
            setIsSearched(true);
        }
    };

    return (
        <div className="booking-container">
            {/* Search component */}
            <FindDoctorSearch onSearch={handleSearch} />
            
            <div className="search-results-container">
                {/* Show number of results */}
                <h2>{filteredDoctors.length} doctors available</h2>
                <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                
                <div className="doctor-cards-grid">
                    {filteredDoctors.map((doctor, index) => (
                        <DoctorCard 
                            key={`${doctor.name}-${index}`} 
                            {...doctor} 
                        />
                    ))}
                </div>

                {/* Message if search finds nothing */}
                {filteredDoctors.length === 0 && (
                    <p className="no-results">No doctors found for this speciality.</p>
                )}
            </div>
        </div>
    );
};

export default BookingConsultation;