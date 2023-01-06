import React from 'react'
import { Tabs } from '../../components/Tabs'
import Button from '../../components/elements/Button'
import { useSelector } from 'react-redux'
import { selectAllProducts } from '../../store/menu/productsSlice'
import useTabSwitch from '../../hooks/useTabSwitch'
import {ReactComponent as ArrowRightSvg} from '../../assets/icons/arrow-right-long-svgrepo-com.svg'
const Cart = () => {
  const cart = useSelector(selectAllProducts)
  const tabs = ['Resumo', 'Delivery', 'Pagamento']
  const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Resumo')

  if(!cart || cart.products.length === 0  ){
    return (
      <div className="bg-white h-full text-black flex  justify-center p-4">
          <h1>Seu carrinho está vazio!</h1>
      </div>
    )
  }
  return (
    <>
    Carrinho
    </>
  )
}

export default Cart