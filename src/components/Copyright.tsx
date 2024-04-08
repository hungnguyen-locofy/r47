import { FunctionComponent } from "react";
import styles from "./Copyright.module.css";

const Copyright: FunctionComponent = () => {
  return (
    <div className={styles.copyright}>
      <div className={styles.bg} />
      <img
        className={styles.akarIconslinkedinFill}
        loading="lazy"
        alt=""
        src="/akariconslinkedinfill.svg"
      />
      <img
        className={styles.akarIconstwitterFill}
        loading="lazy"
        alt=""
        src="/akariconstwitterfill.svg"
      />
      <img
        className={styles.bxbxlInstagramAltIcon}
        loading="lazy"
        alt=""
        src="/bxbxlinstagramalt.svg"
      />
      <i className={styles.growthlyAllRight}>
        © 2020 Growthly. All Right Reserved
      </i>
    </div>
  );
};

export default Copyright;
