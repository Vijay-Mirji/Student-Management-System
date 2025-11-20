# Student Management System

A comprehensive and robust Student Management System designed to streamline academic and administrative processes. This platform provides a centralized and efficient solution for managing student data, tracking performance, and facilitating communication between students, faculty, and administrators.

---

## ✨ Features

*   **Role-Based Access Control:** Secure login and distinct dashboards for Administrators, Faculty, and Students.
*   **Student Information Management:** Centralized database for all student records, including personal details and academic performance.
*   **Attendance Tracking:** Real-time attendance management and reporting.
*   **Marks & Grades:** Module for entering and viewing student marks.
*   **Course Materials:** Faculty can upload and share course materials with students.
*   **Timetable Management:** Easy creation and access to class schedules.
*   **Notices & Announcements:** A digital notice board for important updates.
*   **Branch & Subject Management:** Administrative control over academic structure.

---

## 🛠️ Tech Stack

*   **Frontend:** React, Redux, Tailwind CSS
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB
*   **Authentication:** JSON Web Tokens (JWT)

---

## 📂 Folder Structure

```
/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── database/
│   ├── media/
│   ├── index.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── redux/
    │   ├── Screens/
    │   ├── App.js
    │   └── index.js
    └── package.json
```

---

## 🚀 Setup Instructions

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Student-Management-System
```

### 2. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
MONGODB_URI = mongodb://127.0.0.1:27017/Student-Management-System
PORT = 4000
FRONTEND_API_LINK = http://localhost:3000
JWT_SECRET = THISISSECRET

NODEMAILER_EMAIL =
NODEMAILER_PASS =
```

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_APILINK = http://localhost:4000/api
REACT_APP_MEDIA_LINK = http://localhost:4000/media
```

### 4. Start the Development Servers

```bash
# Start backend server (from backend directory)
npm run dev

# Start frontend server (from frontend directory)
npm start
```

### 5. Initial Admin Setup

Create a default admin account using the seeder script.

```bash
# From the backend directory
cd backend
npm run seed
```

This will create a default admin account with the following credentials:
*   **Employee ID:** `100`
*   **Password:** `password`
*   **Email:** `johndoe@mail.com`
