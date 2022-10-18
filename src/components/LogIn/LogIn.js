import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
    return (
        <div className="form-container">
            <h3 className="form-title">Login</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <input className="login-btn" type="submit" value="Login" />
            </form>
            <p className="register-waning-container">
                New to Ema-john? <Link to="/register" className="register-warning">Create New Account</Link>
            </p>
        </div>
    );
};

export default LogIn;