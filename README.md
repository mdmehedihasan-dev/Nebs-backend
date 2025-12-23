# Nebs Backend

A lightweight Node.js + Express backend application for managing notices, built with MongoDB and Mongoose.  
This service supports creating, publishing, unpublishing, and viewing notices with optional file uploads.

🔗 **Live API URL:** https://nebs-backend.onrender.com

---

## 📌 Overview

Nebs Backend provides a RESTful API to support a Notice Board system (used in NEBS-IT HR/Employee Management frontend).  
It allows administrators to create notices, manage publish status, and fetch notices efficiently.

All core backend requirements — including optional bonus features — have been fully implemented.

---

## 🚀 Features

- Create notices with structured data
- Publish / unpublish notices (status toggle)
- Fetch all notices with status filtering (active / draft)
- View a single notice by ID (bonus feature ✅)
- MongoDB persistence using Mongoose
- File upload support using Multer
- Clean and modular project structure
- Ready for frontend integration

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Multer** (file uploads)
- **dotenv** (environment variables)

---

## 📂 Project Structure



## Project Structure

- `src/` - application source
  - `app.js` - Express app setup
  - `server.js` - server bootstrap
  - `config/db.js` - MongoDB connection
  - `controllers/notice.controller.js` - notice handlers
  - `models/Notice.js` - Mongoose model for notices
  - `routes/notice.routes.js` - API routes
  - `middleware/upload.js` - file upload middleware (multer)
- `uploads/` - uploaded files storage

## Prerequisites
- Node.js 18+ (or compatible)
- MongoDB instance (local or remote)

## Environment

Create a `.env` file in the project root with the following variables:

- `MONGO_URI` - MongoDB connection string (required)
- `PORT` - optional server port (defaults to `5000` if not set)

Example `.env`:

```
MONGO_URI=mongodb://localhost:27017/name
PORT=5000
```

## Install

```bash
npm install
```

## Run

- Start in production mode:

```bash
npm start
```

- Start in development mode (auto-restarts):

```bash
npm run dev
```

The default server entrypoint is `src/server.js` which loads `src/app.js` and connects to MongoDB using `src/config/db.js`.

## API

The app exposes a RESTful API for notices. Example endpoints (adjust if your routes differ):

- `GET /api/notices` - list notices
- `POST /api/notices` - create a notice (supports file upload)
- `GET /api/notices/:id` - get a single notice
- `PUT /api/notices/:id` - update a notice
- `DELETE /api/notices/:id` - delete a notice

Use a tool like `curl` or Postman to interact with the API. When uploading files, use `multipart/form-data`.

## Uploads

Uploaded files are saved to the `uploads/` directory at the project root. Make sure this folder is writable by the process.

👤 Author

Md Mehedi Hasan

Full Stack Developer (MERN Stack)

GitHub: https://github.com/mdmehedihasan-dev

LinkedIn: https://www.linkedin.com/in/mdmehedihasanmr

Email: mdmehedihasandev0@gmail.com

Location: Benarosi Polli, Mirpur 10, Dhaka.



