import { useState } from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import styles from "./HomeBody.module.css";

const Sonnet = (props) => {
  const [state] = useState({
    images: [
      "/images/tab/tab-1.jpg",
      "/images/tab/tab-2.jpg",
      "/images/tab/tab-3.jpg",
    ],
  });

  return (
    <div className={styles.tabContent}>
      <Row>
        <Col sm={4} md={3} xl={4}>
          <img className={"img-fluid"} src={state.images[props.imgId]} alt="" />
        </Col>
        <Col sm={8} md={9} xl={8}>
          <div className={styles.contentShare}>
            <p>{props.tabDesc}</p>
            <div className={styles.shareIcons}>
              <div>Share</div>
              <div className={styles.shareIconStyle}>
                <BsFacebook />
              </div>
              <div className={styles.shareIconStyle}>
                <BsTwitter />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Sonnet;
