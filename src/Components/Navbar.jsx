import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <NavLink  to="/">
        LOGO
        </NavLink >
 
    <ul>
        <li style={{marginLeft: "auto"}}>
        
           <NavLink  to="/">/</NavLink>
        </li>
        <li>
            <NavLink  to = "/api-urunler">
                Ürünlerimiz
            </NavLink >
        </li>


    </ul>


    </nav>
  )
}
