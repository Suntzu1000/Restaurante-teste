import React from 'react'

const Header = () => {
  return (
    <>
        <nav id='header' className='bg-black text-white'>
            <div className="w-full container mx-auto flex flex-wrap items-center justify-content-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <img src={'/'} alt="logo" />
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10" >
                    <div>Home</div>
                    <div>Sobre Nós</div>
                </div>
                <div className='flex items-center justify-center space-x-4'>
                    <div>Carrinho</div>
                    <div>Conecte-se</div>
                    <div>Inscrever-se</div>
                </div>
            </div>
        </nav>
    </>

  )
}

export default Header