import { FunctionComponent } from "react";
import styles from "./Illustrations.module.css";

const Illustrations: FunctionComponent = () => {
  return (
    <div className={styles.illustrations}>
      <div className={styles.salesGraph} />
      <i className={styles.salesStats}>Sales Stats</i>
      <div className={styles.illustrationsChild} />
      <div className={styles.dataAggregator} />
      <div className={styles.illustrationsItem} />
      <div className={styles.inputFilter} />
      <img
        className={styles.illustrationsInner}
        loading="lazy"
        alt=""
        src="/group-83.svg"
      />
    </div>
  );
};

export default Illustrations;
