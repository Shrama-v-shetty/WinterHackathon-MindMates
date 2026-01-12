# MindMates

## Description
The College Counselling & Mental Health Support Portal is a web-based application designed to provide students and teachers with easy, secure, and accessible counselling services within a college environment.
The platform allows users to book counselling appointments, communicate with counsellors through chat or video calls, and receive mental health support anonymously. An AI-powered chatbot is integrated to provide 24/7 assistance when counsellors are unavailable, and emergency support is enhanced using hospital location mapping.
This project aims to reduce barriers to mental health support and promote student well-being.
# Demo Video Link: <insert Google Drive link to the demo video of the working of your project>

## Features
- Role-based login for students, teachers, and counsellors (with anonymous access option)
- Counsellor schedule viewing and appointment booking system
- Real-time chat between users and counsellors
- AI-powered chatbot for 24/7 mental health assistance
- Video call support for counselling sessions
- Counsellor notes and session summary management
- Emergency hospital suggestion with map-based navigation

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend & Services: Firebase
- Database: Firebase Cloud Firestore (NoSQL)
- Authentication: Firebase Authentication
- AI Chatbot: Google Dialogflow
- Maps & Location: Google Maps API
- Video Communication: WebRTC
- Development Environment: Visual Studio Code

## Google Technologies Used
- Firebase Authentication – Used for secure login with Google Sign-In and anonymous authentication.
- Firebase Cloud Firestore – Acts as a real-time NoSQL database to store users, appointments, chat messages, counselling notes, and chatbot logs.
- Firebase Hosting – Used to host and serve the web application securely.
- Google Dialogflow – Powers the AI chatbot to provide mental health guidance, answer queries, and detect emergency situations.
- Google Maps API – Displays nearby hospitals and provides navigation support during emergency situations.
- Google Calendar (via event links) – Enables users to add counselling appointments to their personal calendars.

## Setup Instructions
Steps to run the project locally:
Clone the repository
Copy code
Bash
git clone <repository-url>
Open the project folder in Visual Studio Code
Install Live Server extension in VS Code (for frontend)
Configure Firebase
Create a Firebase project
Enable Authentication (Google & Anonymous)
Create a Firestore database
Add your Firebase configuration in firebase.js
(Optional – for chatbot backend)
Copy code
Bash
npm install
node server.js
Run the frontend
Right-click index.html
Select Open with Live Server

## Team Members
- Nikhitha
- Pooja A P
- Sangeetha
- Shrama V Shetty
