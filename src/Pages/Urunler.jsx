import React, {  useEffect, useState} from 'react'
import { Link } from 'react-router-dom';



export default function Urunler() {
// const [sayac, setSayac] = useState(0)
// const [isim, setIsim] =useState("")

// useEffect(() => {
// console.log("sayfa yüklendiğinde 1 kere sayac güncellendğinde bir kere")

// }, [sayac]);



    const [data, setData]=useState([]);
    const truncateText = (metin) =>{
        if(metin.length >= 30){
        return metin.slice(0.30) + "..."
    }
    return metin
    
}
 

  useEffect(() => {
    const apiRequest = async () => {
      try {
        const request = await fetch('https://fakestoreapi.com/products');
        const response = await request.json();
        console.log(response);
        setData(response);
      } catch (error) {
        console.error('API request error:', error);
      }
    };

    apiRequest();
  }, []);

  return (
  <>
      <div>
      <h1>ÜRÜNLERİMİZ</h1>
      <hr></hr>
      {/* <button onClick={() => {return setSayac(sayac + 1)}}>{sayac}</button>
      <br></br>
      <p>2.State:</p>
      <input onChange={(event)=>{setIsim(event.target.value)}}type='text' value={isim}></input> */}
    </div>
    <div className='flex-container'>
      {data.map(product => {
        return <div className='flex-item'>
            <Link to={`/api-urunler/${product.id}`}><h3>{product.title}</h3></Link>
            
            <p>{truncateText(product.description)}</p>
            <div className='image-container'>
                <img src= {product.image} alt = {product.title} ></img>
            </div>
        </div>
      
      })}
    </div>
    
    
  </>
  )
}
