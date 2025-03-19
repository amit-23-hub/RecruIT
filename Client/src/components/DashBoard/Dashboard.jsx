import React, { useState, useEffect } from "react";
import SideMenu from "../SideMenu/SideMenu";
import DashBoardHeader from "../DashboardHeader/DashboardHeader.jsx";
import JobDescriptionForm from "./JobDiscriptionForm/JobDiscriptionForm";
import JobList from "./JobList/JobList.jsx";
import Scroller from "./Scroller/Scroller.jsx";
import CandidateFinder from "./CandidateFinder/CandidateFinder.jsx";
import styles from "./Dashboard.module.css";
import Top from "./TopSec/Top.jsx";
import img from '../../assets/HomeImg.png'
const Dashboard = () => {
  const [inputValue, setInputValue] = useState("");
  const [jobDetails, setJobDetails] = useState(null);
  const [showCandidates, setShowCandidates] = useState(false);
  const [topCandidates, setTopCandidates] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
    setShowCandidates(false);

    if (value) {
      setJobDetails({
        title: "Frontend Developer",
        description:
          "We are seeking a seasoned Frontend Developer with a strong grasp of React and TypeScript...",
        type: "Full time",
        workplace: "On site",
        location: "Gurugram",
      });
    } else {
      setJobDetails(null);
    }
  };

  const handleFindCandidates = () => {
    console.log("handleFindCandidates called"); // Debugging
    setShowCandidates(true);

    const fetchedCandidates = [
      {
        id: 1,
        name: "Amit Sharma",
        role: "Frontend Developer",
        experience: "5+ years",
        location: "Bangalore",
        noticePeriod: "1 Month",
        matchPercentage: 92,
        image: img,
        education: "BCA",
        matches: 30,
        interviewing: 5,
        description: "A skilled Front-End Developer with expertise in HTML, CSS, and JavaScript, proficient in building responsive and user-friendly web interfaces, leveraging frameworks like React/Angular/Vue to deliver dynamic and visually appealing applications.",
        skills: ["React", "HTML", "CSS"],
      },
      {
        id: 2,
        name: "Amit Sharma",
        role: "Frontend Developer",
        experience: "5+ years",
        location: "Bangalore",
        noticePeriod: "1 Month",
        matchPercentage: 92,
        image: img,
        education: "BCA",
        matches: 30,
        interviewing: 5,
        description: "A skilled Front-End Developer with expertise in HTML, CSS, and JavaScript, proficient in building responsive and user-friendly web interfaces, leveraging frameworks like React/Angular/Vue to deliver dynamic and visually appealing applications.",
        skills: ["React", "HTML", "CSS"],
      },{
        id: 3,
        name: "Amit Sharma",
        role: "Frontend Developer",
        experience: "5+ years",
        location: "Bangalore",
        noticePeriod: "1 Month",
        matchPercentage: 92,
        image: img,
        education: "BCA",
        matches: 30,
        interviewing: 5,
        description: "A skilled Front-End Developer with expertise in HTML, CSS, and JavaScript, proficient in building responsive and user-friendly web interfaces, leveraging frameworks like React/Angular/Vue to deliver dynamic and visually appealing applications.",
        skills: ["React", "HTML", "CSS"],
      },{
        id: 4,
        name: "Amit Sharma",
        role: "Frontend Developer",
        experience: "5+ years",
        location: "Bangalore",
        noticePeriod: "1 Month",
        matchPercentage: 92,
        image: img,
        education: "BCA",
        matches: 30,
        interviewing: 5,
        description: "A skilled Front-End Developer with expertise in HTML, CSS, and JavaScript, proficient in building responsive and user-friendly web interfaces, leveraging frameworks like React/Angular/Vue to deliver dynamic and visually appealing applications.",
        skills: ["React", "HTML", "CSS"],
      },
      // Add other candidates similarly
    ];

    console.log("Fetched Candidates:", fetchedCandidates); // Debugging
    setTopCandidates(fetchedCandidates);
  };

  useEffect(() => {
    console.log("Top Candidates Updated:", topCandidates); // Debugging
  }, [topCandidates]);

  return (
    <div className={styles.dashboard}>
      <SideMenu />
      <div className={styles.mainContent}>
        {!showCandidates && <DashBoardHeader />}
        <div className={`${styles.middle} ${showCandidates ? "" : styles.hidden}`}>
          {!showCandidates ? (
            <>
              <Top />
              <JobDescriptionForm onInputChange={handleInputChange} />
              {!inputValue && <JobList />}
              {inputValue && (
                <Scroller
                  jobDetails={jobDetails}
                  keywords={inputValue}
                  onFindCandidates={handleFindCandidates}
                />
              )}
            </>
          ) : (
            <div className={styles.candidateSection}>
              <div className={styles.left}>
                <Scroller
                  jobDetails={jobDetails}
                  keywords={inputValue}
                  onFindCandidates={handleFindCandidates}
                  onRegenerate={() => console.log("Regenerate clicked")}
                />
              </div>
              <div className={styles.right}>
                <CandidateFinder candidates={topCandidates} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;