
import { useEffect, useState } from 'react';
import ProductDetail from '../components/ProductDetailPage/ProductDetail'
import Banner from '../components/homePage/Banner'
import Footer from '../components/homePage/Footer'
import { useParams } from 'react-router-dom';
import { getForCatProductsDetail } from '../apis/ApiProduct';

const ForCatProductDetailPage = () => {
  const {id} = useParams();
  const [productData,setProductData] = useState();
  useEffect(()=>{
    getForCatProductsDetail(id).then((data)=>{
        setProductData(data)
    })
},[])
  return (productData &&
    <div>
        <Banner/>
        <ProductDetail productData={productData}/>
        <Footer/>
    </div>
  )
}

export default ForCatProductDetailPage