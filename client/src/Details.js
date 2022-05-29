import React, { useEffect, useState } from 'react';
import './Details.css';
function About() {
  const [userData, setUserData] = useState('');
  const aboutPage = async () => {
    try {
      const res = await fetch('/details', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.Error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    aboutPage();
  }, []);

  const date = new Date(userData.date);
  const value = date.toString().substring(0, 10);
  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="profile-head">
            <h2>Details of the User</h2>
            <h5 clasName = 'title'>Name: {userData.name}</h5>
            <h5 clasName = 'title'>Email:{userData.email} </h5>
            <h5 clasName = 'title'>Phone: {userData.phone}</h5>
            <h5 clasName = 'title'>Course:{userData.course} </h5>
            <h5 clasName = 'title'>Country:{userData.country} </h5>
            <h5 clasName = 'title'>Date of Birth:{ value}</h5>
          </div>
        </form>
      </div>
    </>
  );
}

export default About;
