import styles from "./Footer.module.css";
import { BsInstagram, BsFacebook, BsPinterest, } from "react-icons/bs";
import { TiSocialTwitterCircular } from "react-icons/ti";

export const Footer = () => {

    return (
      <div className={styles.footerMain}>
        <div>
          <h3>Customer Services</h3>
          <p>Contact Us</p>
          <p>Shipping</p>
          <p>Gift Cards</p>
        </div>
        <div>
          <h3>About Us</h3>
          <p>Careers</p>
          <p>Investor Relations</p>
          <p>Press Releases</p>
        </div>
        <div>
          <h3>Stores & Services</h3>
          <p>Find a Store</p>
          <p>Free Style Help</p>
          <p>Trunk Club</p>
        </div>
        <div className={styles.footerIcons}>
          <BsInstagram style={{ padding: "10px" }} />
          <BsFacebook style={{ padding: "10px" }} />
          <BsPinterest style={{ padding: "10px" }} />
          <TiSocialTwitterCircular style={{ padding: "10px" }} />
        </div>
      </div>
    );
}