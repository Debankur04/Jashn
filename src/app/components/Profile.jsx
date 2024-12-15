"use client";
import { useState } from 'react';
import styles from '../CSS/Profile.module.css';

const Profile = () => {
  const [showWishlist, setShowWishlist] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  const toggleWishlist = () => setShowWishlist(!showWishlist);
  const toggleSchedule = () => setShowSchedule(!showSchedule);

  const placeholderData = {
    image: 'https://via.placeholder.com/100',
    name: 'John Doe',
    email: 'john.doe@example.com',
    points: {
      thisWeek: 150,
      allTime: 1200,
    },
    bestStanding: 'Top 5 in Regional Hackathon',
    wishlistedEvents: ['Event A', 'Event B', 'Event C'],
    schedule: ['10:00 AM - Event A', '2:00 PM - Event B'],
    participatingEvents: ['Hackathon X', 'Coding Marathon Y'],
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <img src={placeholderData.image} alt="Profile" className={styles.profileImage} />
        <div>
            <h2 className={styles.userName}>{placeholderData.name}</h2>
            <p className={styles.userEmail}>{placeholderData.email}</p>
        </div>
      </div>

      <div className={styles.actionsSection}>
        <button className={styles.button} onClick={toggleWishlist}>
          Wishlisted Events
        </button>
        <div className={styles.pointsSection}>
          <p>This Week: {placeholderData.points.thisWeek}</p>
          <p>All Time: {placeholderData.points.allTime}</p>
        </div>
      </div>

      <div className={styles.bestStandingSection}>
        <h3>Best Standing</h3>
        <p>{placeholderData.bestStanding}</p>
      </div>

      <button className={styles.button} onClick={toggleSchedule}>
        Open Schedule
      </button>

      <div className={styles.participatingEventsSection}>
        <h3>Participating Events</h3>
        <ul>
          {placeholderData.participatingEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>

      {showWishlist && (
        <div className={styles.wishlistModal}>
          <h3>Wishlisted Events</h3>
          <ul>
            {placeholderData.wishlistedEvents.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
          <button className={styles.closeButton} onClick={toggleWishlist}>Close</button>
        </div>
      )}

      {showSchedule && (
        <div className={styles.scheduleModal}>
          <h3>Schedule</h3>
          <ul>
            {placeholderData.schedule.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button className={styles.closeButton} onClick={toggleSchedule}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
