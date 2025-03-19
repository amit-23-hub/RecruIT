import React, { useState } from "react";
import styles from "./CandidateFinder.module.css";
import { FaTimes } from "react-icons/fa"; // Import only the cross icon

const CandidateFinder = ({ candidates }) => {
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleSelectCandidate = (id) => {
    setSelectedCandidates((prev) =>
      prev.includes(id) ? prev.filter((candidateId) => candidateId !== id) : [...prev, id]
    );
  };

  const handleDownloadResumes = () => {
    console.log("Downloading resumes for selected candidates:", selectedCandidates);
    // Add logic to download resumes
  };

  const handleNextProfiles = () => {
    setCurrentIndex((prevIndex) => prevIndex + 3);
  };

  const handleAssessCandidate = () => {
    setShowPopup(true); // Show the popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup
  };

  const displayedCandidates = candidates.slice(currentIndex, currentIndex + 3);

  return (
    <div className={styles.candidateContainer}>
      <h2 className={styles.heading}>The Best 3 Candidates</h2>
      <div className={styles.candidateList}>
        {displayedCandidates.length === 0 ? (
          <p>No candidates found</p>
        ) : (
          displayedCandidates.map((candidate) => (
            <div key={candidate.id} className={styles.candidateCard}>
              {/* Cross Icon at Top Right */}
              <div className={styles.crossIcon} onClick={() => console.log("Close card")}>
                <FaTimes />
              </div>

              <div className={styles.candidateHeader}>
                <div className={styles.candidateInfo}>
                  <div
                    className={styles.candidateImage}
                    style={{ backgroundImage: `url(${candidate.image})` }}
                  ></div>
                  <div className={styles.candidateDetails}>
                    <h3 className={styles.candidateName}>{candidate.name}</h3>
                    <p className={styles.candidateRole}>
                      {candidate.role} | {candidate.skills?.join(" | ")}
                    </p>
                    {/* Experience, Location, Notice Period */}
                    <div className={styles.candidateStats}>
                      <span className={styles.statText}>{candidate.experience} Experience</span>
                      <span className={styles.statText}>{candidate.location}</span>
                      <span className={styles.statText}>{candidate.noticePeriod} Notice Period</span>
                    </div>
                  </div>
                </div>

                {/* Match Score and What Things Matched in Same Row */}
                <div className={styles.matchRow}>
                  <div className={styles.matchContainer}>
                    <div className={styles.matchCircle}>
                      <div className={styles.matchInnerCircle}>
                        <span className={styles.matchPercentage}>{candidate.matchPercentage}%</span>
                        <span className={styles.matchText}>Match</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.matchDetails}>
                    <h4>What things matched</h4>
                    <div className={styles.matchItems}>
                      <span className={styles.edu}>Education: {candidate.education}</span>
                      <span className={styles.loc}>Location: {candidate.location}</span>
                      <span className={styles.skills}>Skills: {candidate.skills?.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Line Above Description */}
              <hr className={styles.divider} />

              {/* Candidate Description */}
              <p className={styles.candidateDescription}>{candidate.description}</p>

              {/* Candidate Footer */}
              <div className={styles.candidateFooter}>
                <div className={styles.footerItem}>
                  <span className={styles.footerText}>
                    Appeared in {candidate.matches} matches
                  </span>
                </div>
                <div className={styles.footerItem}>
                  <span className={styles.footerText}>
                    {candidate.interviewing} Interviewing
                  </span>
                </div>
              </div>

              {/* Checkbox for Selection */}
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  checked={selectedCandidates.includes(candidate.id)}
                  onChange={() => handleSelectCandidate(candidate.id)}
                  className={styles.checkbox}
                />
              </div>
            </div>
          ))
        )}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.downloadButton}
          onClick={handleDownloadResumes}
          disabled={selectedCandidates.length === 0}
        >
          Download Resumes
        </button>
        {selectedCandidates.length > 0 ? ( // Render "Assess Candidate" button if any checkbox is selected
          <button
            className={styles.nextButton}
            onClick={handleAssessCandidate}
          >
            Assess Candidate
          </button>
        ) : ( // Otherwise, render "Next Candidates" button
          <button
            className={styles.nextButton}
            onClick={handleNextProfiles}
            disabled={currentIndex + 3 >= candidates.length}
          >
            Next Candidates
          </button>
        )}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <div className={styles.popupHeader}>
              <h3>Great choice!</h3>
              <div className={styles.popupCrossIcon} onClick={handleClosePopup}>
                <FaTimes />
              </div>
            </div>
            <p>
              Our AI agent will now schedule the interview with the candidate, and you'll find all the
              details in the 'Interviews' section.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateFinder;