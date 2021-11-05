import { useContext } from "react";
import { useParams } from "react-router"
import { CartContext } from "../Contexts/CartContextProvider";
import data from "./data.json";
import styles from "./ProductPage.module.css";


export const ProductPage = () => {
    console.log(data);
    const { id } = useParams();
    console.log(id);
    const {handleAddCart}  = useContext(CartContext)

    const product = data.filter((e) => 
        e.id == id 
    )
    console.log(product);
    return (
      <div
        className={styles.productMainDiv}
      >
        <img height="300px" width="150px" src={product[0].img} alt="" />
        <div>
          <div>
            <h1>{product[0].title}</h1>
            <h5>{product[0].brand}</h5>
            <p>
              Rating: {product[0].ratings} | {product[0].reviews} answered
              questions
            </p>
          </div>
            <p>&#8377; {product[0].price}</p>
            <p>{product[0].description}</p>
          <button
            onClick={() => {
              handleAddCart(id);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
}