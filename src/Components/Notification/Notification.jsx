import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css'; 

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  
  // New state for managing notification visibility
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
      // If there is information about the appointment, show a notification
      setShowNotification(true);
    }
    
    // We listen for changes in localStorage (eg if an appointment is deleted in another component)
    const handleStorageChange = () => {
      const updatedAppointment = localStorage.getItem(storedDoctorData?.name);
      if (!updatedAppointment) {
        setShowNotification(false);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [doctorData?.name]);

  return (
    <div>
      <Navbar />
      {children}
      
      {/* Simplified testing requirement */}
      {appointmentData && (
        <div className="notification-container">
          <div className="appointment-card">
            <h3 className="appointment-card__title">Appointment Details</h3>
            <p><strong>Doctor:</strong> {doctorData?.name}</p>
            <p><strong>Patient:</strong> {appointmentData?.name}</p>
            <p><strong>Date:</strong> {appointmentData?.date}</p>
            <p><strong>Time:</strong> {appointmentData?.time}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;