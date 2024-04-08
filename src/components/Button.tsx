import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  /** Style props */
  buttonTop?: CSSProperties["top"];
};

const Button: FunctionComponent<ButtonType> = ({ buttonTop }) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      top: buttonTop,
    };
  }, [buttonTop]);

  return (
    <div className={styles.button} style={buttonStyle}>
      <div className={styles.box}>
        <i className={styles.yourBusinessEmail}>Your business email</i>
      </div>
      <button className={styles.button1}>
        <i className={styles.getStarted}>Get Started</i>
      </button>
    </div>
  );
};

export default Button;
