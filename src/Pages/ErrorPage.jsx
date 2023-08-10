import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
      <h1>Üzügünüz Aradığınız Ürün BUlunamadı...</h1>
      <Link to="/">
        Anasayfa Git
      </Link>
    </div>
  )
}
