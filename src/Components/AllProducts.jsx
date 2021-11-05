import data from "./data.json";
import { Link } from "react-router-dom";
import styles from "./AllProducts.module.css";

export const AllProducts = () => {
  console.log(data);

    
  return (
    <div>
      <h2>Products Page</h2>
      <div className={styles.allProductsDiv}>
        {data.map((e, i) => {
          return (
            <Link
              to={`/products/${e.id}`}
              key={e.id}
              className={styles.itemDiv}
            >
              <div>
                <img src={e.img} alt="" />
                <h4>{e.title}</h4>
                <p>{e.brand}</p>
                <p> &#8377; {e.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
