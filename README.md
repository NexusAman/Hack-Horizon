# Hack-Horizon

Hack-Horizon is a citizen-centric platform designed to streamline access to various government welfare schemes. It acts as a digital bridge between citizens and public services, allowing users to discover, check eligibility, and apply for available social schemes with ease.

## 🧩 Features

- 📝 **Registration & Login** with OTP verification
- 🗃️ **Available Schemes** section to explore welfare programs
- ✅ **Eligibility Checker** for different schemes
- 📂 **My Applications** to track submitted forms
- 🧠 **AI-Powered Chatbot Assistant** for guidance
- 🌐 Multi-language support for accessibility

## 🏗️ Tech Stack

### Frontend
- HTML, CSS, JavaScript
- Images and assets for schemes like Ayushman Bharat, PM Awas Yojana, and more

### Backend
- Node.js with Express
- Local database for storing user data (`users.db`)
- OTP sending via custom logic (`sendOtp.js`)

## 📦 Folder Structure

Hack-Horizon/ ├── frontend/ # UI and visual assets 
              │ └── assests/images # Scheme and UI images 
              ├── backend/ # Node.js server and logic 
              │ ├── index.js # Entry point for backend 
              │ ├── sendOtp.js # Handles OTP logic 
              │ └── users.db # Local user database 
              └── README.md # Project documentation


## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)

### Installation

#### Backend

```bash
cd backend
npm install
node index.js

cd frontend
live-server  # or open index.html manually
