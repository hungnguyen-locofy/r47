import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.bg} />
      <div className={styles.tableParent}>
        <div className={styles.table}>
          <div className={styles.readyToGetStartedParent}>
            <h1 className={styles.readyToGet}>Ready to get started?</h1>
            <i className={styles.theFastestAnd}>
              The fastest and simple way to generate growing business solutions
              with our products
            </i>
          </div>
          <Button propAlignSelf="unset" propWidth="480px" />
        </div>
        <div className={styles.toolTip}>
          <div className={styles.pattern}>
            <div className={styles.patternChild} />
            <div className={styles.patternItem} />
            <div className={styles.dataAggregator} />
            <div className={styles.shapeContainer} />
            <div className={styles.alignmentParentParent}>
              <div className={styles.alignmentParent}>
                <div className={styles.alignmentParentChild} />
                <div className={styles.borderBox}>
                  <div className={styles.imageHolder}>
                    <div className={styles.roundedShape} />
                    <div className={styles.imageHolderChild} />
                  </div>
                  <div className={styles.inputFieldSet} />
                </div>
              </div>
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownMenuInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.progressBar1}>
                  <div className={styles.sliderControl}>
                    <div className={styles.toggleSwitch} />
                  </div>
                  <div className={styles.progressBarChild} />
                </div>
                <div className={styles.dropdownMenuChild} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.separto} />
    </div>
  );
};

export default FrameComponent1;
