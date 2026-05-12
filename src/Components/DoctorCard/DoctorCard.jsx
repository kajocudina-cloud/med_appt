import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import { v4 as uuidv4 } from 'uuid'; 

const DoctorDetails = ({ name, speciality, experience, ratings, profilePic }) => {
  const [showForm, setShowForm] = useState(false);
  const [appointments, setAppointments] = useState([]); 

  const handleBooking = (formData) => {
    const newAppointment = {
      id: uuidv4(),
      ...formData,
    };
    setAppointments([newAppointment]); 
    setShowForm(false);
    alert(`The appointment with Dr. ${name} has been successfully booked!`);
  };

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
    setAppointments(updatedAppointments);
    alert(`Your appointment with Dr. ${name} has been canceled.`);
  };

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

      <div className="doctor-card-options-container">
        
        {appointments.length > 0 ? (
          <div className="booked-details">
            <h3 className="appointment-booked-text">Appointment Booked!</h3>
            {appointments.map((appointment) => (
              <div key={appointment.id} className="appointment-info">
                <p><strong>Patient:</strong> {appointment.name}</p>
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Time:</strong> {appointment.selectedSlot}</p>
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
          /* If there is no appointment, show a button to open the form */
          <button 
            className="book-appointment-btn" 
            onClick={() => setShowForm(!showForm)}
          >
            <div>{showForm ? "Cancel Selection" : "Book Appointment"}</div>
            <div className="no-fee-text">No Booking Fee</div>
          </button>
        )}
      </div>

      {showForm && appointments.length === 0 && (
        <div className="appointment-form-overlay">
          <AppointmentForm 
            doctorName={name} 
            doctorSpeciality={speciality} 
            onSubmit={handleBooking} 
          />
        </div>
      )}
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
        speciality="Gynecologist/Obstetrician" 
        experience="7" 
        ratings="5.0" 
        profilePic="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_1280.png" 
      />
    </div>
  );
};

export default DoctorCard;