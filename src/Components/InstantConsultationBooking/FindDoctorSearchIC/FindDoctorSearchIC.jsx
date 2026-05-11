import React, { useState } from 'react';
import './FindDoctorSearchIC.css';
import { useNavigate } from 'react-router-dom';

const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
];

const FindDoctorSearchIC = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities] = useState(initSpeciality);
    const navigate = useNavigate();

    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/instant-consultation?speciality=${speciality}`);
        window.location.reload();
    };

    return (
        <div className='finddoctor'>
            <center>
                <h1>Find a doctor and Consult instantly</h1>
                <div>
                                        <i style={{color:'#007bff', fontSize:'5rem', marginBottom:'20px'}} className="fa fa-user-md"></i>
                </div>
                <div className="home-search-container" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div className="doctor-search-box">
                        <input 
                            type="text" 
                            className="search-doctor-input-box" 
                            placeholder="Search doctors, clinics, hospitals, etc." 
                            onFocus={() => setDoctorResultHidden(false)} 
                            onBlur={() => setDoctorResultHidden(true)} 
                            value={searchDoctor} 
                            onChange={(e) => setSearchDoctor(e.target.value)} 
                        />
                        
                        <div className="findiconimg">
                            <i className="fa fa-search" style={{color: '#007bff'}}></i>
                        </div>
    
                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {specialities.map(speciality => (
                                <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                    <i className="fa fa-search" style={{marginRight: "10px", fontSize: "12px"}}></i>
                                    <span>{speciality}</span>
                                    <span style={{marginLeft: 'auto', fontSize: '10px', color: 'gray'}}>SPECIALITY</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default FindDoctorSearchIC;