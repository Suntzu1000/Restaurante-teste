const moongose = require('mongoose')

moongose
    .connect('mongodb://localhost:27017/food-ordering', {useNewUrlParser: true})
    .catch(e => {
        console.log('Erro de conexão!', e.message)
})

const db = moongose.connect

module.exports = db