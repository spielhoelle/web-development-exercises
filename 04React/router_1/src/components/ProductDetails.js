import React from 'react'

const ProductDetails = (props) => {
  return (
    <div>
        Product Details of product {props.match.params.id}
    </div>
  )
}

export default ProductDetails;
