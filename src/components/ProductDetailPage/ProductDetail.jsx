import React, { useEffect, useState } from 'react';
import useShopping from '../../hook/useShopping';
import { getForDogProductsDetail } from '../../apis/ApiProduct';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const [quantity, setQuantity] = useState(1); // State để quản lý số lượng sản phẩm

    useEffect(() => {
        getForDogProductsDetail(id).then((data) => {
            setProductData(data);
        });
    }, [id]);

    const { handleAddItem } = useShopping();

    const handleIncrease = () => setQuantity(quantity + 1); // Tăng số lượng
    const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1); // Giảm số lượng

    const handleOrderNow = () => {
        console.log('Ordered:', productData, 'Quantity:', quantity);
    };

    const handleAddToCart = () => {
        if (productData) {
            const productWithQuantity = { ...productData, quantity };
            handleAddItem(productWithQuantity);
        }
    };

    const handleChangeQuantity = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };

    return (
        productData && (
            <div className="flex m-5 py-20 px-32">
                <div className="w-1/2 bg-cover bg-center h-96" style={{ backgroundImage: `url(${productData.image})` }}></div>
                <div className="w-1/2 p-5 ml-10">
                    <h1 className="text-6xl font-bold mb-4">{productData.name}</h1>
                    <p className="text-2xl text-green-500 mb-4">{`Price: $${productData.price}`}</p>
                    <p className="mb-6">{productData.description}</p>
                    <div className="flex items-center mb-6">
                        <button onClick={handleDecrease} className="bg-gray-600 text-white border border-gray-400 p-2">-</button>
                        <input value={quantity} onChange={handleChangeQuantity} className="mx-3 text-lg w-16 text-center" />
                        <button onClick={handleIncrease} className="bg-black text-white border border-gray-400 p-2">+</button>
                    </div>
                    <div className="flex space-x-4 justify-end">
                        <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2">Add to Cart</button>
                        <button onClick={handleOrderNow} className="bg-green-500 hover:bg-green-700 text-white px-4 py-2">Order Now</button>
                    </div>
                </div>
                <button className='bg-gray-200'><Link to='/cart'>ShoppingCart</Link></button>
            </div>
        )
    );
};

export default ProductDetail;
