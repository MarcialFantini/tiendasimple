import React from 'react'
import { ContainerHomeStore } from './style'

const HomeStore = (props) => {
    return (
        <ContainerHomeStore>
            {props.children}
        </ContainerHomeStore>
    )
}

export default HomeStore