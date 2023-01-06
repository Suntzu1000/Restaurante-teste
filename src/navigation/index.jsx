import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from '../components/Header'
import Home from '../Pages/Home/index'
import Cart from '../Pages/Cart/index'
import Login from '../Pages/Login/index'
import Menu from '../Pages/Menu/index'
import PaymentSuccess from '../Pages/PaymentSuccess/index'
import Register from '../Pages/Register'
import { useSelector } from 'react-redux'
import { cartProducts } from '../store/cart/cartSlice'

const Navigation = () => {
    const ProductsInCart = useSelector(cartProducts)
    return (
        <BrowserRouter>
            <Header cartCount={ProductsInCart ? ProductsInCart.length : 0}/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/menu' element={<Menu/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/payment-success' element={<PaymentSuccess/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation