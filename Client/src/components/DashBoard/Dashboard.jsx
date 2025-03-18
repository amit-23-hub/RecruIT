import React from 'react';
import SideMenu from '../SideMenu/SideMenu';
import DashBoardHeader from '../DashboardHeader/DashboardHeader.jsx';
import JobDescriptionForm from './JobDiscriptionForm/JobDiscriptionForm';
import JobList from './JobList/JobList.jsx';
import styles from './Dashboard.module.css';
import Top from './TopSec/Top.jsx';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <SideMenu />
      <div className={styles.mainContent}>

        <DashBoardHeader />
        <div className={styles.middle}>
        <Top/>
        <JobDescriptionForm />
        <JobList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;