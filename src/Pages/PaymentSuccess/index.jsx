import React from 'react'
import { Alert } from '../../components/elements/Alert'
const PaymentSuccess = () => {
  return (
    <div className='max-w-lg max-auto p-4  '>
      <Alert variant='success' >
        Seu pagamento foi um sucesso!
      </Alert>
      
    </div>
  )
}

export default PaymentSuccess