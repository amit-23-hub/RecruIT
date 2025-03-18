import React from "react";
import StatsCard from "./StatsCard/StatsCard";
import styles from "./DashboardHeader.module.css";

const DashboardHeader = () => {
  return (
    <div className={styles.header}>
      <StatsCard
        title="Job Profiles Created"
        value="4"
        icon={
          <svg
            width="57"
            height="56"
            viewBox="0 0 57 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_713_1459)">
              <rect x="6" y="2" width="45" height="45" rx="12" fill="#F5E3FF" />
            </g>
            <path
              d="M25 19V17C25 16.4696 25.2107 15.9609 25.5858 15.5858C25.9609 15.2107 26.4696 15 27 15H31C31.5304 15 32.0391 15.2107 32.4142 15.5858C32.7893 15.9609 33 16.4696 33 17V19M29 24V24.01M20 21C20 20.4696 20.2107 19.9609 20.5858 19.5858C20.9609 19.2107 21.4696 19 22 19H36C36.5304 19 37.0391 19.2107 37.4142 19.5858C37.7893 19.9609 38 20.4696 38 21V30C38 30.5304 37.7893 31.0391 37.4142 31.4142C37.0391 31.7893 36.5304 32 36 32H22C21.4696 32 20.9609 31.7893 20.5858 31.4142C20.2107 31.0391 20 30.5304 20 30V21Z"
              stroke="#8A01DA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 25C22.7916 26.4067 25.874 27.1394 29 27.1394C32.126 27.1394 35.2084 26.4067 38 25"
              stroke="#8A01DA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <filter
                id="filter0_d_713_1459"
                x="0.5"
                y="-2.38419e-07"
                width="56"
                height="56"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3.5" />
                <feGaussianBlur stdDeviation="2.75" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_713_1459"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_713_1459"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        }
      />
      <StatsCard
        title="Candidates Reviewed"
        value="16"
        icon={
          <svg
            width="57"
            height="56"
            viewBox="0 0 57 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_713_1470)">
              <rect x="6" y="2" width="45" height="45" rx="12" fill="#E3F9FF" />
            </g>
            <path
              d="M38.544 24.045C38.848 24.471 39 24.685 39 25C39 25.316 38.848 25.529 38.544 25.955C37.178 27.871 33.689 32 29 32C24.31 32 20.822 27.87 19.456 25.955C19.152 25.529 19 25.315 19 25C19 24.684 19.152 24.471 19.456 24.045C20.822 22.129 24.311 18 29 18C33.69 18 37.178 22.13 38.544 24.045Z"
              stroke="#2284A0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M32 25C32 24.2044 31.6839 23.4413 31.1213 22.8787C30.5587 22.3161 29.7956 22 29 22C28.2044 22 27.4413 22.3161 26.8787 22.8787C26.3161 23.4413 26 24.2044 26 25C26 25.7956 26.3161 26.5587 26.8787 27.1213C27.4413 27.6839 28.2044 28 29 28C29.7956 28 30.5587 27.6839 31.1213 27.1213C31.6839 26.5587 32 25.7956 32 25Z"
              stroke="#2284A0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <filter
                id="filter0_d_713_1470"
                x="0.5"
                y="-2.38419e-07"
                width="56"
                height="56"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3.5" />
                <feGaussianBlur stdDeviation="2.75" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_713_1470"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_713_1470"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        }
      />
      <StatsCard
        title="Resumes Downloaded"
        value="8"
        icon={
          <svg
            width="57"
            height="56"
            viewBox="0 0 57 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_713_1481)">
              <rect x="6" y="2" width="45" height="45" rx="12" fill="#E6FFE3" />
            </g>
            <path
              d="M23 34H35M29 16V30M29 30L34 25M29 30L24 25"
              stroke="#5C9356"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <filter
                id="filter0_d_713_1481"
                x="0.5"
                y="-2.38419e-07"
                width="56"
                height="56"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3.5" />
                <feGaussianBlur stdDeviation="2.75" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_713_1481"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_713_1481"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        }
      />
      <StatsCard
        title="Interviews in Progress"
        value="2"
        icon={
          <svg
            width="57"
            height="56"
            viewBox="0 0 57 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_713_1490)">
              <rect x="6" y="2" width="45" height="45" rx="12" fill="#E4E3FF" />
            </g>
            <path
              d="M26 33H23C21.9391 33 20.9217 32.5786 20.1716 31.8284C19.4214 31.0783 19 30.0609 19 29V20C19 18.9391 19.4214 17.9217 20.1716 17.1716C20.9217 16.4214 21.9391 16 23 16H34C35.0609 16 36.0783 16.4214 36.8284 17.1716C37.5786 17.9217 38 18.9391 38 20V23M25 15V17M32 15V17M19 21H38M35.5 28.643L34 30.143"
              stroke="#4541A7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M34 35C36.7614 35 39 32.7614 39 30C39 27.2386 36.7614 25 34 25C31.2386 25 29 27.2386 29 30C29 32.7614 31.2386 35 34 35Z"
              stroke="#4541A7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <filter
                id="filter0_d_713_1490"
                x="0.5"
                y="-2.38419e-07"
                width="56"
                height="56"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3.5" />
                <feGaussianBlur stdDeviation="2.75" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_713_1490"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_713_1490"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        }
      />
      <StatsCard
        title="Pending Hiring"
        value="2"
        icon={
          <svg
            width="57"
            height="56"
            viewBox="0 0 57 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_713_1501)">
              <rect x="6" y="2" width="45" height="45" rx="12" fill="#FFE3E3" />
            </g>
            <path
              d="M33 25H34.5V27.82L36.94 29.23L36.19 30.53L33 28.69V25ZM34 23C32.6739 23 31.4021 23.5268 30.4645 24.4645C29.5268 25.4021 29 26.6739 29 28C29 29.3261 29.5268 30.5979 30.4645 31.5355C31.4021 32.4732 32.6739 33 34 33C35.3261 33 36.5979 32.4732 37.5355 31.5355C38.4732 30.5979 39 29.3261 39 28C39 26.6739 38.4732 25.4021 37.5355 24.4645C36.5979 23.5268 35.3261 23 34 23ZM34 21C35.8565 21 37.637 21.7375 38.9497 23.0503C40.2625 24.363 41 26.1435 41 28C41 29.8565 40.2625 31.637 38.9497 32.9497C37.637 34.2625 35.8565 35 34 35C31.21 35 28.8 33.36 27.67 31H18V28C18 25.34 23.33 24 26 24C26.6 24 27.34 24.07 28.12 24.2C28.7541 23.2173 29.6247 22.4094 30.652 21.8503C31.6793 21.2913 32.8304 20.9989 34 21ZM27 28C27 27.3 27.1 26.62 27.29 26C26.87 25.93 26.43 25.9 26 25.9C23.03 25.9 19.9 27.36 19.9 28V29.1H27.09C27.0311 28.7363 27.001 28.3685 27 28ZM26 15C27.0609 15 28.0783 15.4214 28.8284 16.1716C29.5786 16.9217 30 17.9391 30 19C30 20.0609 29.5786 21.0783 28.8284 21.8284C28.0783 22.5786 27.0609 23 26 23C24.9391 23 23.9217 22.5786 23.1716 21.8284C22.4214 21.0783 22 20.0609 22 19C22 17.9391 22.4214 16.9217 23.1716 16.1716C23.9217 15.4214 24.9391 15 26 15ZM26 16.9C25.443 16.9 24.9089 17.1212 24.5151 17.5151C24.1212 17.9089 23.9 18.443 23.9 19C23.9 19.557 24.1212 20.0911 24.5151 20.4849C24.9089 20.8788 25.443 21.1 26 21.1C26.557 21.1 27.0911 20.8788 27.4849 20.4849C27.8788 20.0911 28.1 19.557 28.1 19C28.1 18.443 27.8788 17.9089 27.4849 17.5151C27.0911 17.1212 26.557 16.9 26 16.9Z"
              fill="#B64141"
            />
            <defs>
              <filter
                id="filter0_d_713_1501"
                x="0.5"
                y="-2.38419e-07"
                width="56"
                height="56"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3.5" />
                <feGaussianBlur stdDeviation="2.75" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_713_1501"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_713_1501"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        }
      />
    </div>
  );
};

export default DashboardHeader;
