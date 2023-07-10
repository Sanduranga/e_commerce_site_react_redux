import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchThunk, totalCartPricePlus,addCart } from '../redux/items/itemActions'

export default function Items() {

    const fetchdata = useSelector(state => state.items.itemList)
    const dispatch = useDispatch()

    const[addItems, setAddItems] = useState([])

    useEffect(() => {
        dispatch(fetchThunk())
        console.log('use Effect thunk calling')
    }, [])

    useEffect(() => {
        dispatch(addCart(addItems))
        
        console.log('use Effect buyItem calling')
    }, [addItems])

    const handleAddBtn = (id,price,discount,name,image) => {
        setAddItems(preItems =>  [
            ...preItems,{
            id: id,
            price: price - discount,
            name: name,
            image: image,
        }])
        dispatch(totalCartPricePlus(price-discount))
    }
    
    const mapping =  fetchdata.map((item,index) => {
            return (
                <div key={index} className='flex w-1/4 flex-col bg-white-200 px-3 py-3 shadow-xl'>
                    <img className='my-3' src={item.download_url} alt='item1Img'></img>
                    <h3 className='font-mono font-bold'>Rs.{item.width}</h3>
                    <h3 className='font-mono font-bold'>Discount Rs.{item.height}</h3>
                    <h4 className='text-sm'>{item.author}</h4>
                    <div className='text-center mt-2'>
                        <button onClick={()=>handleAddBtn(item.id,item.width,item.height,item.author,item.download_url)} className='bg-blue-300 px-2 mr-2 font-mono font-bold rounded shadow-md'>Add to Cart</button>
                    </div>                   
                </div>
            )
        }
    )
    
    return (
        <div className='flex flex-wrap flex-row gap-4 m-5'>
           {mapping}
        </div>
    )
}
