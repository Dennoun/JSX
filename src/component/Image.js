import React from 'react'
import product from '../product'

function Image() {
  return (
    <div>
        <img style={{width:'500px'}} src={product.image} alt="product" />
    </div>
  )
}

export default Image