import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';

export default function UrunDetay() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // const yonlendir = useNavigate()

  useEffect(() => {
    const apiRequest = async () => {
      try {
        const request = await fetch(`https://fakestoreapi.com/products/${id}`); 
        const response = await request.json();
        
        setProduct(response);
      } catch (error) {
        console.error(error);
        return <ErrorPage></ErrorPage> 
      }
    };

    apiRequest();
  }, [id]); //yeni ürün özelliklerini almak için gerekli

  if (!product) {
    return <div>Yükleniyor...</div>; //beklemeden geçtiğinde hata alıyor
  }

  // if([!Object.entries(product).length]){
  //   return <p>Lütfen bekleyiniz...</p>
  // }

  return (
    <div>
      <h1>Ürün Detay Sayfası</h1>
      <div className='flex-item'>
        <h3>{product.title}</h3>
        <p>Ürün Açıklaması:</p>
        <p>{product.description}</p>
        <div className='image-container'>
          <img src={product.image} alt={product.title} />
        </div>
        <div>
          <p>Puan: {product.rating.rate} ({product.rating.count} kişi oylama yaptı.)</p>
          <button>Satın Al</button>
          <button>Daha Sonra Satın Al</button>
        </div>
      </div>
    </div>
  );
}
//error handing yapıılmazsa "url/msdfkgs" uygulama çöker.