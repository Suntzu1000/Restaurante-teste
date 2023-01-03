const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose
    .connect('mongodb://localhost:27017/food-ordering', {useNewUrlParser: true})
    .catch(e => {
        console.log('Erro de conexão!', e.message)
})

const db = mongoose.connect

module.exports = db