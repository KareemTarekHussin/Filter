import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";


export default function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  // const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new card on the server using the API
    try {
      const response = await fetch('https://dummyapi.io/data/v1/user/create', {
        method: 'POST',
        headers: {
            "app-id": "64fc4a747b1786417e354f31",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          email,
        }),
      });

      if (response.ok) {
        // Redirect to the Landing page
        // history.push('/Desktop');
      } else {
        // Handle error response from the API
        console.error('Failed to create card');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Failed to create card', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button type="submit">Save</button>
    </form>
  );
};