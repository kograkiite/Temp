const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  account_id: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: Number, required: true },
  role: { type: String, required: true }
});

// Specify the collection name as the third argument to mongoose.model
const Account = mongoose.model('Account', accountSchema, 'Users'); 

module.exports = Account;