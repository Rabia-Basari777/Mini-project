import { Link } from "react-router-dom";
import data from "./data.json";
import styles from "./MenPage.module.css";

export const MenPage = () => {
    const mens = data.filter((e) => e.category === "Men's");

  console.log(mens);
    return (
      <div>
        <div className={styles.mensDiv}>
          {mens.map((e, i) => {
            return (
              <Link
                to={`/products/${e.id}`}
                key={e.id}
                className={styles.menItemDiv}
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
