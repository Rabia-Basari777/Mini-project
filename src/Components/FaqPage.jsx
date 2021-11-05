import styles from "./Contact.module.css";

export const FaqPage = () => {

    return (
      <div
        style={{
          width: "90%",
          height: "250px",
          padding: "30px",
          marginLeft: "3%",
          marginTop: "40px",
          lineHeight: "0.8cm", 
          backgroundColor: "rgb(246,246,246)",
        }}
      >
        <h4>Frequently Asked Questions</h4>
        <p>How can I track my order?</p>
        <ul>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </li>
          <li>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </li>
          <li>
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia
          </li>
        </ul>
      </div>
    );
}