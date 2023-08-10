import React, { useEffect, useState } from 'react'

export default function Anasayfa() {

const [user, setUsers] = useState()
useEffect(()  => {
  const makeAPI = async () =>{
  const makeAPIRequest = async await fetch('https://fakestoreapi.com/products/20')
  const response = await request.json()

  setUsers(response.results)
};

makeAPIRequest();

},[]);






    
  return (
    <div>
      <h1>Home</h1>
      <hr></hr>
    </div>
  )
}
