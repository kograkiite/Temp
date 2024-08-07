const Order = require('../models/Order');
PAYPAL_CLIENT_ID=process.env.PAYPAL_CLIENT_ID;
PAYPAL_SECRET=process.env.PAYPAL_SECRET;
const { generateOrderID } = require('../utils/idGenerators');
const crypto = require('crypto-js');
const Voucher = require('../models/Voucher');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const newOrderID = await generateOrderID();
    const paypalOrderID = crypto.AES.encrypt(req.body.PaypalOrderID, process.env.PAYPAL_CLIENT_SECRET).toString();
    const newOrder = new Order({ ...req.body, PaypalOrderID: paypalOrderID, OrderID: newOrderID });
    if (req.body.VoucherID){
      const voucher = await Voucher.findOne({ VoucherID: req.body.VoucherID });
         voucher.UsageLimit -= 1;
         await voucher.save();
   }
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ OrderID: req.params.id });
    if (order) {
      if (order.PaypalOrderID) {
        const decryptedOrderID = crypto.AES.decrypt(order.PaypalOrderID, process.env.PAYPAL_CLIENT_SECRET).toString(crypto.enc.Utf8);
        order.PaypalOrderID = decryptedOrderID;
      }
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an order by account ID
exports.getOrderByAccountId = async (req, res) => {
  try {
    const order = await Order.find({ AccountID: req.params.accountId });
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an order by ID (Partial Update)
exports.updateOrderById = async (req, res) => {
  try {
    const updatedOrder = await Order.findOneAndUpdate(
      { OrderID: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (updatedOrder) {
      res.status(200).json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an order by ID
exports.deleteOrderById = async (req, res) => {
  try {
    const deletedOrder = await Order.findOneAndDelete({ OrderID: req.params.id });
    if (deletedOrder) {
      res.status(200).json({ message: 'Order deleted' });
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};