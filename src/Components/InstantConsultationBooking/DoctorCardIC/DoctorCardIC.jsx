import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCardIC.css';
import AppointmentFormIC from "../AppointmentFormIC";
import { v4 as uuidv4 } from 'uuid';

const DoctorCardIC = ({ name, speciality, experience, ratings, profilePic }) => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleBooking = () => {
    setShowModal(true);
  };

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
    setAppointments(updatedAppointments);
  };

  const handleFormSubmit = (appointmentData) => {
    const newAppointment = {
      id: uuidv4(),
      ...appointmentData,
    };
    setAppointments([newAppointment]); // Postavljamo samo jedan termin kako bi odgovaralo slici
    setShowModal(false);
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          {/* Ovdje možeš staviti profilePic ako ga imaš u propsima, ili ostaviti SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"> 
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> 
          </svg>
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
        </div>
      </div>

      <div className="doctor-card-options-container">
        {/* LOGIKA ZAMJENE SADRŽAJA NA KARTICI PREMA SLICI Confirm_2.png */}
        {appointments.length > 0 ? (
          <div className="booked-details-inline">
            <h3 className="appointment-booked-text">Appointment Booked!</h3>
            {appointments.map((appointment) => (
              <div key={appointment.id}>
                <p><strong>Name:</strong> {appointment.name}</p>
                <p><strong>Phone Number:</strong> {appointment.phoneNumber}</p>
                <button 
                  className="cancel-appointment-btn" 
                  onClick={() => handleCancel(appointment.id)}
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        ) : (
          <Popup
            trigger={
              <button className="book-appointment-btn">
                <div>Book Appointment</div>
                <div>No Booking Fee</div>
              </button>
            }
            modal
            open={showModal}
            onOpen={() => setShowModal(true)}
            onClose={() => setShowModal(false)}
          >
            {(close) => (
              <div className="doctorbg" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
                <div className="doctor-card-details">
                   <div className="doctor-card-detail-name">{name}</div>
                   <div className="doctor-card-detail-speciality">{speciality}</div>
                </div>
                <AppointmentFormIC 
                  doctorName={name} 
                  doctorSpeciality={speciality} 
                  onSubmit={handleFormSubmit} 
                />
              </div>
            )}
          </Popup>
        )}
      </div>
    </div>
  );
};

export default DoctorCardIC;