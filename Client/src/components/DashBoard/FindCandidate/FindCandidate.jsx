import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Scroller from '../Scroller/Scroller';
import CandidateFinder from '../CandidateFinder/CandidateFinder';
import styles from './FindCandidate.module.css';
import SideMenu from '../../SideMenu/SideMenu';

const FindCandidate = () => {
  const location = useLocation();
  const { jobDetails, candidates, keywords } = location.state || {};

  if (!location.state) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className={styles.container}>
      <SideMenu />
      <div className={styles.mainContent}>
        <div className={styles.scrollerSection}>
          <Scroller
            jobDetails={jobDetails}
            keywords={keywords}
            onRegenerate={() => console.log("Regenerate clicked")}
          />
        </div>
        <div className={styles.candidatesSection}>
          <CandidateFinder candidates={candidates || []} />
        </div>
      </div>
    </div>
  );
};

export default FindCandidate;