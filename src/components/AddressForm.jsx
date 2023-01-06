import React from 'react'
import {useForm} from 'react-hook-form'
import Button from './elements/Button'
import {ReactComponent as ArrowRightSvg} from '../assets/icons/arrow-right-long-svgrepo-com.svg'
import { useDispatch } from 'react-redux'
import { setEndereco } from '../store/userInfo/addressSlice'

export const AddressForm = ({onTabSwitch}) => {
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(setEndereco(data))
        onTabSwitch('Pagamento')
    }

  return (
    <form className='md:w-2/3 md:mx-auto px-3 pt-1' onSubmit={handleSubmit(onSubmit)}>
        <h3 className='pt-4 text-2xl md:text-center'>Endereço para Delivery</h3>
        <div className='mb-4'>
            <label htmlFor="endereço" className='block mb-2 text-sm font-bold text-gray-700' >Endereço</label>
            <input 
            {...register('endereco')}
            className='w-full px-3 mb-3 text-sm leading-10 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
            id='endereco'
            type="text"
            placeholder='Endereço'
             /> 
        </div>
        <div className="mb-4 md-flex md:justify-between">
            <div className="mb-4 md:mr-4 md:mb-0 flex-1 ">
                <label htmlFor="cidade" className='block mb-2 text-sm font-bold text-gray-700'>Cidade</label>
                <input 
                {...register('cidade')}
                className='w-full px-3 mb-3 text-sm leading-10 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='cidade'
                type="text"
                placeholder='Cidade'
                /> 
            </div>
             
            <div className="mb-4 md:mr-4 md:mb-0 flex-1 ">
                <label htmlFor="estado" className='block mb-2 text-sm font-bold text-gray-700'>Estado</label>
                <input 
                {...register('estado')}
                className='w-full px-3 mb-3 text-sm leading-10 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='estado'
                type="text"
                placeholder='Estado'
                /> 
            </div>
            </div>
            <div className="mb-4 md-flex md:justify-between">
            <div className="mb-4 md:mr-4 md:mb-0 flex-1 ">
                <label htmlFor="pais" className='block mb-2 text-sm font-bold text-gray-700'>País</label>
                <input 
                {...register('pais')}
                className='w-full px-3 mb-3 text-sm leading-10 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='pais'
                type="text"
                placeholder='País'
                /> 
            </div>
             
            <div className="mb-4 md:mr-4 md:mb-0 flex-1 ">
                <label htmlFor="cep" className='block mb-2 text-sm font-bold text-gray-700'>CEP</label>
                <input 
                {...register('cep')}
                className='w-full px-3 mb-3 text-sm leading-10 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='cep'
                type="text"
                placeholder='CEP'
                /> 
            </div>
        </div>
        <div className="flex justify-end p-2 ">
            <Button variant='dark' className='flex items-center'type='submit'><span className='mr-1' >Próximo</span> <ArrowRightSvg/></Button>
        </div>
    </form >
  )
}
