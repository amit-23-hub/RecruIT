import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SideMenu from "../SideMenu/SideMenu";
import DashBoardHeader from "../DashboardHeader/DashboardHeader.jsx";
import JobDescriptionForm from "./JobDiscriptionForm/JobDiscriptionForm";
import JobList from "./JobList/JobList.jsx";
import Scroller from "./Scroller/Scroller.jsx";
import CandidateFinder from "./CandidateFinder/CandidateFinder.jsx";
import styles from "./Dashboard.module.css";
import Top from "./TopSec/Top.jsx";
import img from '../../assets/HomeImg.png';  // Make sure this image exists
import dummyData from '../../data/dummyData.json';

const Dashboard = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [jobDetails, setJobDetails] = useState(null);
  const [showCandidates, setShowCandidates] = useState(false);
  const [topCandidates, setTopCandidates] = useState([]);
  const [isScrollerVisible, setIsScrollerVisible] = useState(false);
  const [showJobInfo, setShowJobInfo] = useState(false);  // Add this state

  const handleInputChange = (value) => {
    setInputValue(value);
    setShowCandidates(false);
  };

  const handleGenerateJD = () => {
    if (inputValue.trim()) {
      setJobDetails(dummyData.jobDescriptions[0]);
      setIsScrollerVisible(true);
      setShowJobInfo(true);  // Add this line
    }
  };

  const handleFindCandidates = () => {  // Make sure this function is defined
    if (!jobDetails) return;  // Add safety check
    
    setShowCandidates(true);
    const fetchedCandidates = dummyData.candidates;
    setTopCandidates(fetchedCandidates);
    navigate('/findcandidate', { 
      state: { 
        jobDetails, 
        candidates: fetchedCandidates, 
        keywords: inputValue 
      } 
    });
  };

  return (
    <div className={styles.dashboard}>
      <SideMenu />
      <div className={styles.mainContent}>
        <div className={styles.mobileTop}>
          <Top />
        </div>
        <DashBoardHeader />
        <div className={styles.middle}>
          <div className={styles.formAndList}>
            <div className={styles.desktopTop}>
              <Top />
            </div>
            <JobDescriptionForm 
              onInputChange={handleInputChange} 
              onGenerateJD={handleGenerateJD}
              isScrollerVisible={isScrollerVisible}
            />
            {showJobInfo && (
              <div className={styles.jobInfo}>
                <p className={styles.salaryInfo}>
                  <span role="img" aria-label="money">💰</span> 25-35LPA: Market salary range of 5 years experience
                </p>
                <p className={styles.workSystemInfo}>
                  <span role="img" aria-label="building">🏢</span> 70% companies are offering hybrid system for this role
                </p>
              </div>
            )}
            {!isScrollerVisible && <JobList />}
          </div>
          {isScrollerVisible && jobDetails && (
            <div className={styles.scrollerContainer}>
              <Scroller
                jobDetails={jobDetails}
                keywords={inputValue}
                onFindCandidates={handleFindCandidates}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;