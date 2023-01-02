const moongose = require('mongoose')

moongose.connect('mongodb+srv://db_restaurante:<password>@restaurante.mxub1fi.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDb Conectado!')).catch((err) => console.log(err))

const db = moongose.connect

module.exports = db