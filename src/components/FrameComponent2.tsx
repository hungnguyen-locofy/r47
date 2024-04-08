import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className={styles.patternParent}>
      <img className={styles.patternIcon} alt="" src="/pattern@2x.png" />
      <div className={styles.illustrations}>
        <div className={styles.illustrationsChild} />
        <div className={styles.instagramParent}>
          <i className={styles.instagram}>Instagram</i>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" />
            <img
              className={styles.instagramIcon}
              loading="lazy"
              alt=""
              src="/044instagram.svg"
            />
          </div>
        </div>
        <i className={styles.dataAggregator}>12,62</i>
        <div className={styles.connectionHandler}>
          <div className={styles.connectionHandlerChild} />
        </div>
        <div className={styles.splitterWrapper}>
          <div className={styles.splitter}>
            <div className={styles.joiner} />
            <div className={styles.joiner1} />
          </div>
        </div>
        <div className={styles.illustrationsItem} />
      </div>
      <div className={styles.illustrationsWrapper}>
        <div className={styles.illustrations1}>
          <div className={styles.illustrationsInner} />
          <div className={styles.inputProcessor}>
            <i className={styles.dataAnalytics}>Data Analytics</i>
            <div className={styles.errorHandler}>
              <div className={styles.decisionMaker}>
                <i className={styles.k}>90k</i>
                <i className={styles.k1}>60k</i>
                <i className={styles.k2}>30k</i>
                <i className={styles.k3}>10k</i>
                <i className={styles.i}>0</i>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.lineParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.lineGroup}>
                    <div className={styles.frameInner} />
                    <div className={styles.rectangleParent}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.dataAggregator1}>
                        <i className={styles.k4}>48k</i>
                        <i className={styles.visitor}>Visitor</i>
                      </div>
                      <div className={styles.frameWrapper}>
                        <img
                          className={styles.groupIcon}
                          loading="lazy"
                          alt=""
                          src="/group-87.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.outputMerger}>
                      <img
                        className={styles.outputMergerChild}
                        alt=""
                        src="/group-82.svg"
                      />
                      <div className={styles.vectorGroup}>
                        <img
                          className={styles.polygonIcon}
                          loading="lazy"
                          alt=""
                          src="/polygon-2.svg"
                        />
                        <div className={styles.sequenceFlow} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.lineDiv} />
                <div className={styles.frameChild1} />
                <div className={styles.frameChild2} />
              </div>
            </div>
          </div>
          <div className={styles.parallelProcess}>
            <div className={styles.decisionMatrix}>
              <i className={styles.mar}>Mar</i>
              <i className={styles.apr}>Apr</i>
              <i className={styles.may}>May</i>
              <i className={styles.jun}>Jun</i>
              <i className={styles.jul}>Jul</i>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.illustrations2}>
        <div className={styles.illustrationsChild1} />
        <div className={styles.outlierDetector}>
          <div className={styles.dataVisualizer}>
            <i className={styles.salesStats}>Sales Stats</i>
            <div className={styles.dataSorter}>
              <img
                className={styles.dataSorterChild}
                loading="lazy"
                alt=""
                src="/group-83.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.dataIntegrator}>
          <div className={styles.dataValidator}>
            <div className={styles.dataAggregator2} />
            <div className={styles.inputFilter} />
          </div>
          <div className={styles.dataValidator1}>
            <div className={styles.dataValidatorChild} />
            <div className={styles.dataValidatorItem} />
          </div>
        </div>
      </div>
      <div className={styles.outputCombiner}>
        <div className={styles.illustrationsContainer}>
          <div className={styles.illustrations3}>
            <div className={styles.illustrationsChild2} />
            <img className={styles.slack1Icon} alt="" src="/079slack-1.svg" />
            <div className={styles.totalSubscribeParent}>
              <i className={styles.totalSubscribe}>Total Subscribe</i>
              <i className={styles.i1}>61.000</i>
            </div>
          </div>
        </div>
        <div className={styles.illustrationsParent}>
          <div className={styles.illustrations4}>
            <div className={styles.illustrationsChild3} />
            <i className={styles.dailyVisitor}>Daily Visitor</i>
            <i className={styles.i2}>800+</i>
          </div>
          <div className={styles.illustrationsFrame}>
            <div className={styles.illustrations5}>
              <div className={styles.illustrationsChild4} />
              <div className={styles.revenueGrowthParent}>
                <i className={styles.revenueGrowth}>Revenue Growth</i>
                <div className={styles.dailyWrapper}>
                  <i className={styles.daily}>Daily</i>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameChild3}
                  loading="lazy"
                  alt=""
                  src="/group-80.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
