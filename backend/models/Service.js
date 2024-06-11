const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    ServiceID: { type: String, required: true, unique: true },
    ServiceName: { type: String, required: true },
    Description: { type: String, required: true },
    ImageURL: { type: String, required: true },
    Price: { type: Number, required: true },
    Status: { type: String, required: true, enum: ["Available", "Unavailable"] }
});

module.exports = mongoose.model('Service', serviceSchema, 'Services');
