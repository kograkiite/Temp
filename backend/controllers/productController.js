const Product = require('../models/Product');
const mongoose = require('mongoose');


//Generate a new product ID
const generateProductId = async () => {
  try {
    const lastProduct = await Product.findOne().sort({ ProductID: -1 });

    if (lastProduct && lastProduct.ProductID) {
      const lastProductId = parseInt(lastProduct.ProductID.slice(1)); // Extract numeric part of the last ProductID
      const newProductId = `P${("000" + (lastProductId + 1)).slice(-3)}`; // Increment the numeric part and format it to 3 digits
      return newProductId;
    } else {
      return 'P001'; // Starting ID if there are no products
    }
  } catch (error) {
    console.error('Error generating product ID:', error);
    throw error; // Throw error to be caught by the calling function
  }
};


//Create product (manager only)
exports.createProduct = async (req, res) => {
  try {
    const { productName, price, petTypeId, description, imageURL } = req.body;

    // Kiểm tra các trường bắt buộc
    if (!productName || !price || !petTypeId || !description || !imageURL) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Chuyển đổi Price sang kiểu số
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
      return res.status(400).json({ message: 'Invalid price format' });
    }

    // Tạo mới sản phẩm
    const productId = await generateProductId(); // Generate a new ProductID
    const product = new Product({
      ProductID: productId,
      ProductName: productName,
      Price: parsedPrice,
      PetTypeId: petTypeId,
      Description: description,
      ImageURL: imageURL
    });

    // Lưu sản phẩm vào cơ sở dữ liệu
    await product.save();

    // Trả về thông báo thành công
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Error creating product', error });
  }
};


//Get all product
  exports.getProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products', error });
    }
  };

 //Get product by id
 exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findOne({ ProductID: productId });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    // Thêm thông tin lỗi vào phản hồi
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
};




 //Get product by pet type
 exports.getProductsByPetType = async (req, res) => {
  try {
    const petTypeId = req.params.petTypeId;
    const products = await Product.find({ PetTypeId: petTypeId });
    if (!products.length) {
      return res.status(404).json({ message: 'No products found for this pet type' });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

  // Update product (manager only)
  exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    delete updateData.productId;// remove the product id to prevent updating it
  
    try {
      // Find the product by ID and update it with the new data
      const product = await Product.findOneAndUpdate({ ProductID: id }, updateData, { new: true }); // The { new: true } option returns the updated document
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json({ message: 'Product updated successfully', product });
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

  //Delete product (manager only)
  exports.deleteProduct = async (req, res) => {
    try {
      const product = await Product.findOneAndDelete({ ProductID: req.params.id });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting product', error });
    }
  };

  
  