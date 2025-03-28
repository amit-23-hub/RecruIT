import React from 'react';
import styles from './ShortBio.module.css';

const ShortBio = ({ bio }) => {
  return (
    <div className={styles.bioSection}>
      <h2>Short bio</h2>
      <p>{bio}</p>
    </div>
  );
};

export default ShortBio;