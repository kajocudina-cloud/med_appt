import React, { useState } from 'react';
import './Sign_Up.css';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from "../InstantConsultationBooking/FindDoctorSearchIC/config";


const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); 
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        // API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json();

        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            navigate("/");
            window.location.reload();
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg);
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    return (
        <div className="container">
            <div className="signup-wrapper">
                <div className="signup-card">
                    <form method="POST" onSubmit={register}>
                        <h1 style={{textAlign:'center', color:'#3c79a7', marginBottom:'20px'}}>Sign Up</h1>
                        
                        {/* Name Field */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="form-control" placeholder="Enter your name" required />
                        </div>
    
                        {/* Email Field */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" required />
                            {showerr && <div className="err" style={{ color: 'red', fontSize: '12px' }}>{showerr}</div>}
                        </div>
    
                        {/* Phone Field */}
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="form-control" placeholder="Enter your phone number" required />
                        </div>
    
                        {/* Password Field */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control" placeholder="Enter your password" required />
                        </div>
    
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="reset" className="btn btn-danger" onClick={() => {setName(''); setEmail(''); setPhone(''); setPassword('');}}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sign_Up;