import React from "react";
import styles from "../Common/CommonCandidate.module.css";
import Logo from "./logo";

const CLeftPortion = () => {
  return (
    <div className={styles.signupLeft}>
      <div className={styles.leftContent}>
        <Logo />
        <div>
          <h1>Your Next Career Move</h1>
          <h1>Start Here</h1>
        </div>
      </div>
    </div>
  );
};

export default CLeftPortion;