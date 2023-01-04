import React, {useState, useEffect} from 'react'

export const ProductPreview = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/products-by-categories')
        .then(response => response.json)
        .then(data => setProducts(data?.data))
        .catch(e => console.log(e))
    }, [])
  return (
    <div className='container mx-auto pb-4 w-2/3 text-white ' >
        <h2>Produtos</h2>
    </div>
  )
}
