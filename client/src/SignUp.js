import React, { useState } from 'react';

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
    console.log(e);
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

      // history('/login');
    }
  };
  return (
    <div>
      <form action="" method="post">
        <input type="text" name="name" id="name" onChange={handleInputs} />
        <input type="email" name="email" id="email" onChange={handleInputs} />
        <input type="number" name="phone" id="phone" onChange={handleInputs} />
        <input type="text" name="course" id="course" onChange={handleInputs} />
        <input type="text" name="country" id="country" onChange={handleInputs} />
        <input type="date" name="date" id="date" onChange={handleInputs} />

        <button type="submit" onClick={postData}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
