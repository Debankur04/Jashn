"use client";
import { useState } from 'react';
import styles from '../CSS/LandingPage.module.css';
const LandingPage = () => {
  const [showWishlist, setShowWishlist] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  const placeholderData = {
    rsvpRequests: [
      { name: 'Person 1', status: 'pending' },
      { name: 'Person 2', status: 'pending' },
    ],
    events: ['Event 1', 'Event 2', 'Event 3'],
    participatingEvents: ['Hackathon X', 'Coding Marathon Y','Hello World'],
    theme: 'Debankur',
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <h3>Settings</h3>
        <p>Theme: {placeholderData.theme}</p>
        <button className={styles.button}>Add FAQ</button>
        <button className={styles.button}>Themes</button>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Logo and Controls */}
        <div className={styles.header}>
          <div className={styles.logo}>Logo</div>
          <button className={styles.button}>Change Description</button>
          <button className={styles.button}>Create Event</button>
        </div>

        {/* Events Section */}
        <div className={styles.eventsSection}>
          <h3>Events</h3>
          <ul>
            {placeholderData.events.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>

        {/* RSVP Requests Section */}
        <div className={styles.rsvpSection}>
          <h3>RSVP Requests</h3>
          {placeholderData.rsvpRequests.map((request, index) => (
            <div key={index} className={styles.rsvpRequest}>
              <p>{request.name}</p>
              <button className={styles.button}>Accept</button>
              <button className={styles.button}>Decline</button>
            </div>
          ))}
        </div>

        {/* Participating Events */}
        <div className={styles.participatingSection}>
          <h3>Participating Events</h3>
          <ul>
            {placeholderData.participatingEvents.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
