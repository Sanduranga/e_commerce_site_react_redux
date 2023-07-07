
import { useSelector } from 'react-redux';
import './App.css';
import Items from './components/Items'
import Navbar from './components/Navbar'
import ShoppingCart from './pages/ShoppingCart';

function App() {
  const theme = useSelector(state => state.navigationBar.themeButton)
  return (
    <div className = {`${theme ? 'bg-gray-500' : 'bg-white'}`}>
      <Navbar/>
      <Items/>
      <ShoppingCart/>
    </div>
  );
}

export default App;
