import data from "./data.json";
import { Link } from "react-router-dom";
import styles from "./MenPage.module.css";

export const JewelleryPage = () => {
  const jewellery = data.filter((e) => e.category === "Jewellery");
  return (
    <div className={styles.mensDiv}>
      {jewellery.map((e, i) => {
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
  );
};
