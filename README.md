# Intern Skills Assessment – React, Firebase & GitHub

---

## 1️⃣ Instructions for Interns

### Overview

This assessment is **not an exam** and there is no pass or fail. The goal is simply to understand what you are already comfortable with and where we can support your growth.

### Task: Simple Notes App

Build a small web app using **React**, **Firebase**, and **GitHub**.

### Features

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
* Push your code to GitHub

### Styling

* No design requirements
* Feel free to get creative

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
