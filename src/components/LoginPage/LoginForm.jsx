import React, { useState } from 'react';

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    {isSignUp ? (
      <SignUp setIsSignUp={setIsSignUp} />
    ) : isForgotPassword ? (
      <ForgotPassword setIsForgotPassword={setIsForgotPassword} />
    ) : (
      <div className="max-w-lg p-20 bg-white rounded-lg shadow-lg"> 
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-12 py-2 border rounded-md"
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-12 py-2 border rounded-md"
            />
            {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md">Login</button>
        </form>
        <div className="mt-4 flex justify-between">
          <button className="text-blue-500" onClick={() => setIsSignUp(true)}>Sign Up</button>
          <button className="text-blue-500" onClick={() => setIsForgotPassword(true)}>Forgot Password</button>
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
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signupForm">
        <div className="mb-4">
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label htmlFor="firstName" className="block mb-1">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
              {errors.firstName && <p className="text-red-500 mt-1">{errors.firstName}</p>}
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="lastName" className="block mb-1">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
              {errors.lastName && <p className="text-red-500 mt-1">{errors.lastName}</p>}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-1">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.confirmPassword && <p className="text-red-500 mt-1">{errors.confirmPassword}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-1">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.phoneNumber && <p className="text-red-500 mt-1">{errors.phoneNumber}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-1">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.address && <p className="text-red-500 mt-1">{errors.address}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md">Sign Up</button>
      </form>
      <button className="text-blue-500 mt-4" onClick={() => setIsSignUp(false)}>Back to Login</button>
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
    <div className="max-w-lg p-20 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
            className="w-full px-12 py-2 border rounded-md"
          />
          {errors && <p className="text-red-500 mt-1">{errors}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md">Submit</button>
      </form>
      <button className="text-blue-500 mt-4" onClick={() => setIsForgotPassword(false)}>Back to Login</button>
    </div>
  );
};

export default LoginForm;
