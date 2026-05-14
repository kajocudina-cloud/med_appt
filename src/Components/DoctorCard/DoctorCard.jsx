import React, { useState, useEffect } from 'react'; // Dodan useEffect
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import { v4 as uuidv4 } from 'uuid'; 

const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {
  const [showForm, setShowForm] = useState(false);
  const [appointments, setAppointments] = useState([]); 

    useEffect(() => {
    const storedAppointment = localStorage.getItem(name);
    if (storedAppointment) {
      setAppointments([JSON.parse(storedAppointment)]);
    }
  }, [name]);
  // ----------------------------------------------------------------

  const handleBooking = (formData) => {
    const newAppointment = {
      id: uuidv4(),
      ...formData,
    };
    
   
    setAppointments([newAppointment]); 
    
        localStorage.setItem('doctorData', JSON.stringify({ name: name }));
    
        localStorage.setItem(name, JSON.stringify({
        name: formData.name,
        date: formData.date,
        time: formData.selectedSlot, 
        id: newAppointment.id
    }));
    // ------------------------------------------------

    setShowForm(false);
    alert(`The appointment with Dr. ${name} has been successfully booked!`);
    
    // We refresh the page so that the Notification component immediately "sees" the change.
    window.location.reload();
  };

  const handleCancel = (appointmentId) => {
    // We delete from local state
    setAppointments([]);

    // --- DELETE FROM LOCALSTORAGE ---
    localStorage.removeItem(name);
    localStorage.removeItem('doctorData');
    // -------------------------------

    alert(`Your appointment with Dr. ${name} has been canceled.`);
    
    // Refresh the page to make the notification disappear.
    window.location.reload(); 
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
                {/* Here we are careful whether we use selectedSlot or time depending on the source */}
                <p><strong>Time:</strong> {appointment.selectedSlot || appointment.time}</p>
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

export default DoctorCard;