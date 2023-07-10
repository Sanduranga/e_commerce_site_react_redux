import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeToggle } from '../redux/navBar/navBarActions'

function Navbar() {
    const theme = useSelector(state => state.navigationBar.themeButton)
    const totalCartPrice = useSelector(state => state.items.cartPrice)

    const dispatch = useDispatch()

    const handleThemeBtn = () => {
        dispatch(themeToggle())
    }

    return (
        <div className='flex justify-around items-center bg-green-700 font-bold font-mono py-5'>
            This is navigation bar
            <div onClick={handleThemeBtn} className='cursor-pointer bg-blue-500 p-1 rounded-md'>{theme ? 'Light☀️' : 'Dark🌙' }</div>
            <div className='bg-blue-100 p-1 rounded-md'>
                <div>Your Cart</div>
                <div>Rs.{totalCartPrice}</div>
            </div>
        </div>
    )
}

export default Navbar