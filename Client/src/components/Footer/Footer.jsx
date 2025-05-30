import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../Common/logo.jsx";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topRow}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>

        <div className={styles.navigationLinks}>
          <Link className={styles.navigationLinks} to="/about">About</Link>
          <Link className={styles.navigationLinks} to="/blogs">Blogs</Link>
          <Link className={styles.navigationLinks} to="/for-recruiters">For Recruiters</Link>
          <Link className={styles.navigationLinks} to="/for-candidates">For Candidates</Link>
        </div>

        <div className={styles.socialMedia}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            {/* LinkedIn SVG - keeping existing SVG */}
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_713_1253)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.77848 21.393V7.87569H0.286084V21.393H4.77848V21.393ZM2.53276 6.03081C4.09886 6.03081 5.07441 4.99196 5.07441 3.69485C5.0448 2.36889 4.09886 1.35938 2.56212 1.35938C1.02514 1.35942 0.0205078 2.36893 0.0205078 3.69489C0.0205078 4.99201 0.995531 6.03085 2.50318 6.03085L2.53276 6.03081ZM7.26485 21.393C7.26485 21.393 7.32379 9.14398 7.26485 7.87573H11.758V9.83603H11.7281C12.3189 8.91359 13.3833 7.55831 15.8067 7.55831C18.7633 7.55831 20.9795 9.49027 20.9795 13.6423V21.393H16.4871V14.1617C16.4871 12.3446 15.8371 11.1047 14.2108 11.1047C12.97 11.1047 12.2305 11.9406 11.9057 12.7486C11.7869 13.0362 11.758 13.4402 11.758 13.8442V21.393H7.26485Z"
                  fill="#011846"
                />
              </g>
              <defs>
                <clipPath id="clip0_713_1253">
                  <rect
                    width="21"
                    height="21"
                    fill="white"
                    transform="translate(0 0.876221)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            {/* Instagram SVG - keeping existing SVG */}
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_713_1257)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5 16.6262C13.3995 16.6262 15.75 14.2757 15.75 11.3762C15.75 8.47672 13.3995 6.12622 10.5 6.12622C7.6005 6.12622 5.25 8.47672 5.25 11.3762C5.25 14.2757 7.6005 16.6262 10.5 16.6262ZM10.5 14.8762C12.433 14.8762 14 13.3092 14 11.3762C14 9.44322 12.433 7.87622 10.5 7.87622C8.567 7.87622 7 9.44322 7 11.3762C7 13.3092 8.567 14.8762 10.5 14.8762Z"
                  fill="#011846"
                />
                <path
                  d="M15.75 5.25122C15.2667 5.25122 14.875 5.64298 14.875 6.12622C14.875 6.60947 15.2667 7.00122 15.75 7.00122C16.2333 7.00122 16.625 6.60947 16.625 6.12622C16.625 5.64298 16.2333 5.25122 15.75 5.25122Z"
                  fill="#011846"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.44721 4.61777C0.875 5.74081 0.875 7.21095 0.875 10.1512V12.6012C0.875 15.5415 0.875 17.0117 1.44721 18.1346C1.95055 19.1225 2.7537 19.9257 3.74155 20.429C4.86459 21.0012 6.33473 21.0012 9.275 21.0012H11.725C14.6653 21.0012 16.1354 21.0012 17.2584 20.429C18.2463 19.9257 19.0494 19.1225 19.5527 18.1346C20.125 17.0117 20.125 15.5415 20.125 12.6012V10.1512C20.125 7.21095 20.125 5.74081 19.5527 4.61777C19.0494 3.62992 18.2463 2.82677 17.2584 2.32344C16.1354 1.75122 14.6653 1.75122 11.725 1.75122H9.275C6.33473 1.75122 4.86459 1.75122 3.74155 2.32344C2.7537 2.82677 1.95055 3.62992 1.44721 4.61777ZM11.725 3.50122H9.275C7.77599 3.50122 6.75697 3.50259 5.96932 3.56693C5.20209 3.62962 4.80974 3.74324 4.53604 3.88269C3.87747 4.21826 3.34204 4.75369 3.00647 5.41226C2.86702 5.68596 2.7534 6.07831 2.69071 6.84554C2.62636 7.63319 2.625 8.65221 2.625 10.1512V12.6012C2.625 14.1003 2.62636 15.1192 2.69071 15.9069C2.7534 16.6742 2.86702 17.0665 3.00647 17.3402C3.34204 17.9987 3.87747 18.5342 4.53604 18.8697C4.80974 19.0092 5.20209 19.1229 5.96932 19.1855C6.75697 19.2498 7.77599 19.2512 9.275 19.2512H11.725C13.224 19.2512 14.243 19.2498 15.0307 19.1855C15.798 19.1229 16.1903 19.0092 16.464 18.8697C17.1225 18.5342 17.6579 17.9987 17.9935 17.3402C18.133 17.0665 18.2466 16.6742 18.3093 15.9069C18.3736 15.1192 18.375 14.1003 18.375 12.6012V10.1512C18.375 8.65221 18.3736 7.63319 18.3093 6.84554C18.2466 6.07831 18.133 5.68596 17.9935 5.41226C17.6579 4.75369 17.1225 4.21826 16.464 3.88269C16.1903 3.74324 15.798 3.62962 15.0307 3.56693C14.243 3.50259 13.224 3.50122 11.725 3.50122Z"
                  fill="#011846"
                />
              </g>
              <defs>
                <clipPath id="clip0_713_1257">
                  <rect
                    width="21"
                    height="21"
                    fill="white"
                    transform="translate(0 0.876221)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            {/* Facebook SVG - keeping existing SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
            >
              <g clip-path="url(#clip0_713_1262)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4124 21.8762V12.4262H15.2814L15.75 8.22622H12.4124V6.18057C12.4124 5.09907 12.44 4.02622 13.9512 4.02622H15.4819V1.02336C15.4819 0.978214 14.1671 0.876221 12.837 0.876221C10.059 0.876221 8.31957 2.61628 8.31957 5.81143V8.22622H5.25V12.4262H8.31957V21.8762H12.4124Z"
                  fill="#011846"
                />
              </g>
              <defs>
                <clipPath id="clip0_713_1262">
                  <rect
                    width="21"
                    height="21"
                    fill="white"
                    transform="translate(0 0.876221)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.divider}></div>
      <div className={styles.copyright}>© Copyright 2024 - RecruIT</div>
    </div>
  );
};

export default Footer;







