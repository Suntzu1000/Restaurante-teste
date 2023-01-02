const moongose = require('moongose')
const Schema = moongose.Schema 

const CategorySchema = new Schema(
    {
        name: { type: String, required: true }
    }
)

const ProductionSchema = new Schema (
    {
        name: {type: String, required: true},
        adjective: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: String, required: true},
        category: {type: String, required: true}

    }
)

module.exports = moongose.model('Product', ProductionSchema)