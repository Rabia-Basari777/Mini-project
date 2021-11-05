import styles from "./Home.module.css";
import bg2 from "./images/bg2.jpg";
import man from "./images/man.jpg";
import woman from "./images/woman.jpg";
import unisex from "./images/unisex.jpg";
import jewellery from "./images/jewellery.webp";
import { Link } from "react-router-dom";

export const Home = () => {

    return (
      <div>
        <div className={styles.couponDiv}>
          <p>
            Get ahead-shop early! We'vegot great offers. Diwali Sale 27th
            Oct-7th Nov
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${bg2})`,
            height: "550px",
            paddingTop: "0px",
            paddingLeft: "30px",
          }}
        >
          <p className={styles.bgText}>Grab Your Favorites! </p>
          <p className={styles.code}>
            Use coupon code: <span>Masai30</span>
          </p>
        </div>
        <h2 style={{ marginLeft: "60px" }}>Shop by Category</h2>
        <div className={styles.categoryDiv}>
          <Link to="/men" style={{ textDecoration: "none", color: "black" }}>
            <div className={styles.shopCategory}>
              <img src={man} alt="" />
              <p>Shop Men</p>
            </div>
          </Link>
          <Link to="/women" style={{ textDecoration: "none", color: "black" }}>
            <div className={styles.shopCategory}>
              <img src={woman} alt="" />
              <p>Shop Women</p>
            </div>
          </Link>
          <Link to="/unisex" style={{ textDecoration: "none", color: "black" }}>
            <div className={styles.shopCategory}>
              <img src={unisex} alt="" />
              <p>Shop Unisex</p>
            </div>
          </Link>
          <Link
            to="/jewellery"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className={styles.shopCategory}>
              <img src={jewellery} alt="" />
              <p>Shop Jewellery</p>
            </div>
          </Link>
        </div>
      </div>
    );
}