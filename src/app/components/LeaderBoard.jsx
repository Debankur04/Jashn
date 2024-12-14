"use client"; 
import { useState } from 'react';
import styles from '../CSS/LeaderBoard.module.css';

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('present');

  const leaderboardData = {
    present: [
      { name: 'Alice', score: 120 },
      { name: 'Bob', score: 110 },
      { name: 'Charlie', score: 100 },
      { name: 'Alice', score: 120 },
      { name: 'Bob', score: 110 },
      { name: 'Charlie', score: 100 },
      { name: 'Charlie', score: 100 },
      { name: 'Alice', score: 120 },
      { name: 'Bob', score: 110 },
      { name: 'Charlie', score: 100 },
      { name: 'Alice', score: 120 },
      { name: 'Bob', score: 110 },
      { name: 'Charlie', score: 100 },
      { name: 'Alice', score: 120 },
      { name: 'Bob', score: 110 },
      { name: 'Charlie', score: 100 },
      { name: 'Charlie', score: 100 },
      { name: 'Alice', score: 120 },
      { name: 'Bob', score: 110 },
      { name: 'Charlie', score: 100 },
    ],
    lastWeek: [
      { name: 'Diana', score: 300 },
      { name: 'Evan', score: 280 },
      { name: 'Fiona', score: 270 },
      { name: 'Diana', score: 300 },
      { name: 'Evan', score: 280 },
      { name: 'Fiona', score: 270 },
      { name: 'Diana', score: 300 },
      { name: 'Evan', score: 280 },
      { name: 'Fiona', score: 270 },
      { name: 'Fiona', score: 270 },
      { name: 'Diana', score: 300 },
      { name: 'Evan', score: 280 },
      { name: 'Fiona', score: 270 },
      { name: 'Diana', score: 300 },
      { name: 'Evan', score: 280 },
      { name: 'Fiona', score: 270 },
      { name: 'Diana', score: 300 },
      { name: 'Evan', score: 280 },
      { name: 'Fiona', score: 270 },
      { name: 'Fiona', score: 270 },
    ],
    allTime: [
      { name: 'George', score: 1000 },
      { name: 'Helen', score: 950 },
      { name: 'Ian', score: 900 },
      { name: 'George', score: 1000 },
      { name: 'Helen', score: 950 },
      { name: 'Ian', score: 900 },
      { name: 'George', score: 1000 },
      { name: 'Helen', score: 950 },
      { name: 'Ian', score: 900 },
      { name: 'George', score: 1000 },
      { name: 'Helen', score: 950 },
      { name: 'Ian', score: 900 },
      { name: 'George', score: 1000 },
      { name: 'Helen', score: 950 },
      { name: 'Ian', score: 900 },

    ],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Leaderboard</h1>
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.button} ${activeTab === 'present' ? styles.active : ''}`}
          onClick={() => handleTabChange('present')}
        >
          Present
        </button>
        <button
          className={`${styles.button} ${activeTab === 'lastWeek' ? styles.active : ''}`}
          onClick={() => handleTabChange('lastWeek')}
        >
          Last Week
        </button>
        <button
          className={`${styles.button} ${activeTab === 'allTime' ? styles.active : ''}`}
          onClick={() => handleTabChange('allTime')}
        >
          All Time
        </button>
      </div>
      <ul className={styles.leaderboardList}>
        {leaderboardData[activeTab].map((entry, index) => (
          <li key={index} className={styles.leaderboardItem}>
            {entry.name}: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
