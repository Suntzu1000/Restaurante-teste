const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

const env = require('dotenv').config({path: '../.env'})

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const productRouter = require('./routes/productRouter')

const Order = require('./models/orderModel')

var corOptions = {
    origin: 'http://localhost:3000'
}

const calculateOrderAmount = (orderItems) => {
    const initialValue = 0
    const itemsPrice = orderItems.reduce(
        (previousValue, currentValue) => 
        previousValue + currentValue.price * currentValue.amount, initialValue 
    );
    return itemsPrice * 100
}

app.use(cors(corOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors(corOptions))
app.use(
    express.json({
        verify: function (req, res, buf ){
            req.rawBody = buf.toString()
        }
    })
)

app.post( '/webhook', async (req, res) => {
    let data, eventType;

    if(process.env.STRIPE_WEBHOOK_SECRET) {
        let event
        let signature = req.headers['stripe-signature'];
        try {
            event = stripe.webhooks.constructEvent(
                req.rawBody,
                signature,
                process.env.STRIPE_WEBHOOK_SECRET
            )
        } catch (err) {
            console.log(`verificação de assinatura falhou!`);
            return res.sendStatus(400)
        }
        data = event.data
        eventType = event.type
    } else {
        data = req.body.data
        eventType = req.body.type
    }
    if(eventType === 'payment_intent.payment_succeeded'){
        console.log('Pagamento Capturado!');
    } else if (eventType === 'payment_intent.payment_failed'){
        console.log('Pagamento Falhou.');
    }
    res.sendStatus(200)

})

db.on('error', console.error.bind(console, 'MongoDB, erro de Conexão!:'))

app.get('/', (req, res) => {
    res.json({message: 'Bem vindo ao Restaurante BR'})
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
})
app.use('/api/', productRouter)

app.post('/create-payment-intent', async(req, res) =>{
    try{
        const {orderItems, shippingAddress, userId} = req.body

        const totalPrice = calculateOrderAmount(orderItems)

        const taxPrice = 0
        const shippingPrice = 0

        const order = new Order({
            orderItems,
            shippingAddress,
            paymentMethod: 'stripe',
            totalPrice,
            taxPrice,
            shippingPrice,
            user: ''
        })

        await order.save()

        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalPrice,
            currency: 'brl'
        })

        res.send({
            clientSecret: paymentIntent.client_secret
        })
    } catch(e) {
        res.status(400).json({
            error: {
                message: e.message 
            }
        })
    }
})