# Intern Skills Assessment – React, Firebase & GitHub

---

## 1️⃣ Instructions for Interns (Send This As‑Is)

### Overview

This assessment is **not an exam** and there is no pass or fail. The goal is simply to understand what you are already comfortable with and where we can support your growth.

You are encouraged to:

* Google things
* Use documentation
* Take your time and think clearly

### Task: Simple Notes App

Build a small web app using **React**, **Firebase**, and **GitHub**.

### Features (Keep It Simple)

Your app should allow a user to:

1. Sign up / log in using email and password
2. Add a short text note
3. See a list of their notes
4. Log out

No editing or deleting is required.

### Technical Requirements

#### React

* Use React functional components
* Use `useState` (and `useEffect` if needed)
* Split your app into **at least 2 components**

#### Firebase

* Use Firebase Authentication (email & password)
* Use Firestore to store notes
* Notes should belong to the logged‑in user

#### GitHub

* Use the provided starter repository
* Make **at least 3 commits** with meaningful messages
* Push your code to GitHub

### Styling

* No design requirements
* Basic layout is fine
* Focus on functionality, not appearance

### Time

* You have **3–4 hours** to work on this

### Submission

* Push your final code to GitHub
* Make sure your README explains how to run the project

---

## 2️⃣ Starter Repository README (Include This in the Repo)

# Simple Notes App

## Project Description

This is a simple React application that allows users to sign up, log in, and create personal notes using Firebase Authentication and Firestore.

## Tech Stack

* React
* Firebase Authentication
* Firebase Firestore

## Features

* Email & password authentication
* Create notes
* View notes for the logged‑in user

## Setup Instructions

1. Clone this repository
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a Firebase project
4. Enable **Email/Password Authentication**
5. Create a **Firestore database**
6. Add your Firebase config to `src/firebase.js`
7. Run the app:

   ```bash
   npm run dev
   ```

## Folder Structure (Suggested)

```
src/
  components/
  pages/
  firebase.js
```

## Notes

This project is for skills assessment purposes and focuses on functionality rather than design.

---

## 3️⃣ Simple Grading Sheet (For Internal Use)

### React (10 points)

* Components split logically (3)
* Correct use of `useState` / hooks (4)
* Code readability & structure (3)

### Firebase (10 points)

* Authentication works (4)
* Notes saved & fetched from Firestore (4)
* Basic error or loading handling (2)

### GitHub (10 points)

* Multiple meaningful commits (4)
* Clean repo structure (3)
* Clear README & setup steps (3)

### Total: /30

### Notes Section

* Strengths:
* Areas for improvement:
* Overall confidence level:

---

## 4️⃣ Post‑Assessment Questions (Ask Each Intern)

1. Can you walk me through your app?
2. What part felt easiest for you?
3. What part was most confusing?
4. If you had more time, what would you improve?

These answers matter as much as the code.
