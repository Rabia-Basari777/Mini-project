import { useContext, useState } from "react"
import { CartContext } from "../Contexts/CartContextProvider"
import styles from "./Cart.module.css";
import { ItemCount } from "./ItemCount";
import { Scrollbars } from "react-custom-scrollbars";
import { AiOutlineDelete } from "react-icons/ai";

export const CartPage = () => {
  const { cart, handleDeleteItem } = useContext(CartContext);

  
  let totalPrice = cart.reduce((acc, e) => {
    return acc + e.price; 
  },0)

  const handleCheckout = () => {
    alert("Your order has been placed!!");
  }

  return (
    <div className={styles.cartPageMain}>
      <Scrollbars
        style={{
          width: "60%",
          height: "400px",
          border: "1px solid rgb(199, 195, 195)",
          marginLeft: "20px",
        }}
      >
        {cart.map((e, i) => {
          return (
            <div className={styles.CartMainDiv}>
              <img height="100px" width="100px" src={e.img} alt="" />
              <h5>{e.title}</h5>
              <ItemCount id={e.id} />
              <p>&#8377; {e.price}</p>
              <button
                onClick={() => {
                  handleDeleteItem(e.id);
                }}
                className={styles.removeBtn}
              >
                <AiOutlineDelete style={{ color: "red" }} />
              </button>
            </div>
          );
        })}
      </Scrollbars>
      <div className={styles.totalDiv}>
        <p>Tax: &#8377; 0 </p>
        <p>Net Price: {totalPrice}</p>
        <p>Delivery: Free</p>
        <p>Subtotal : &#8377; {totalPrice}</p>
        <button
          onClick={() => {
            handleCheckout();
          }}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}