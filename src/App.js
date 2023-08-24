
import { useSelector } from 'react-redux';
import './App.css';
import Items from './components/Items'
import Navbar from './components/Navbar'
import ShoppingCart from './pages/ShoppingCart';
import { Routes, Route } from 'react-router-dom'

function App() {
  const theme = useSelector(state => state.navigationBar.themeButton)
  return (
    <div className = {`${theme ? 'bg-gray-500' : 'bg-white'}`}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Items/>} />
      </Routes>
      <Routes>
        <Route path='/shopping_cart' element={<ShoppingCart/>} />
      </Routes>
    </div>
  );
}

export default App;
