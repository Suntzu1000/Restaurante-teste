const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/food-ordering', {useNewUrlParser: true}).catch(e => {
        console.error('Erro de conexão!', e.message)
})

const db = mongoose.connection

module.exports = db