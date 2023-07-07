import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeToggle } from '../redux/navBar/navBarActions'

function Navbar() {
    const theme = useSelector(state => state.navigationBar.themeButton)
    const dispatch = useDispatch()

    const handleThemeBtn = () => {
        dispatch(themeToggle())
    }

    return (
        <div className='flex justify-between bg-green-300 font-bold font-mono py-5'>
            This is navigation bar
            <div onClick={handleThemeBtn} className='cursor-pointer bg-blue-700 p-1'>{theme ? 'Light☀️' : 'Dark🌙' }</div>
        </div>
    )
}

export default Navbar