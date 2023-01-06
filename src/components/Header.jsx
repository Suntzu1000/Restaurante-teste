import React from 'react'
import CartIcon from '../assets/icons/cart.svg'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo-editor.svg'

const Header = ({cartCount}) => {
    return (
        <>
            <nav id='header' className='bg-black text-white'>
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                    <div className="logo-wrapper pl-4 flex items-center">
                        <Link to='/' className='toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl ' >
                            <img src={Logo} alt="logo" className='w-40 h-40 object-cover' />
                        </Link>

                    </div>
                    <div className="nav-menu-wrapper flex items-center justify-between space-x-10" >
                        <Link to='/' className='text-xl'>Página Inicial</Link>
                        <Link to='#about' className='text-xl'>Sobre Nós</Link>
                    </div>
                    <div className='flex items-center justify-center space-x-4'>
                        <Link to='/cart' className='mr-4 relative '>
                            <img src={CartIcon} alt="cart" />
                            {cartCount > 0 ? <div className='rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1  ' >{cartCount}</div> : null}
                        </Link>
                        <Link to='/login'>Conecte-se</Link>
                        <Link to='/register'>Inscrever-se</Link>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Header