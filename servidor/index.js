const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')


const app = express()
const productRouter = require('./routes/productRouter')

var corOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

/*db.on('error', console.error.bind(console, 'MongoDB, erro de Conexão!:'))*/

app.get('/', (req, res) => {
    res.json({message: 'Bem vindo ao Restaurante BR'})
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
})
app.use('/api/', productRouter)