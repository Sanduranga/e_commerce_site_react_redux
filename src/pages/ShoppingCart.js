
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dropCart, totalCartPriceMinus } from '../redux/items/itemActions'

function ShoppingCart() {

    const dispatch = useDispatch()

    const cartList = useSelector(state => state.items.cartList)

    const cartListMapping = cartList.map((list,index)=>{
        const listRow = `${list.id} - ${list.name}    = ${list.price}`
        return (
            <div key={index} className='flex justify-center items-center'>
                <img className='mr-3 w-1/12 h-1/6' src={list.image} alt='img'></img>
                {listRow}
                <button className='mx-4' onClick={() => {
                    dispatch(totalCartPriceMinus(list.price))
                    
                    const newCart = [...cartList]
                    newCart.splice(index,1)
                    dispatch(dropCart(newCart))
                }}>❎</button>
            </div>
        )
    })

    return (
        <div>
            {cartListMapping}
        </div>
    )
}




export default ShoppingCart