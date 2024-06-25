const mongoose = require('mongoose');

const OrderDetailsSchema = new mongoose.Schema({
    OrderDetailsID: { type: String, required: true, unique: true },
    OrderID: { type: String, required: true, ref: 'Order' },
    Products: [{
    ProductID: { type: String, required: true, ref: 'Product' },
    ProductName: { type: String, required: true},
    Price: { type: Number, required: true },
    Quantity: { type: Number, required: true },
  }]
}, { versionKey: false },
);
const OrderDetails = mongoose.model('OrderDetails', OrderDetailsSchema, 'OrderDetails');
  
module.exports = OrderDetails;