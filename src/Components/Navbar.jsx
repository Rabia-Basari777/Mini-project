import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BsBag } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContextProvider";

export const Navbar = () => {
  const {cart, count} = useContext(CartContext)

    return (
      <div>
        <div className={styles.navbar}>
          <NavLink
            to="/"
            exact
            className={styles.link}
            activeStyle={{ fontWeight: "bold" }}
          >
            Home
          </NavLink>
          <NavLink
            to="allproducts"
            exact
            className={styles.link}
            activeStyle={{ fontWeight: "bold" }}
          >
            All Products
          </NavLink>
          <NavLink
            to="/men"
            exact
            className={styles.link}
            activeStyle={{ fontWeight: "bold" }}
          >
            Men
          </NavLink>
          <NavLink
            to="/women"
            exact
            className={styles.link}
            activeStyle={{ fontWeight: "bold" }}
          >
            Women
          </NavLink>
          <NavLink
            to="/unisex"
            exact
            className={styles.link}
            activeStyle={{ fontWeight: "bold" }}
          >
            Unisex
          </NavLink>
          <NavLink
            to="/jewellery"
            exact
            className={styles.link}
            activeStyle={{ fontWeight: "bold" }}
          >
            Jewellery
          </NavLink>
          <NavLink
            to="/faq"
            exact
            className={styles.link}
            activeStyle={{ fontWeight: "bold" }}
          >
            FAQ
          </NavLink>
          <NavLink
            to="contact"
            exact
            className={styles.link}
            activeStyle={{ fontWeight: "bold" }}
          >
            Contact Us
          </NavLink>
          <Link to="/cart">
            <BsBag style={{ height: "30px", width: "30px", color: "white" }} />
          </Link>
          <p className={styles.cartCount}>{cart.length}</p>
        </div>
      </div>
    );
}