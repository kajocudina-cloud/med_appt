import React from 'react';
import './DoctorCard.css';

const DoctorDetails = ({ name, speciality, experience, ratings, profilePic }) => {
  return (
        <div className="doctor-card-container"> 
      
            <div className="doctor-card-body"> 
        <div className="doctor-card-profile-image">
          <img src={profilePic} alt={name} />
        </div>
        <div className="doctor-card-text-details">
          <h2 className="doctor-card-name">{name}</h2>
          <p className="doctor-card-speciality">{speciality}</p>
          <p className="doctor-card-experience">{experience} years experience</p>
          <p className="doctor-card-ratings">Ratings: {ratings} Stars</p>
        </div>
      </div>

            <button className="book-appointment-btn">
        <div>Book Appointment</div>
        <div className="no-fee-text">No Booking Fee</div>
      </button>

    </div>
  );
};

const DoctorCard = () => {
    return (
        <div className="doctor-cards-list">
            <DoctorDetails 
                name="Dr. Mathew Philip" 
                speciality="Dentist" 
                experience="12" 
                ratings="4.5" 
                profilePic="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_1280.png" 
            />
            <DoctorDetails 
                name="Dr. Annie Andrews" 
                speciality="Dermatologist" 
                experience="8" 
                ratings="4.8" 
                profilePic="https://cdn-icons-png.flaticon.com/512/3304/3304567.png"
            />
                        <DoctorDetails 
                name="Dr. Mark Landon" 
                speciality="Gynecologist" 
                experience="7" 
                ratings="5.0" 
                profilePic="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_1280.png" 
            />
        </div>
    );
};

export default DoctorCard;