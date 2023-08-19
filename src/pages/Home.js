import React from 'react'
import Navbar from '../features/navabr/Navbar'
import ProductList from '../features/product/components/ProductList'

export default function Home() {
  return (
    <div>
        <Navbar>
            <ProductList></ProductList>
        </Navbar>        
    </div>
  )
}
