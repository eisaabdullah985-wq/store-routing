import React, { useState , useEffect } from "react"
import ProductCard from "../Components/ProductCard"

export default function Products( { addToCart } ) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(data=>{
                setProducts(data)
                setLoading(false)
                }
            )
    }, [])


    if(loading){
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <p className="mt-4 text-4xl text-gray-600">Loading products...</p>
                </div>
            </div>
        )
    }
    return (
        <>
        <div className="grid grid-cols-1 bg-gray-100 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10 min-h-screen">
            {products.map((el) => 
                <ProductCard key={el.id}
                    title = {el.title}
                    description = {el.description}
                    url = {el.image}
                    price = {el.price}
                    onAdd={() =>
                        addToCart({
                            id: el.id,
                            title: el.title,
                            price: el.price,
                            url: el.image,
                            description: el.description,
                        })
                    }
                />
            )}
        </div>

        </>
    )
}