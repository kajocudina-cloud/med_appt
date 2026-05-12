import React, { useEffect, useState } from 'react';
import './BookingConsultation.css'; 
import FindDoctorSearch from '../FindDoctorSearch/FindDoctorSearch';
import DoctorCard from '../DoctorCard/DoctorCard';

const BookingConsultation = () => {
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    const getDoctorsDetails = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
            .then(res => res.json())
            .then(data => {
                const myAdditionalDoctors = [
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
    
                
                const allDoctors = [...myAdditionalDoctors, ...data];
                
                setDoctors(allDoctors);
                setFilteredDoctors(allDoctors);
            })
            .catch(err => console.error("Greška pri dohvaćanju:", err));
    };

    const handleSearch = (searchText) => {
        if (!searchText || searchText.trim() === "") {
            setFilteredDoctors(doctors);
            setIsSearched(false);
        } else {
            const searchTerm = searchText.toLowerCase().trim();
            
            const filtered = doctors.filter((doctor) => {
                
                return doctor.speciality.toLowerCase().includes(searchTerm);
            });
    
            setFilteredDoctors(filtered);
            setIsSearched(true);
        }
    };

    useEffect(() => {
        getDoctorsDetails();
    }, []);

    return (
        <div className="booking-container">
            <FindDoctorSearch onSearch={handleSearch} />
            <div className="search-results-container">
                <h2>{isSearched ? filteredDoctors.length : doctors.length} doctors available</h2>
                <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                <div className="doctor-cards-grid">
                    {filteredDoctors.map((doctor, index) => (
                        <DoctorCard 
                            key={`${doctor.name}-${index}`} 
                            {...doctor} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookingConsultation;