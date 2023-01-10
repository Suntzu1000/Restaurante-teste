import React from 'react'
import { Tabs } from '../../components/Tabs'
import Button from '../../components/elements/Button'
import { useSelector } from 'react-redux'
import { cartProducts } from '../../store/cart/cartSlice'
import useTabSwitch from '../../hooks/useTabSwitch'
import {ReactComponent as ArrowRightSvg} from '../../assets/icons/arrow-right-long-svgrepo-com.svg'
import { AddressForm } from '../../components/AddressForm'
import { ProductsSummary } from '../../components/ProductsSummary'
import  {StripeWrapper} from '../../components/PaymentForm'
 

const Cart = () => {
  const cart = useSelector(cartProducts)
  const tabs = ['Resumo', 'Delivery', 'Pagamento']
  const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Resumo')
  console.log(cart);

  if(!cart || cart.length === 0  ){
    return (
      <div className="bg-white h-full text-black flex  justify-center p-4">
          <h1>Seu carrinho está vazio!</h1>
      </div>
    )
  }
  return (
    <div className="bg-white h-screen text-black mx-automt-2 border-gray-200 p-4 md:m-2/3 
    rounded lg shadow-md sm:p-6 lg:p-8 ">
      <Tabs list={tabs } onTabSwitch={handleTabSwitch} active={currentTab}/>
      <div className={` tabs ${currentTab !== 'Resumo' ? 'hidden' : '' } `}>
          <ProductsSummary/>
          <div className="flex justify-end p-2 ">
            <Button variant='dark' className='flex items-center' onClick={() => handleTabSwitch('Delivery')}><span className='mr-1' >Próximo</span> <ArrowRightSvg/></Button>
        </div>
      </div>
      <div className={` tabs ${currentTab !== 'Delivery' ? 'hidden' : '' } `}>
        <AddressForm onTabSwitch={handleTabSwitch}/>
      </div>
      <div className={` tabs ${currentTab !== 'Pagamento' ? 'hidden' : '' } `}>
        <StripeWrapper/>
      </div>
    </div>
  )
}

export default Cart