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
                
                const limitedData = data.slice(0, 4);
                setDoctors(limitedData);
                setFilteredDoctors(limitedData);
            })
            .catch(err => console.log(err));
    }

    const handleSearch = (searchText) => {
        if (searchText === '') {
            setFilteredDoctors(doctors);
            setIsSearched(false);
        } else {
            const filtered = doctors.filter(
                (doctor) => doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
            );
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