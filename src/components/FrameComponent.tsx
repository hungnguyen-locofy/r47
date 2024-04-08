import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.iconLibrary}>
      <div className={styles.gridSystem}>
        <div className={styles.dataAggregator}>
          <div className={styles.inputFilter}>
            <div className={styles.logoWrapper}>
              <img className={styles.logoIcon} alt="" src="/logo-1.svg" />
            </div>
            <div className={styles.branchSplitter}>
              <div className={styles.leafCollector}>
                <i className={styles.theFastestAnd}>
                  The fastest and simple way to generate growing business
                  solutions with our products
                </i>
              </div>
              <div className={styles.sequenceProcessor}>
                <div className={styles.subtreeSelector}>
                  <div className={styles.dataSplicer}>
                    <img
                      className={styles.iconSystem}
                      loading="lazy"
                      alt=""
                      src="/icon-system.svg"
                    />
                  </div>
                  <i className={styles.hellodhuhacreativecom}>
                    hello@dhuhacreative.com
                  </i>
                </div>
                <div className={styles.rootFilter}>
                  <div className={styles.keySplitter}>
                    <div className={styles.valueSorter}>
                      <img
                        className={styles.iconslack}
                        loading="lazy"
                        alt=""
                        src="/iconslack.svg"
                      />
                    </div>
                    <i className={styles.joinOurSlack}>
                      Join our slack community
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.forkJoinMerge}>
          <div className={styles.dataDivider}>
            <i className={styles.product}>Product</i>
            <div className={styles.treeSifter}>
              <i className={styles.landingPages}>Landing pages</i>
              <i className={styles.pricing}>Pricing</i>
              <i className={styles.benefits}>Benefits</i>
              <i className={styles.features}>Features</i>
            </div>
          </div>
          <div className={styles.conditionSplitter}>
            <div className={styles.valueAdder}>
              <i className={styles.company}>Company</i>
              <i className={styles.about}>About</i>
              <i className={styles.privacyPolicy}>Privacy Policy</i>
              <i className={styles.termsConditions}>{`Terms & Conditions`}</i>
              <i className={styles.partners}>Partners</i>
              <i className={styles.contact}>Contact</i>
            </div>
            <div className={styles.resultMerger}>
              <i className={styles.resources}>Resources</i>
              <i className={styles.guidesAndResources}>Guides and resources</i>
              <i className={styles.blog}>Blog</i>
              <i className={styles.tools}>Tools</i>
              <i className={styles.support}>Support</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
