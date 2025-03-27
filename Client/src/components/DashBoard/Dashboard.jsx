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
import img from '../../assets/HomeImg.png';
import dummyData from '../../data/dummyData.json';

const Dashboard = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [jobDetails, setJobDetails] = useState(null);
  const [showCandidates, setShowCandidates] = useState(false);
  const [topCandidates, setTopCandidates] = useState([]);
  const [isScrollerVisible, setIsScrollerVisible] = useState(false);

  const handleInputChange = (value) => {
    setInputValue(value);
    setShowCandidates(false);
  };

  const handleGenerateJD = () => {
    if (inputValue.trim()) {
      setJobDetails(dummyData.jobDescriptions[0]);
      setIsScrollerVisible(true);
    }
  };

  const handleFindCandidates = () => {
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
        <DashBoardHeader />
        <div className={styles.middle}>
          <div className={styles.formAndList}>
            <Top />
            <JobDescriptionForm 
              onInputChange={handleInputChange} 
              onGenerateJD={handleGenerateJD}
              isScrollerVisible={isScrollerVisible}
            />
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