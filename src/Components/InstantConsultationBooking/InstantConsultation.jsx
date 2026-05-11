import React, { useEffect, useState } from 'react';
import './InstantConsultation.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FindDoctorSearch from '../FindDoctorSearch/FindDoctorSearch';
import DoctorCard from '../DoctorCard/DoctorCard';

const InstantConsultation = () => {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    
    const getDoctorsDetails = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            // Uzimamo samo prva 3 liječnika kako bi stalo u jedan red
            const limitedData = data.slice(0, 3); 
            
            if (searchParams.get('speciality')) {
                const filtered = limitedData.filter(doctor => 
                    doctor.speciality.toLowerCase() === searchParams.get('speciality').toLowerCase()
                );
                setFilteredDoctors(filtered);
                setIsSearched(true);
            } else {
                setFilteredDoctors([]);
                setIsSearched(false);
            }
            
            setDoctors(limitedData);
        })
        .catch(err => console.log(err));
    }

    const handleSearch = (searchText) => {
        if (searchText === '') {
            setFilteredDoctors([]);
            setIsSearched(false);
        } else {
            const filtered = doctors.filter(
                (doctor) =>
                doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredDoctors(filtered);
            setIsSearched(true);
        }
    };

    const navigate = useNavigate();
    
    useEffect(() => {
        getDoctorsDetails();
        // searchParams u nizu osigurava osvježavanje pri promjeni kategorije
    }, [searchParams]);

    return (
        <center>
            <div className="searchpage-container">
                {/* Ovdje se prosljeđuje handleSearch funkcija */}
                <FindDoctorSearch onSearch={handleSearch} />
                
                <div className="search-results-container" style={{ marginTop: '70px' }}>
                    <center>
                        {/* Dinamički prikaz broja liječnika */}
                        <h2>{isSearched ? filteredDoctors.length : doctors.length} doctors available</h2>
                        <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                        
                        {/* Flexbox osigurava jedan red s tri kartice */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
                            {(isSearched ? filteredDoctors : doctors).map((doctor, index) => (
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