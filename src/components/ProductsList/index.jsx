import React from 'react'

import { initialStore } from '../../initialProducts'
import Product from '../Product'
import { MosaicoGrid } from './style'

const ProductList = () => {

    const list = initialStore.map(item => {
        return (<Product item={item} >

        </Product>)
    })
    console.log(list)
    return (
        <MosaicoGrid>{list}</MosaicoGrid>
    )
}

export default ProductList