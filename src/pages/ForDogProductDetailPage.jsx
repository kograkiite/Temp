
import { useEffect, useState } from 'react';
import Banner from '../components/homePage/Banner'
import Footer from '../components/homePage/Footer'
import { useParams } from 'react-router-dom';
import { getForDogProductsDetail } from '../apis/ApiProduct';
import ProductDetail from '../components/ProductDetailPage/ProductDetail';



const ForDogProductDetailPage = () => {
    const {id} = useParams();
    const [productData,setProductData] = useState();
    useEffect(()=>{
      getForDogProductsDetail(id).then((data)=>{
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

export default ForDogProductDetailPage