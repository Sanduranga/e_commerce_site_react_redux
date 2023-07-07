
import React from 'react'
import { useSelector } from 'react-redux'

function ShoppingCart() {

    const cartList = useSelector(state => state.items.cartList)

    const cartListMapping = cartList.map((list,index)=>{
        const listRow = `${list.id} - ${list.name}    = ${list.price}`
        return (
            <div className='flex justify-center'>
                <img className='mr-3 w-1/12 h-1/6' src={list.image} alt='img'></img>
                {listRow}
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