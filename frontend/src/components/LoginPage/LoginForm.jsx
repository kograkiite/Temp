/* eslint-disable no-irregular-whitespace */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Input, Button, Typography, message, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import 'tailwindcss/tailwind.css';
import { useTranslation } from 'react-i18next';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const GOOGLE_CLIENT_ID = import.meta.env.REACT_APP_GOOGLE_CLIENT_ID

const { Title, Text } = Typography;
const API_URL = import.meta.env.REACT_APP_API_URL;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [disableLogin, setDisableLogin] = useState(false);
  const navigate = useNavigate();
  const GoogleClientID = GOOGLE_CLIENT_ID;
  const { t } = useTranslation();
  // disable button while processing
  useEffect(() => {
    let timer;
    if (disableLogin) {
      timer = setTimeout(() => {
        setDisableLogin(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [disableLogin]);
  // check if user logined
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = t('email_required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = t('email_invalid');
    }
  
    if (!password) {
      newErrors.password = t('password_required');
    } else if (password.length < 8) {
      newErrors.password = t('password_min_length');
    }
  
    return newErrors;
  };
  
  const handleSubmit = async () => {
    if (disableLogin) return;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        setIsLoading(true);
        const response = await axios.post(`${API_URL}/api/auth/login`, {
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
        const cartResponse = await axios.get(`${API_URL}/api/cart/${user.id}`, {
        });
        message.success(t('login_successful'), 1).then(() => {
          navigate('/', { replace: true });
          // Force refresh after login success
          window.location.reload();
        });
        console.log(cartResponse.data)
        const { Items } = cartResponse.data;
        localStorage.setItem('shoppingCart', JSON.stringify(Items));
      } catch (error) {
        if (error.response) {
          console.error(error.response.data.message);
          if (error.response.data.message === 'Account is inactive') {
            message.error(t('account_locked'));
          } else {
            message.error(t('login_failed'));
          }
        }
        setDisableLogin(true);
      } finally {
        setDisableLogin(true);
        setIsLoading(false);
      }
    }
  };
  
  const handleGoogleLoginSuccess = async (response) => {
    const { credential } = response;
    try {
      const authResponse = await fetch(`${API_URL}/api/auth/google`, {
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
        
        const cartResponse = await axios.get(`${API_URL}/api/cart/${data.user.id}`, {
          headers: {
            'Authorization': `Bearer ${data.token}`,
          },
        });
        const { Items } = cartResponse.data;
        localStorage.setItem('shoppingCart', JSON.stringify(Items));
      }
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message);
        if (error.response.data.message === 'Account is inactive') {
          message.error(t('account_locked'));
        } else {
          message.error(t('login_failed'));
        }
      }
      console.error('Google login error:', error);
    }
    message.success(t('login_successful'), 1).then(() => {
      navigate('/', { replace: true });
      // Force refresh after login success
      window.location.reload();
    });
  };
  

  const handleGoogleLoginFailure = (error) => {
    message.error(t('google_log_in_fail'));
    console.error('Google login error:', error);
  };

  return (
    <GoogleOAuthProvider clientId={GoogleClientID}>
      <Row justify="center" style={{ alignItems: 'center' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={9} className='px-10 py-10'>
          <div className="p-6 md:p-12 bg-white rounded-lg shadow-lg">
            <Title level={2} className="text-center text-blue-600 py-10">{t('log_in')}</Title>
            <Form onFinish={handleSubmit} layout="vertical">
              {/* Email */}
              <Form.Item
                name="email"
                validateTrigger="onSubmit"
                rules={[
                  { required: true, message: t('please_enter_email') },
                  { type: 'email', message: t('please_enter_valid_email') }
                ]}
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  autoComplete="email"
                  prefix={<MailOutlined />}
                  placeholder={t('email')}
                />
              </Form.Item>
              {/* Password */}
              <Form.Item
                name="password"
                validateTrigger="onSubmit"
                rules={[
                  { required: true, message: t('please_enter_password') },
                  { min: 8, message: t('password_min_length') }
                ]}
              >
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  prefix={<LockOutlined />}
                  placeholder={t('password')}
                />
              </Form.Item>
              {/* Button */}
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full" disabled={isLoading || disableLogin}>
                  {disableLogin ? t('logging') : t('login')}
                </Button>
              </Form.Item>
              <Form.Item>
                <Button onClick={() => navigate('/register')} className="w-full">
                    {t('register')}
                </Button>
              </Form.Item>
              <Form.Item className="text-right">
                <Button type="link" onClick={() => navigate('/forgot-password')} className="p-0">
                    {t('forgot_password')}?
                </Button>
              </Form.Item>
            </Form>
            <Text>{t('log_in_using_your_account_on')}:</Text>
            {/* Google Login button */}
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
