# Modern MERN Portfolio

A fully responsive, full-stack personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js).

## Features
- **Modern UI/UX**: Built with React, Tailwind CSS, and Framer Motion.
- **Responsive Design**: Looks great on all devices.
- **Admin Panel**: Manage projects and view messages (protected route).
- **Dynamic Content**: Projects and messages are stored in MongoDB.
- **Contact Form**: Functional contact form.

## Quick Start (Recommended)

1. **Install Dependencies**:
   Run this command in the root directory (`/Users/ayushkumar/Desktop/portfolio`):
   ```bash
   npm run setup
   ```
   *Note: This will install root dependencies, client dependencies, and server dependencies automatically.*

2. **Start the App**:
   Run this command to start both backend and frontend servers:
   ```bash
   npm start
   ```
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:5000`

## Project Structure
- `client/`: React frontend (Vite)
- `server/`: Node.js/Express backend

## Manual Setup Instructions (Alternative)

### 1. Backend Setup
Navigate to the `server` directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory with the following content:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio 
JWT_SECRET=your_secret_key_here
```

Start the server:
```bash
npm run dev
```

### 2. Frontend Setup
Navigate to the `client` directory and install dependencies:
```bash
cd client
npm install
```

Start the development server:
```bash
npm run dev
```

### 3. Creating an Admin User
To access the admin panel at `/admin`, register a user via API:
`POST http://localhost:5000/api/auth/register`
Body:
```json
{
  "username": "admin",
  "password": "yourpassword"
}
```

## Tech Stack
- MongoDB, Express, React, Node.js
- Tailwind CSS, Framer Motion
- Axios, React Router DOM, React Icons
