import { createContext, useState } from "react";
import data from "../Components/data.json";

export const CartContext = createContext({
    cart: [],
    handleAddCart: () => { },
    handleDeleteItem: ()=>{}
})

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

    const handleAddCart = (id) => {
      setCart([...data.filter((e) => e.id == id), ...cart]);
      // setCount(pre=>prev+cart.length);
    }

    const handleDeleteItem = (id) => {
        setCart(cart.filter((e) => e.id !== id))
    }

  const handleCount = (c) => {
    setCount(cart.length + c);
  }
  if (count < cart.length)
    setCount(count + 1);
    console.log("cart:", cart);

    return (
      <CartContext.Provider value={{ cart, handleAddCart, handleDeleteItem, handleCount, count }}>
        {children}
      </CartContext.Provider>
    );
}