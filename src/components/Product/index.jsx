import React from 'react'
import {
  ContainerProduct,
  Img,
  Picture,
  Text,
  Title
} from './style'

const Product = ({
  item
}) => {

  return (
    <ContainerProduct>
      <Title>{item.title}</Title>
      <Picture>
        <Img
          src={item.src}
          alt={item.title}
        />
      </Picture>
      <Text>Price:{item.price}</Text>
      <Text>Stock:{item.stock}</Text>
      <button>Add Product</button>
    </ContainerProduct>
  )
}

export default Product