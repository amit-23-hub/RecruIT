import React from 'react';
import styles from './HeroMobile.module.css';
import img from '../../assets/HomeImg.png';
import leftBg from '../../assets/leftV.png';
import { ArrowRight } from 'lucide-react';

const HeroMobile = () => {
  return (
    <div className={styles.mobileContainer}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.leftBackground}>
        <img src={leftBg} alt="background" />
      </div>
      <div className={styles.contentSection}>
        <div className={styles.headerContent}>
          <div className={styles.headerBox}>
            <h1>AI-Powered</h1>
            <h1>Talent Matching</h1>
            <h2>Faster, Smarter, Effortless</h2>
          </div>
          {/* <div className={styles.cornerDecoration}>
            <svg width="117" height="160" viewBox="0 0 117 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_872_3765)">
                <rect x="63" y="60" width="34" height="34" rx="17" fill="#8A01DA" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M85.2896 82.289C85.4822 82.2892 85.6674 82.3629 85.8074 82.4951C85.9475 82.6273 86.0317 82.808 86.043 83.0002C86.0543 83.1925 85.9918 83.3818 85.8682 83.5295C85.7446 83.6771 85.5692 83.772 85.378 83.7948L85.2896 83.8001L80.0007 83.8001C79.8081 83.7999 79.6229 83.7261 79.4829 83.5939C79.3429 83.4617 79.2586 83.281 79.2473 83.0888C79.236 82.8966 79.2986 82.7073 79.4222 82.5596C79.5458 82.4119 79.7211 82.317 79.9123 82.2943L80.0007 82.289L85.2896 82.289ZM85.7664 71.2337C85.9418 71.4091 86.081 71.6173 86.176 71.8465C86.2709 72.0757 86.3198 72.3214 86.3198 72.5695C86.3198 72.8176 86.2709 73.0633 86.176 73.2925C86.081 73.5217 85.9418 73.7299 85.7664 73.9053L77.5338 82.1379C77.4377 82.234 77.3251 82.312 77.2014 82.3683L74.3273 83.6747C73.6911 83.964 73.0368 83.309 73.3261 82.6728L74.6333 79.7987C74.6893 79.675 74.7671 79.5624 74.8629 79.4662L83.0955 71.2337C83.4497 70.8796 83.9301 70.6806 84.4309 70.6806C84.9318 70.6806 85.4121 70.8796 85.7664 71.2337ZM84.1646 72.302L75.9789 80.4862L75.5339 81.4662L76.5131 81.0204L84.698 72.837C84.7341 72.8021 84.7629 72.7604 84.7827 72.7143C84.8025 72.6682 84.8129 72.6187 84.8133 72.5685C84.8138 72.5184 84.8042 72.4686 84.7852 72.4222C84.7662 72.3758 84.7382 72.3336 84.7027 72.2981C84.6672 72.2626 84.625 72.2346 84.5786 72.2156C84.5322 72.1966 84.4824 72.187 84.4323 72.1875C84.3821 72.1879 84.3325 72.1983 84.2865 72.2181C84.2404 72.2379 84.1987 72.2667 84.1638 72.3028M75.4674 68.689C75.625 68.689 75.7786 68.7384 75.9068 68.8301C76.035 68.9218 76.1312 69.0513 76.1821 69.2005L76.2804 69.4861C76.3922 69.8138 76.5776 70.1116 76.8224 70.3565C77.0672 70.6014 77.3648 70.787 77.6925 70.899L77.9781 70.9964C78.1271 71.0475 78.2564 71.1438 78.348 71.272C78.4395 71.4001 78.4887 71.5537 78.4887 71.7112C78.4887 71.8687 78.4395 72.0222 78.348 72.1504C78.2564 72.2785 78.1271 72.3749 77.9781 72.4259L77.6925 72.5242C77.3648 72.636 77.067 72.8214 76.8221 73.0662C76.5772 73.311 76.3916 73.6086 76.2796 73.9363L76.1821 74.2219C76.1311 74.3709 76.0347 74.5002 75.9066 74.5918C75.7784 74.6833 75.6249 74.7325 75.4674 74.7325C75.3099 74.7325 75.1563 74.6833 75.0282 74.5918C74.9 74.5002 74.8037 74.3709 74.7526 74.2219L74.6544 73.9363C74.5426 73.6086 74.3572 73.3108 74.1124 73.0659C73.8676 72.821 73.5699 72.6354 73.2423 72.5234L72.9567 72.4259C72.8077 72.3749 72.6784 72.2785 72.5868 72.1504C72.4953 72.0222 72.446 71.8687 72.446 71.7112C72.446 71.5537 72.4953 71.4001 72.5868 71.272C72.6784 71.1438 72.8077 71.0475 72.9567 70.9964L73.2423 70.8982C73.57 70.7864 73.8677 70.601 74.1127 70.3562C74.3576 70.1114 74.5432 69.8137 74.6552 69.4861L74.7526 69.2005C74.8035 69.0513 74.8998 68.9218 75.028 68.8301C75.1561 68.7384 75.3098 68.689 75.4674 68.689ZM75.4674 71.1037C75.2887 71.3286 75.0848 71.5325 74.8599 71.7112C75.0856 71.89 75.2881 72.0925 75.4674 72.3187C75.6462 72.093 75.8487 71.8905 76.0749 71.7112C75.8499 71.5325 75.6461 71.3286 75.4674 71.1037Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_872_3765" x="0.897869" y="0.912536" width="158.204" height="158.204" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="3.01467" />
                                    <feGaussianBlur stdDeviation="31.0511" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.73118 0 0 0 0 0.686933 0 0 0 0 0.746667 0 0 0 0.34 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_872_3765" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_872_3765" result="shape" />
                                </filter>
                            </defs>
            </svg>

        </div> */}
        </div>
                <div className={styles.imageSection}>
                    <img src={img} alt="Profile" className={styles.profileImage} />
                    <div className={styles.matchScore}>
                        <span>95%</span>
                        <span>MATCH SCORE</span>
                    </div>
                    {/* <div className={styles.imageCorner}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#8A01DA" />
                        </svg>
                    </div> */}
                </div>
            </div>

            <div className={styles.actionSection}>
                <div className={styles.employerCard}>
                    <div className={styles.cardHeader}>
                        <h3>For Employers</h3>
                        <ArrowRight className={styles.arrowIcon} />
                    </div>
                    <p>Explore top pre-verified talent and hire faster with AI-powered matching.</p>
                </div>

                <div className={styles.candidateCard}>
                    <div className={styles.cardHeader}>
                        <h3>For Candidates</h3>
                        <ArrowRight className={styles.arrowIcon} />
                    </div>
                    <p>Explore job opportunities that match your skills and career goals instantly.</p>
                </div>
            </div>
        </div>
    );
};

export default HeroMobile;