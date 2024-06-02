const express = require('express');
const { register, login, resetPassword } = require('../controllers/authController');
const router = express.Router();

// Đăng ký người dùng mới
router.post('/register', register);

// Đăng nhập người dùng
router.post('/login', login);

// Đặt lại mật khẩu
router.post('/reset-password', resetPassword);

module.exports = router;
