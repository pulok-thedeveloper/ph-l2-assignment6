# 🚗 RideAxis – Smart Ride Sharing Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://ride-sharing-app-frontend-orcin.vercel.app/)

---

## 🌐 Live Deployment
🔗 **Live App:** [https://ride-sharing-app-frontend-orcin.vercel.app/](https://ride-sharing-app-frontend-orcin.vercel.app/)

---

## 📘 Project Overview
**RideAxis** is a full-featured ride-sharing web application that connects **riders**, **drivers**, and **administrators** in a seamless ecosystem.  
It offers real-time ride management, earnings tracking for drivers, admin analytics, and secure authentication.  
Designed for scalability, clarity, and real-world usability — built using **Next.js**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Key Features

### 🚙 Rider Features
- Create an account and request rides easily.
- Real-time ride tracking and fare estimation.
- View ride history and payment details.
- User-friendly dashboard with ride statistics.

### 🚖 Driver Features
- Accept and complete ride requests.
- Track earnings and completed rides.
- Manage availability (Online/Offline).
- Rating system for service quality.

### 🧑‍💼 Admin Features
- Dashboard analytics with total rides, revenue, and users.
- Manage and monitor drivers and riders.
- Block/unblock users and drivers.
- View platform-wide statistics and reports.

### 🌍 General Features
- JWT-based authentication.
- Responsive design for mobile and desktop.
- Toast notifications using Sonner.
- Sortable and filterable data tables (using ShadCN UI).
- FAQ and contact forms with validation.

---

## 🧩 Technology Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | [ReactJS 19](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [ShadCN/UI](https://ui.shadcn.com/) |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/), RTK Query |
| **Backend** | [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) |
| **Authentication** | JWT |
| **Deployment** | [Vercel](https://vercel.com/) (Frontend, Backend)|

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/pulok-thedeveloper/ph-l2-assignment6
cd ph-l2-assignment6
```

### 2️⃣ Install Dependencies
# Using bun
```bash
bun add
```
# or npm
```bash
npm install
```

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add:

VITE_BASE_URL=http://localhost:5000/api/v1

4️⃣ Run the Development Server
```bash
bun run dev
```

App will be available at 👉 http://localhost:5173