import { FunctionComponent } from "react";
import Illustrations2 from "../components/Illustrations2";
import Illustrations1 from "../components/Illustrations1";
import Illustrations from "../components/Illustrations";
import Button from "../components/Button";
import Copyright from "../components/Copyright";
import styles from "./CITestHomepage.module.css";

const CITestHomepage: FunctionComponent = () => {
  return (
    <div className={styles.ciTestHomepage}>
      <header className={styles.bg} />
      <i className={styles.login}>Login</i>
      <button className={styles.button}>
        <i className={styles.signUp}>Sign Up</i>
      </button>
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo.svg" />
      <i className={styles.pricing}>Pricing</i>
      <i className={styles.resourcesCenter}>Resources Center</i>
      <i className={styles.about}>About</i>
      <i className={styles.contact}>Contact</i>
      <img className={styles.backgroundIcon} alt="" src="/background.svg" />
      <img className={styles.patternIcon} alt="" src="/pattern@2x.png" />
      <Illustrations2 />
      <div className={styles.illustrations}>
        <div className={styles.illustrationsChild} />
        <i className={styles.i}>800+</i>
        <i className={styles.dailyVisitor}>Daily Visitor</i>
      </div>
      <Illustrations1 />
      <div className={styles.illustrations1}>
        <div className={styles.totalSubscribers} />
        <img className={styles.slack1Icon} alt="" src="/079slack-1.svg" />
        <i className={styles.totalSubscribe}>Total Subscribe</i>
        <i className={styles.i1}>61.000</i>
      </div>
      <Illustrations />
      <div className={styles.illustrations2}>
        <div className={styles.totalSubscribersBox} />
        <i className={styles.daily}>Daily</i>
        <i className={styles.revenueGrowth}>Revenue Growth</i>
        <img
          className={styles.illustrationsItem}
          loading="lazy"
          alt=""
          src="/group-80.svg"
        />
      </div>
      <i className={styles.ratingOnGoogle}>
        Rating on google play and app store
      </i>
      <i className={styles.i2}>4.8</i>
      <i className={styles.over500Business}>
        Over 500 business powered with us
      </i>
      <i className={styles.i3}>350+</i>
      <i className={styles.weWillNot}>
        *we will not disseminate your email and so you avoid spam
      </i>
      <Button />
      <i className={styles.theFastestAnd}>
        The fastest and simple way to generate growing business solutions with
        our products
      </i>
      <h1 className={styles.weHelpAny}>
        We help any business to get analytics and sales marketing
      </h1>
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <Copyright />
      <i className={styles.tools}>Tools</i>
      <i className={styles.support}>Support</i>
      <i className={styles.blog}>Blog</i>
      <i className={styles.guidesAndResources}>Guides and resources</i>
      <i className={styles.resources}>Resources</i>
      <i className={styles.contact1}>Contact</i>
      <i className={styles.partners}>Partners</i>
      <i className={styles.termsConditions}>{`Terms & Conditions`}</i>
      <i className={styles.privacyPolicy}>Privacy Policy</i>
      <i className={styles.about1}>About</i>
      <i className={styles.company}>Company</i>
      <i className={styles.features}>Features</i>
      <i className={styles.benefits}>Benefits</i>
      <i className={styles.pricing1}>Pricing</i>
      <i className={styles.landingPages}>Landing pages</i>
      <i className={styles.product}>Product</i>
      <i className={styles.joinOurSlack}>Join our slack community</i>
      <img
        className={styles.iconslack}
        loading="lazy"
        alt=""
        src="/iconslack.svg"
      />
      <i className={styles.hellodhuhacreativecom}>hello@dhuhacreative.com</i>
      <img
        className={styles.iconSystem}
        loading="lazy"
        alt=""
        src="/icon-system.svg"
      />
      <i className={styles.theFastestAnd1}>
        The fastest and simple way to generate growing business solutions with
        our products
      </i>
      <img
        className={styles.logoIcon1}
        loading="lazy"
        alt=""
        src="/logo-1.svg"
      />
      <div className={styles.separator} />
      <section className={styles.bg1} />
      <div className={styles.pattern}>
        <div className={styles.patternChild} />
        <div className={styles.patternItem} />
        <div className={styles.toggleSwitch} />
        <div className={styles.patternInner} />
        <div className={styles.dataAggregator} />
        <div className={styles.rectangleDiv} />
        <div className={styles.patternChild1} />
        <div className={styles.patternChild2} />
        <div className={styles.shapeContainer} />
        <div className={styles.patternChild3} />
        <div className={styles.roundedShape} />
        <div className={styles.inputFieldSet} />
      </div>
      <Button buttonTop="1184px" />
      <i className={styles.theFastestAnd2}>
        The fastest and simple way to generate growing business solutions with
        our products
      </i>
      <h1 className={styles.readyToGet}>Ready to get started?</h1>
      <div className={styles.separto} />
    </div>
  );
};

export default CITestHomepage;
