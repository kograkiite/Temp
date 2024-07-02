/* eslint-disable no-irregular-whitespace */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Input, Button, Typography, message, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import 'tailwindcss/tailwind.css';
const GOOGLE_CLIENT_ID = import.meta.env.REACT_APP_GOOGLE_CLIENT_ID

const { Title } = Typography;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [disableLogin, setDisableLogin] = useState(false);
  const navigate = useNavigate();
  const GoogleClientID = GOOGLE_CLIENT_ID;

  useEffect(() => {
    let timer;
    if (disableLogin) {
      timer = setTimeout(() => {
        setDisableLogin(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [disableLogin]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
  
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
  
    return newErrors;
  };
  
  const handleSubmit = async () => {
    if (disableLogin) return;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        setIsLoading(true);
        const response = await axios.post('http://localhost:3001/api/auth/login', {
          email,
          password,
        });
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('role', user.role);
        localStorage.setItem('user', JSON.stringify(user));
        // Save addressInfo to localStorage
        const addressInfo = {
          fullname: user.fullname,
          address: user.address,
          phone: user.phone,
        };
        localStorage.setItem('addressInfo', JSON.stringify(addressInfo));
        const cartResponse = await axios.get(`http://localhost:3001/api/cart/${user.id}`, {
        });
        console.log(cartResponse.data)
        const { Items } = cartResponse.data;
        localStorage.setItem('shoppingCart', JSON.stringify(Items));
      } catch (error) {
        if (error.response) {
          message.error(error.response.data.message);
        }
        setDisableLogin(true);
      } finally {
        setDisableLogin(true);
        setIsLoading(false);
        message.success('Login successful!', 1).then(() => {
          navigate('/', { replace: true });
        });
      }
    }
  };

  const handleGoogleLoginSuccess = async (response) => {
    const { credential } = response;
    try {
      const authResponse = await fetch('http://localhost:3001/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: credential }),
      });
      const data = await authResponse.json();
      if (data.token && data.user) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.role);
        localStorage.setItem('user', JSON.stringify(data.user));
  
        // Save addressInfo to localStorage
        const addressInfo = {
          fullname: data.user.fullname,
          address: data.user.address,
          phone: data.user.phone,
        };
        localStorage.setItem('addressInfo', JSON.stringify(addressInfo));
        
        const cartResponse = await axios.get(`http://localhost:3001/api/cart/${data.user.id}`, {
          headers: {
            'Authorization': `Bearer ${data.token}`,
          },
        });
        const { Items } = cartResponse.data;
        localStorage.setItem('shoppingCart', JSON.stringify(Items));
      }
    } catch (error) {
      console.error('Google login error:', error);
    }
    message.success('Login successful!', 1).then(() => {
      navigate('/', { replace: true });
    });
  };

  const handleGoogleLoginFailure = (error) => {
    message.error('Google login failed');
    console.error('Google login error:', error);
  };

  return (
    <GoogleOAuthProvider clientId={GoogleClientID}>
      <Row justify="center" style={{ alignItems: 'center' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={8} className='px-10 py-10'>
          <div className="p-6 md:p-12 bg-white rounded-lg shadow-md">
            <Title level={3} className="text-blue-500 text-center">Login</Title>
            <Form onFinish={handleSubmit} layout="vertical">
            <Form.Item
                label="Email"
                name="email"
                validateTrigger="onSubmit"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  autoComplete="email"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                validateTrigger="onSubmit"
                rules={[
                  { required: true, message: 'Please enter your password' },
                  { min: 8, message: 'Password must be at least 8 characters' }
                ]}
              >
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                />
              </Form.Item>
              <Form.Item className="w-full">
                <Button type="primary" htmlType="submit" className="w-full" disabled={isLoading || disableLogin}>
                  {disableLogin ? 'Logging in...' : 'Login'}
                </Button>
              </Form.Item>
              <div className="flex justify-between items-center w-full">
                <Button type="link" onClick={() => navigate('/register')} className="p-0">
                  Register
                </Button>
                <Button type="link" onClick={() => navigate('/forgot-password')} className="p-0">
                  Forgot Password?
                </Button>
              </div>
            </Form>
            <div className="mt-6 text-center">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
              />
            </div>
          </div>
        </Col>
      </Row>
    </GoogleOAuthProvider>
  );
};

export default LoginForm;
