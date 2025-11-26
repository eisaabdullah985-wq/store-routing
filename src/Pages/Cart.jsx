import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Cart(
    { cart = [], removeFromCart = () => {}, clearCart = () => {}, setCart = () => {}, }
) {
    
    const [orderPlaced, setOrderPlaced] = useState(false);
    const navigate = useNavigate();

    function updateQty(id, newQty) {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, qty: Math.max(1, newQty) } : item
            )
        );
    }

    function handleCheckout() {
        setOrderPlaced(true);
        clearCart();
    }

    if(orderPlaced) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="relative w-[50%] h-[30%] flex flex-col items-center justify-center rounded-lg bg-green-400 shadow">
                    <p className="text-4xl text-white font-semibold">Order Placed Successfully!</p>
                    <p className="text-3xl mt-2 text-white font-semibold">Thank You....</p>
                    <button onClick={() => navigate('/')} className="rounded absolute top-0 right-0 bg-red-500 px-2 cursor-pointer hover:bg-red-400">x</button>
                </div>
            </div>
        )
    } 

    const total = cart.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 1), 0);

    if (!cart || cart.length === 0) {
        return (
        <div className="min-h-screen flex items-center justify-center">
            Your Cart is Empty
        </div>
        )
    }

    return (
    <div className="min-h-screen p-6  bg-gray-100">
        <div className="flex items-center justify-between">
            <h2 className="text-2xl mb-4">Your Cart</h2>
            <button onClick={handleCheckout} className="text-xl p-2 bg-green-500 rounded-lg text-white mb-4 cursor-pointer hover:bg-green-400">
                Checkout : ${total.toFixed(2)}
            </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10">
            {cart.map(item => {
                const qty = item.qty || 1;
                return(
                <div key={item.id} className="shadow-xl bg-white rounded-lg w-full flex flex-col justify-between">
                    <div className="flex justify-center items-center p-4">
                        <img className="h-[150px]" src ={item.url} />
                    </div>
                    <h2 className="p-4 font-semibold text-gray-700">{item.title}</h2>
                    <p className="text-gray-500 px-3 line-clamp-2">{item.description}</p>
                    <div className="p-4 flex justify-between">
                        <p className="font-bold px-4 text-green-400 text-xl">${item.price.toFixed(2)}</p>
                        <div className="flex gap-x-2 items-center justify-center">
                            <p>Qty</p>
                            <button onClick={() => updateQty(item.id, qty - 1)}
                                className="bg-gray-200 px-2 text-center cursor-pointer"
                            >
                                -
                            </button>
                            <p>{item.qty}</p>
                            <button onClick={() => updateQty(item.id, qty + 1)}
                                className="bg-gray-200 px-2 text-center cursor-pointer"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} 
                        className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-400 w-[80px] mx-auto my-2">
                            Remove
                    </button>
                </div>  
                )             
            })}
        </div>
    </div>
    )
}