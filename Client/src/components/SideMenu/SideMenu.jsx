import React, { useState } from "react";
import styles from "./SideMenu.module.css";

const SideMenu = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`${styles.sideMenu} ${expanded ? styles.expanded : ""}`}
    >
      {/* Add hamburger menu */}
      <div className={`${styles.menuItem} ${styles.hamburger}`} onClick={toggleMenu}>
        <div className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="#A0AEC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="#A0AEC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="#A0AEC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className={styles.menuItem}>
        <div className={styles.logo}>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8333 5.46142C14.8333 2.44516 17.2784 0 20.2947 0C23.3109 0 25.7561 2.44516 25.7561 5.46142V5.77674C25.7561 8.793 23.3109 11.2382 20.2947 11.2382C17.2784 11.2382 14.8333 8.793 14.8333 5.77674V5.46142Z"
              fill="#C6BBBB"
            />
            <path
              d="M14.8333 19.9192C14.8333 16.9029 17.2784 14.4578 20.2947 14.4578C23.3109 14.4578 25.7561 16.9029 25.7561 19.9192V20.2345C25.7561 23.2508 23.3109 25.6959 20.2947 25.6959C17.2784 25.6959 14.8333 23.2508 14.8333 20.2345V19.9192Z"
              fill="#B7ACAC"
            />
            <path
              d="M0 5.46142C0 2.44516 2.44516 0 5.46142 0C8.47768 0 10.9228 2.44516 10.9228 5.46142V5.77674C10.9228 8.793 8.47768 11.2382 5.46142 11.2382C2.44516 11.2382 0 8.793 0 5.77674V5.46142Z"
              fill="#C6BBBB"
            />
            <path
              d="M0 19.9192C0 16.9029 2.44516 14.4578 5.46142 14.4578C8.47768 14.4578 10.9228 16.9029 10.9228 19.9192V20.2345C10.9228 23.2508 8.47768 25.6959 5.46142 25.6959C2.44516 25.6959 0 23.2508 0 20.2345V19.9192Z"
              fill="#B7ACAC"
            />
          </svg>
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.MainIcon}>+</div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 8C19.55 8 18.74 9.44 19.07 10.51L15.52 14.07C15.22 13.98 14.78 13.98 14.48 14.07L11.93 11.52C12.27 10.45 11.46 9 10 9C8.55 9 7.73 10.44 8.07 11.52L3.51 16.07C2.44 15.74 1 16.55 1 18C1 19.1 1.9 20 3 20C4.45 20 5.26 18.56 4.93 17.49L9.48 12.93C9.78 13.02 10.22 13.02 10.52 12.93L13.07 15.48C12.73 16.55 13.54 18 15 18C16.45 18 17.27 16.56 16.93 15.48L20.49 11.93C21.56 12.26 23 11.45 23 10C23 8.9 22.1 8 21 8Z"
              fill="#A0AEC0"
            />
            <path
              d="M15 9L15.94 6.93L18 6L15.94 5.07L15 3L14.08 5.07L12 6L14.08 6.93L15 9ZM3.5 11L4 9L6 8.5L4 8L3.5 6L3 8L1 8.5L3 9L3.5 11Z"
              fill="#A0AEC0"
            />
          </svg>
        </div>
        {expanded && <span className={styles.iconText}>Reports</span>}
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.562 7C19.6157 6.69354 19.6017 6.37903 19.5209 6.07857C19.4402 5.7781 19.2946 5.49895 19.0945 5.26071C18.8944 5.02248 18.6445 4.83093 18.3625 4.69951C18.0805 4.5681 17.7731 4.5 17.462 4.5H6.53801C6.22687 4.5 5.91951 4.5681 5.63749 4.69951C5.35548 4.83093 5.10564 5.02248 4.90552 5.26071C4.7054 5.49895 4.55985 5.7781 4.47909 6.07857C4.39832 6.37903 4.3843 6.69354 4.43801 7M17.5 4.5C17.528 4.24 17.543 4.111 17.543 4.004C17.5441 3.50969 17.3621 3.0325 17.0321 2.66446C16.7021 2.29643 16.2475 2.06364 15.756 2.011C15.65 2 15.52 2 15.26 2H8.74001C8.48001 2 8.34901 2 8.24301 2.011C7.75151 2.06364 7.29692 2.29643 6.96693 2.66446C6.63694 3.0325 6.45492 3.50969 6.45601 4.004C6.45601 4.111 6.47001 4.241 6.49901 4.5"
              stroke="#A0AEC0"
              stroke-width="1.5"
            />
            <path
              d="M15.0001 18H9.00008M21.1941 16.793C20.8441 19.273 20.6691 20.514 19.7721 21.257C18.8751 22 17.5521 22 14.9051 22H9.09509C6.44909 22 5.12509 22 4.22809 21.257C3.33109 20.514 3.15609 19.274 2.80609 16.793L2.38409 13.793C1.93709 10.629 1.71408 9.048 2.66208 8.023C3.61009 7 5.29808 7 8.67208 7H15.3281C18.7021 7 20.3901 7 21.3381 8.024C22.0871 8.833 22.1051 9.99 21.8591 12"
              stroke="#A0AEC0"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        {expanded && <span className={styles.iconText}>Drafts</span>}
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon}>
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_803_3509)">
<path d="M11.25 10.5C10.2554 10.5 9.30161 10.1049 8.59835 9.40165C7.89509 8.69839 7.5 7.74456 7.5 6.75C7.5 5.75544 7.89509 4.80161 8.59835 4.09835C9.30161 3.39509 10.2554 3 11.25 3C12.2446 3 13.1984 3.39509 13.9017 4.09835C14.6049 4.80161 15 5.75544 15 6.75C15 7.74456 14.6049 8.69839 13.9017 9.40165C13.1984 10.1049 12.2446 10.5 11.25 10.5ZM11.25 4.5C10.005 4.5 9 5.505 9 6.75C9 7.995 10.005 9 11.25 9C12.495 9 13.5 7.995 13.5 6.75C13.5 5.505 12.495 4.5 11.25 4.5Z" fill="#A0AEC0"/>
<path d="M20.25 16.5C19.83 16.5 19.5 16.17 19.5 15.75C19.5 15.33 19.83 15 20.25 15C20.67 15 21 14.67 21 14.25C21 13.2554 20.6049 12.3016 19.9016 11.5983C19.1984 10.8951 18.2446 10.5 17.25 10.5H15.75C15.33 10.5 15 = 10.17 15 = 9.75C15 = 9.33 15.33 = 9 15.75 = 9C16.995 9 18 7.995 18 6.75C18 5.505 16.995 4.5 15.75 4.5C15.33 4.5 15 = 4.17 15 = 3.75C15 = 3.33 15.33 = 3 15.75 = 3C16.7446 3 17.6984 3.39509 18.4016 4.09835C19.1049 4.80161 19.5 5.75544 19.5 6.75C19.5 7.68 19.17 8.52 18.6 9.18C20.835 9.78 22.5 11.82 22.5 14.25C22.5 15.495 21.495 16.5 20.25 16.5ZM2.25 16.5C1.005 16.5 0 15.495 0 14.25C0 11.82 1.65 9.78 3.9 9.18C3.345 8.52 3 7.68 3 6.75C3 5.75544 3.39509 4.80161 4.09835 4.09835C4.80161 3.39509 5.75544 3 6.75 3C7.17 3 7.5 3.33 7.5 3.75C7.5 4.17 7.17 4.5 6.75 4.5C5.505 4.5 4.5 5.505 4.5 6.75C4.5 7.995 5.505 9 6.75 9C7.17 9 7.5 9.33 7.5 9.75C7.5 10.17 7.17 10.5 6.75 10.5H5.25C4.25544 10.5 3.30161 10.8951 2.59835 11.5983C1.89509 12.3016 1.5 13.2554 1.5 14.25C1.5 14.67 1.83 15 2.25 15C2.67 15 3 = 15.33 3 = 15.75C3 = 16.17 2.67 16.5 2.25 16.5ZM15.75 21H6.75C5.505 21 4.5 19.995 4.5 18.75V17.25C4.5 14.355 6.855 12 9.75 12H12.75C15.645 12 18 = 14.355 18 = 17.25V18.75C18 = 19.995 16.995 = 21 15.75 21ZM9.75 13.5C8.75544 13.5 7.80161 13.8951 7.09835 14.5983C6.39509 15.3016 6 = 16.2554 6 = 17.25V18.75C6 = 19.17 6.33 = 19.5 6.75 = 19.5H15.75C16.17 19.5 16.5 = 19.17 16.5 = 18.75V17.25C16.5 = 16.2554 16.1049 = 15.3016 15.4017 = 14.5983C14.6984 13.8951 13.7446 13.5 12.75 13.5H9.75Z" fill="#A0AEC0"/>
</g>
<defs>
<clipPath id="clip0_803_3509">
<rect width="22.5" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

        </div>
        {expanded && <span className={styles.iconText}>Candidates</span>}
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 20H6C4.93913 20 3.92172 19.5786 3.17157 18.8284C2.42143 18.0783 2 17.0609 2 16V7C2 5.93913 2.42143 4.92172 3.17157 4.17157C3.92172 3.42143 4.93913 3 6 3H17C18.0609 3 19.0783 3.42143 19.8284 4.17157C20.5786 4.92172 21 5.93913 21 7V10M8 2V4M15 2V4M2 8H21M18.5 15.643L17 17.143"
              stroke="#A0AEC0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 22C19.7614 22 22 19.7614 22 17C22 14.2386 19.7614 12 17 12C14.2386 12 12 14.2386 12 17C12 19.7614 14.2386 22 17 22Z"
              stroke="#A0AEC0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {expanded && <span className={styles.iconText}>Interviews</span>}
      </div>

      {/* Bottom Icons with 40px gap */}
      <div className={styles.bottomIcons}>
        <div className={styles.menuItem}>
          <div className={styles.icon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22.5C6.21 22.5 1.5 17.79 1.5 12C1.5 6.21 6.21 1.5 12 1.5C17.79 1.5 22.5 6.21 22.5 12C22.5 17.79 17.79 22.5 12 22.5ZM12 3C7.035 3 3 7.035 3 12C3 16.965 7.035 21 12 21C16.965 21 21 16.965 21 12C21 7.035 16.965 3 12 3Z"
                fill="#A0AEC0"
              />
              <path
                d="M12 6.75C10.335 6.75 9 8.085 9 9.75H10.5C10.5 8.925 11.175 8.25 12 8.25C12.825 8.25 13.5 8.925 13.5 9.75C13.5 11.25 11.25 11.07 11.25 13.5H12.75C12.75 11.82 15 11.625 15 9.75C15 8.085 13.665 6.75 12 6.75Z"
                fill="#A0AEC0"
              />
              <path
                d="M11.9999 17.4301C12.5136 17.4301 12.9299 17.0137 12.9299 16.5001C12.9299 15.9864 12.5136 15.5701 11.9999 15.5701C11.4863 15.5701 11.0699 15.9864 11.0699 16.5001C11.0699 17.0137 11.4863 17.4301 11.9999 17.4301Z"
                fill="#A0AEC0"
              />
              <path
                d="M9.75 10.5C10.1642 10.5 10.5 10.1642 10.5 9.75C10.5 9.33579 10.1642 9 9.75 9C9.33579 9 9 9.33579 9 9.75C9 10.1642 9.33579 10.5 9.75 10.5Z"
                fill="#A0AEC0"
              />
              <path
                d="M12 14.25C12.4142 14.25 12.75 13.9142 12.75 13.5C12.75 13.0858 12.4142 12.75 12 12.75C11.5858 12.75 11.25 13.0858 11.25 13.5C11.25 13.9142 11.5858 14.25 12 14.25Z"
                fill="#A0AEC0"
              />
            </svg>
          </div>
          {expanded && <span className={styles.iconText}>Help & Support</span>}
        </div>
        <div className={styles.menuItem}>
          <div className={styles.icon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.496 21H6.5C5.395 21 4.5 19.849 4.5 18.429V5.57C4.5 4.151 5.395 3 6.5 3H13.5M16 15.5L19.5 12L16 8.5M9.5 11.996H19.5"
                stroke="#A0AEC0"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {expanded && <span className={styles.iconText}>LogOut</span>}
        </div>
        <div className={styles.menuItem}>
          <div className={styles.icon}>
            <img src="" />
          </div>
          {expanded && <span className={styles.iconText}>Profile</span>}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
