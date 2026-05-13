import React, { useEffect, useState } from 'react';
import './InstantConsultation.css';
import { useSearchParams } from 'react-router-dom';
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

const InstantConsultation = () => {
    const [searchParams] = useSearchParams();
    const [filteredDoctors, setFilteredDoctors] = useState(MY_DOCTORS);
    const [isSearched, setIsSearched] = useState(false);

        const performSearch = (searchText) => {
        if (!searchText || searchText.trim() === "") {
            setFilteredDoctors(MY_DOCTORS);
            setIsSearched(false);
        } else {
            const filtered = MY_DOCTORS.filter(doctor => 
                doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredDoctors(filtered);
            setIsSearched(true);
        }
    };

    const handleSearch = (searchText) => {
        performSearch(searchText);
    };

        useEffect(() => {
        const specParam = searchParams.get('speciality');
        if (specParam) {
            performSearch(specParam);
        } else {
            setFilteredDoctors(MY_DOCTORS);
            setIsSearched(false);
        }
    }, [searchParams]);

    return (
        <center>
            <div className="searchpage-container">
                <FindDoctorSearch onSearch={handleSearch} />
                
                <div className="search-results-container" style={{ marginTop: '70px' }}>
                    <center>
                        <h2>{filteredDoctors.length} doctors available</h2>
                        <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
                            {filteredDoctors.map((doctor, index) => (
                                <DoctorCard 
                                    className="doctorcard" 
                                    {...doctor} 
                                    key={`${doctor.name}-${index}`} 
                                />
                            ))}
                        </div>
                    </center>
                </div>
            </div>
        </center>
    );
};

export default InstantConsultation;