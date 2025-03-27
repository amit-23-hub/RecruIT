import React, { useState } from 'react';
import { FaExpand, FaCompress } from 'react-icons/fa';
import styles from './Scroller.module.css';

const Scroller = ({ jobDetails, keywords, onFindCandidates, onRegenerate }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  if (!jobDetails) {
    return <div className={styles.WholeContainer}>No job details available.</div>;
  }

  return (
    <>
      <div className={`${styles.overlay} ${isFullScreen ? styles.showOverlay : ''}`} />
      <div className={`${styles.WholeContainer} ${isFullScreen ? styles.fullScreen : ''}`}>
        <div className={styles.scroller}>
          <div className={styles.expandIcon} onClick={toggleFullScreen}>
            {isFullScreen ? <FaCompress /> : <FaExpand />}
          </div>

          <h2 className={styles.Common}>Congrats! Are you ready to discover top talent?</h2>
          <p className={styles.tagline}>You can customize according to your own</p>
          {keywords && <p className={styles.keywords}>{keywords}</p>}
          <h4>Job Title</h4>
          <h2 className={styles.title}>{jobDetails.title}</h2>
          <h4 className={styles.description}>About the job </h4>
          <p>{jobDetails.description}</p>
          <div className={styles.details}>
            <p className={styles.jobDetails}>
              <strong>Job Type, Workplace, Location:</strong> 
            </p>
            <p>{jobDetails.type}, {jobDetails.workplace}, {jobDetails.location}</p>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.candidate} onClick={onFindCandidates}>
            Find Candidates
          </button>
          {isFullScreen && (
            <button className={styles.regenerate} onClick={onRegenerate}>
              <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.625 16.125H3.125M3.125 16.125C3.125 16.125 6.875 21.375 12.5 21.375C17.678 21.375 21.875 17.625 21.875 13.125M3.125 16.125V21.375M17.375 7.875H21.875M21.875 7.875C21.875 7.875 18.125 2.625 12.5 2.625C7.322 2.625 3.125 6.375 3.125 10.875M21.875 7.875V2.625" stroke="#C663FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Re-generate
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Scroller;