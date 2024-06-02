const jwt = require('jsonwebtoken');
const Account = require('../models/Account');
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const account = await Account.findOne({ email, password });
    if (account) {
      // Create JWT token with unique payload
      const token = jwt.sign(
        { id: account._id, email: account.email, role: account.role },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
      );

      let redirectPage = (account.role === 'user' || account.role === 'admin') ? 'homepage' : 'adminpage';
      res.json({ message: 'Login successful', user: { email: account.email, role: account.role }, token, redirectPage });
    } else {
      res.status(401).json({ message: 'Incorrect email or password!' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// API Đăng ký người dùng
exports.register = async (req, res) => {
  const { username, password, email, phone, status, role } = req.body;
  try {
    // Kiểm tra xem email đã được sử dụng chưa
    const existingAccount = await Account.findOne({ email });
    if (existingAccount) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Tạo một salt cho password
    const salt = await bcrypt.genSalt(10);
    // Hash password với salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Tạo một tài khoản mới
    const newAccount = new Account({
      username,
      password: hashedPassword,
      email,
      phone,
      status,
      role
    });

    // Lưu tài khoản mới vào cơ sở dữ liệu
    await newAccount.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const account = await Account.findOne({ email });
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    account.password = newPassword;
    await account.save();
    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Error during password reset:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};