import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import signUp from './signUp.jpg'
import './signup.css';

function SignUp() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    country: '',
    date: '',
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (event) => {
    event.preventDefault();

    const { name, email, phone, course, country, date } = user;
    const res = await fetch('/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        course,
        country,
        date,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert('Failed');
      console.log('Failed');
    } else {
      window.alert('Succesful');
      console.log('succesful');
    }
  };
  return (
    <div>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Register</h2>
              <form action="" method="post">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleInputs}
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleInputs}
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    onChange={handleInputs}
                    placeholder="Enter Phone"
                  />
                </div>
                <div className="form-group">
                  <select name="course" id="course" onChange={handleInputs}>
                    <option value="PG">PG</option>
                    <option value="UG">UG</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name="country"
                    id="country"
                    multiple
                    onChange={handleInputs}
                  >
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="australia">Australia</option>
                    <option value="canada">canada</option>
                    <option value="china">China</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={handleInputs}
                  />
                </div>
                <div className="from-group form-button">
                  <button
                    className="form-submit"
                    type="submit"
                    onClick={postData}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={signUp} alt="Pic" />
              </figure>
              <NavLink to="/login" className="signup-image-link">
                <span className="image-link"> I am already register</span>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
