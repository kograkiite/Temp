import React, { useState } from 'react';
import '../LoginPage/LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
      {isSignUp ? (
        <SignUp setIsSignUp={setIsSignUp} />
      ) : isForgotPassword ? (
        <ForgotPassword setIsForgotPassword={setIsForgotPassword} />
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            <button type="submit">Login</button>
          </form>
          <div>
            <button onClick={() => setIsSignUp(true)}>Sign Up</button>
          </div>
          <div>
            <button onClick={() => setIsForgotPassword(true)}>Forgot Password</button>
          </div>
        </div>
      )}
    </div>
  );
};

const SignUp = ({ setIsSignUp }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-row">
        <div className="form-group">
            <label>First Name:</label>
            <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            />
            {errors.firstName && <p className="error-message">{errors.firstName}</p>}
        </div>
        <div className="form-group">
            <label>Last Name:</label>
            <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            />
            {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        </div>
        </div>
        <div className="form-group">
        <label>Email:</label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
        <label>Password:</label>
        <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <div className="form-group">
        <label>Confirm Password:</label>
        <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
        />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        </div>
        <div className="form-row">
        <div className="form-group">
            <label>Phone Number:</label>
            <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            />
            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
        </div>
        <div className="form-group">
            <label>Address:</label>
            <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            />
            {errors.address && <p className="error-message">{errors.address}</p>}
        </div>
        </div>
        <button type="submit">Sign Up</button>
    </form>
    <button onClick={() => setIsSignUp(false)}>Back to Login</button>
    </div>

  );
};

const ForgotPassword = ({ setIsForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setErrors('Email is required');
    } else {
      console.log('Forgot password request submitted for', email);
    }
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
          />
          {errors && <p className="error-message">{errors}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setIsForgotPassword(false)}>Back to Login</button>
    </div>
  );
};

export default LoginForm;
