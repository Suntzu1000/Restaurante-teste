import {CardElement, useElements, useStripe, Elements } from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, cartProducts } from '../store/cart/cartSlice'
import { getAddress, clearEndereco } from '../store/userInfo/addressSlice'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from './elements/Button'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)


export const StripeWrapper = () => {
    return (
        <Elements stripe={stripePromise}>
           < PaymentForm/>
        </Elements>
    )
}
const PaymentForm = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const cart = useSelector(cartProducts)
    const endereco = useSelector(getAddress)
    const navigate = useNavigate()
    const elements = useElements() 
    const stripe = useStripe()

    const handleSubmit = async (e) => {
        e.preventDefault() 

        if(!stripe || !elements || !cart?.length || !endereco) {
            return
        }

        setLoading(true)
        try{
            const {error: backEndError, clientSecret} = await fetch ('http://localhost:8080/create-payment-intent',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    paymentMethodType: 'card',
                    orderItems: cart,
                    userId: '',
                    shippingAddress: endereco 
                })
            }).then(r => r.json())
            const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
                clientSecret, {
                    payment_method: {
                        card: elements.getElement(CardElement)
                    }
                }
            )

            if(backEndError || stripeError) {
                setError(backEndError || stripeError)
            } else if(paymentIntent.status === 'succeeded'){
                dispatch(clearEndereco())
                dispatch(clearCart())
                navigate('/payment-success')  
            }
        } catch (err){
            console.log(err);
        }

        setLoading(false)

    }
    return(
       <form  className='md:-2/3 mx-auto px-2 pt-1' id='payment-form' onSubmit={handleSubmit}>
            <label htmlFor="card-element" className='pt-4 text-2xl md:text-center'>Por favor insira detalhes do cartão</label>
            <div className='my-4'>
                <CardElement id='card-element'  />
            </div>
            <div className="flex justify-center p-2 ">
                <Button type='submit' disabled={loading} >
                    {
                        loading ?
                        'Carregando...' : 
                        'Pagar'
                    }
                </Button>
            </div>
       </form> 
    )
}

export default PaymentForm