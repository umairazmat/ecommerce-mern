import React from 'react'
import Navbar from '../features/navabr/Navbar'
import ProductDetail from '../features/product/components/ProductDetail'

export default function ProductDetailPage() {
  return (
    <div>
        <Navbar>
            <ProductDetail></ProductDetail>
        </Navbar>        
    </div>
  )
}
