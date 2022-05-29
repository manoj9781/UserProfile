import React, { useState } from 'react';
import './login.css';
import signIn from './login.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');

  const navigation = useNavigate();

  const userLogin = async (event) => {
    event.preventDefault();

    console.log("Before Res");

    const res = await fetch('/getdetails', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    });
   
    const data = res.json();
    console.log(data);
    if (res.status === 400 || !data) {
      window.alert('Invalid');
    } else {
      window.alert('Succesfull');
      navigation('/details');
    }
  };

  return (
    <>
      <section className="signin">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={signIn} alt="Pic" />
              </figure>
              <NavLink to="/" className="signin-image-link">
                <span className="image-link"> Create an Account</span>
              </NavLink>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Get Details</h2>
              <form method="post" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email materials-icon-name"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Enter your Email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group form-button">
                  <button className='form-submit' type="submit" onClick={userLogin}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

