
# Jashn: Event Manager for Clubs and Societies

## Project Overview

Jashn is a dynamic web application designed to streamline event management for clubs and societies in an educational institution. It serves as a platform where clubs can efficiently create and manage events, and students can RSVP, receive reminders, and participate in fun competitions tracked through a leaderboard.
## Features

### For Clubs:

- Create Events: Add event details such as title, description, date, time, and location.

- Manage Events: Edit or cancel events as needed.

- Track Participation: View the list of students who RSVP'd.

### For Students:

- Browse Events: Explore upcoming events hosted by different clubs.

- RSVP: Register for events and confirm attendance.

- Reminders: Receive email or SMS notifications about upcoming events.

### Leaderboard:

- Participation Points: Students earn points for RSVPing and attending events.

- Gamified Engagement: The leaderboard fosters friendly competition among students.
## Tech Stack

**Frontend**: Next.js for building an interactive user interface.

**Backend**: Firebase for serverless backend operations.

**Database & Storage**: Google Firestore for storing user data, event details, and leaderboard scores.

**Notifications**: Firebase Cloud Messaging for sending email reminders.

**Authentication**: Firebase Authentication for secure user login and registration.
## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Installation and Setup

Clone the repository:

1. git clone https://github.com/your-repo/jashn.git

```bash
cd jashn
```

2. Install dependencies:

```bash
npm install
```

3. Set up the environment variables:

- Create a .env.local file in the root directory.

- Add the following variables:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm run dev
```

5. Open the application in your browser at http://localhost:3000.
## Usage

### Clubs:

1. Sign in to your account.

2. Navigate to the "Create Event" page.

3. Fill in the event details and publish.

4. Monitor RSVPs and manage events through the dashboard.

### Students:

1. Sign up or log in to your account.

2. Browse the "Upcoming Events" section.

3. RSVP to events of interest.

4. Check the leaderboard to track your participation rank.

### Future Enhancements

- Event Feedback: Allow students to rate and review events.

- Push Notifications: Implement mobile push notifications for reminders.

- Admin Panel: Introduce a super admin panel for overseeing platform activity.

- AI Recommendations: Suggest events to students based on their interests and past attendance.


## Contributing

We welcome contributions! To contribute:

Fork the repository.

Create a new branch for your feature or bug fix:

```bash
git checkout -b feature-name
```

Commit your changes and push:

```bash
git commit -m "Add feature-name"
git push origin feature-name
```

Create a pull request on GitHub.
## Authors

- [Debankur Dutta](https://github.com/Debankur04)
- [Snigdho Bachar](https://github.com/Hacks2killsnigdho)
- [Anuska Kapuria](https://github.com/Anuska1312)
- [Debashis Mitra](https://github.com/Debashismitra01)


## Contact

For any inquiries or feedback, reach out to:

Debankur Dutta
- Email: debankurdutta04@gmail.com
- [GitHub](https://github.com/Debankur04)