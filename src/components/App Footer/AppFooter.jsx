import { BsYoutube, BsVimeo } from "react-icons/bs";
import styles from "./AppFooter.module.css";

const AppFooter = () => {
  return (
    <div className={styles.container}>
      <div>
        <BsYoutube />
        <BsVimeo />
      </div>
      <div>Hello from New App</div>
      <div>copyright 2021</div>
    </div>
  );
};

export default AppFooter;
