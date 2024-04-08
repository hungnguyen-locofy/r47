import { FunctionComponent } from "react";
import styles from "./Illustrations1.module.css";

const Illustrations1: FunctionComponent = () => {
  return (
    <div className={styles.illustrations}>
      <div className={styles.dailyDataBox} />
      <div className={styles.illustrationsChild} />
      <div className={styles.illustrationsItem} />
      <div className={styles.illustrationsInner} />
      <div className={styles.lineDiv} />
      <div className={styles.illustrationsChild1} />
      <i className={styles.k}>60k</i>
      <i className={styles.k1}>30k</i>
      <i className={styles.k2}>10k</i>
      <i className={styles.i}>0</i>
      <i className={styles.k3}>90k</i>
      <i className={styles.mar}>Mar</i>
      <i className={styles.apr}>Apr</i>
      <i className={styles.may}>May</i>
      <i className={styles.jun}>Jun</i>
      <i className={styles.jul}>Jul</i>
      <i className={styles.dataAnalytics}>Data Analytics</i>
      <img className={styles.groupIcon} alt="" src="/group-82.svg" />
      <img
        className={styles.polygonIcon}
        loading="lazy"
        alt=""
        src="/polygon-2.svg"
      />
      <div className={styles.salesStatsBox} />
      <i className={styles.k4}>48k</i>
      <i className={styles.visitor}>Visitor</i>
      <img
        className={styles.illustrationsChild2}
        loading="lazy"
        alt=""
        src="/group-87.svg"
      />
      <div className={styles.sequenceFlow} />
    </div>
  );
};

export default Illustrations1;
