# Free Online Examination System for Schools

A completely free, modern, responsive online test platform built with HTML, CSS, JavaScript and Firebase (Free Tier).

## Features

### Teacher Portal
- Secure login
- Create / Edit / Delete / Publish tests
- MCQ, True/False, Fill-in-the-Blanks, Short Answer, Long Answer
- Set marks, duration, start/end time
- Shuffle questions & options
- Preview test
- View all submissions & scores
- Export results to Excel (.xlsx) and CSV
- Search, filter, sort results
- Dashboard with analytics
- School logo upload
- Announcements
- Performance charts

### Student Portal
- Login with Roll Number + Password
- Dashboard of available tests
- One question at a time + Next/Previous
- Live countdown timer + Auto-submit
- Prevent multiple submissions
- Instant score for objective questions (teacher can hide)
- Profile page

### Tech Stack (100% Free)
- HTML5 + CSS3 + Vanilla JavaScript
- Firebase Authentication (Free)
- Cloud Firestore (Free Tier)
- Firebase Storage (Free Tier)
- Firebase Hosting or GitHub Pages
- SheetJS (xlsx) for Excel export
- Chart.js for analytics

## Quick Start

### 1. Create Firebase Project
1. Go to https://console.firebase.google.com
2. Create a new project (free plan)
3. Enable Authentication → Sign-in method → Email/Password
4. Create Firestore Database (start in production mode)
5. Enable Storage
6. Go to Project Settings → General → Your apps → Web app → Register app
7. Copy the firebaseConfig object

### 2. Configure the Project
Open js/firebase-config.js and paste your config.

### 3. Deploy Security Rules
In Firebase Console → Firestore → Rules, paste the content of firestore.rules.

### 4. Create First Teacher Account
Open the website → Teacher Login → Register as Teacher.

### 5. Hosting (Free)
Firebase Hosting or GitHub Pages.

## Database Structure (Firestore)

users/{uid}
  role, name, email, rollNumber, class, section, createdAt

tests/{testId}
  title, description, duration, startTime, endTime, shuffleQuestions, shuffleOptions, showScoreImmediately, totalMarks, createdBy, createdAt, published, instructions

questions/{questionId}
  testId, type, text, options, correctAnswer, marks, order

submissions/{submissionId}
  testId, studentId, studentName, rollNumber, class, section, answers, score, totalMarks, percentage, status, submittedAt, timeTaken

announcements/{id}
  title, message, createdBy, createdAt

## Student Login
Students login with Roll Number as username and password set by teacher.

Enjoy your free online examination system!
