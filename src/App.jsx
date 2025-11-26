import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import RootLayout from "./Layout/RootLayout.jsx"
import NotFound from "./Components/NotFound.jsx"
import Cart from "./Pages/Cart.jsx"
import { useState } from "react"

function App() {

  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  
  function clearCart () {
    setCart([]);
  }

  function addToCart(item) {
    setCart(prevCart => {
      const exists = prevCart.find(cartItem => cartItem.id === item.id);
      if (exists) {
        
        return prevCart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, qty: (cartItem.qty || 1) + 1 }
          : cartItem
        );
      }

      return [...prevCart, { ...item, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart(prod => prod.filter(p => p.id !== id));
  }

  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}> 
        <Route index element={ <Home /> } />
        <Route path="products" element={ <Products addToCart={addToCart} /> } />
        <Route path="cart" element={ <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} setCart={ setCart } />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
