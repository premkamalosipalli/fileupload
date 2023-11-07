import React, { useState } from 'react';
import { userRegisterService } from '@/services/loginService/loginService';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [registrationStatus] = useState(null);
  const [emailError, setEmailError] = useState('');

  const handleInputChange = (e?: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email: string) => {
    // Simple email validation using a regular expression
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const handleRegistration = async () => {
    if (!validateEmail(formData.email)) {
      setEmailError('Invalid email address');
      return;
    }

    // Reset the email error state if the email is valid
    setEmailError('');

    const responseData = await userRegisterService(formData);

    console.log(responseData);
  };

  return (
    <div className="registration-container">
      <h2>Registration Page</h2>
      <div className="input-field">
        <span>First Name:</span>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Enter your First Name"
        />
      </div>
      <div className="input-field">
        <span>Last Name:</span>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Enter your Last Name"
        />
      </div>
      <div className="input-field">
        <span>Email:</span>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your Email"
        />
        {emailError && <div className="error">{emailError}</div>}
      </div>
      <div className="input-field">
        <span>Password:</span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your Password"
        />
      </div>
      <button className="submit-button" onClick={handleRegistration}>
        Register
      </button>
      {registrationStatus && (
        <div className="success">{registrationStatus}</div>
      )}
    </div>
  );
};

export default SignUp;
