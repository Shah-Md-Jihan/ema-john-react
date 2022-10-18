import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css';

const SignUp = () => {

    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm);


        if (password.length < 6) {
            console.log(password.length)
            setError("Your password should be 6 character or more.")
            return;
        }
        if (password !== confirm) {
            setError("Password and confirm password must be same!");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="form-container">
            <h3 className="form-title">Sign Up</h3>
            {error && <p className="text-error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>

                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="confirm" required />
                </div>

                <input className="login-btn" type="submit" value="Sign Up" />
            </form>
            <p className="register-waning-container">
                Already Have an Account? <Link to="/login" className="register-warning">Login</Link>
            </p>
        </div>
    );
};

export default SignUp;