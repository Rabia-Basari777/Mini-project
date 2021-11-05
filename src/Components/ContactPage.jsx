import styles from "./Contact.module.css";
import track from "./images/trackorder.png";
import returns from "./images/returns.jpg";
import cancel from "./images/cancel.png";

export const ContactPage = () => {
  return (
    <div className={styles.contactDiv}>
      <h3 style={{ textAlign: "center", paddingTop: "20px" }}>Need Help?</h3>
      <div>
        <div className={styles.trackDiv}>
          <div>
            <p style={{ fontWeight: "bold" }}>Track Order</p>
            <a href="#" style={{ color: "black" }}>
              Get Started
            </a>
          </div>
          <img height="150px" width="250px" src={track} alt="" />
        </div>
        <div className={styles.trackDiv}>
          <div>
            <p style={{ fontWeight: "bold" }}>Make A Return</p>
            <a href="#" style={{ color: "black" }}>
              Get Started
            </a>
          </div>
          <img height="150px" width="250px" src={returns} alt="" />
        </div>
        <div className={styles.trackDiv}>
          <div>
            <p style={{ fontWeight: "bold" }}>Cancel Order</p>
            <a href="#" style={{ color: "black" }}>
              Get Started
            </a>
          </div>
          <img height="150px" width="230px" style={{marginRight: "10px"}} src={cancel} alt="" />
        </div>
      </div>
    </div>
  );
};