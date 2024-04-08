import { FunctionComponent } from "react";
import styles from "./Illustrations2.module.css";

const Illustrations2: FunctionComponent = () => {
  return (
    <div className={styles.illustrations}>
      <div className={styles.illustrationsChild} />
      <div className={styles.illustrationsItem} />
      <img className={styles.illustrationsInner} alt="" />
      <i className={styles.instagram}>Instagram</i>
      <i className={styles.dataAggregator}>12,62</i>
      <img
        className={styles.instagramIcon}
        loading="lazy"
        alt=""
        src="/044instagram.svg"
      />
      <div className={styles.joiner} />
      <div className={styles.joiner1} />
      <div className={styles.rectangleDiv} />
    </div>
  );
};

export default Illustrations2;
