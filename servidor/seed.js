const {faker} = require('@faker-js/faker')
const MongoClient = require('mongodb').MongoClient

async function main() {
    const uri = 'mongodb://localhost://27017'
    const client = new MongoClient(uri)

    try{
        await client.connect()

        const productsCollection = client.db('food-ordering').collection('products')
        const categoriesCollection = client.db('food-ordering').collection('categories')

        productsCollection.drop()
        let categories = ['Breakfast', 'Lunch', 'Dinner', 'Drinks'].map((category) => {return {name: category}})
        await categoriesCollection.insertMany(categories)

        let imageUrls = {
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png',
           
        }

        let products = []
        for (let i = 0; i < 10; i+= 1){
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                description: faker.commerce.description,
                price: faker.commerce.price()
            } 
        }
    }
}