# NoticeJS

A small Node.js + Express application for managing notices with file uploads.

## Features
- REST API for creating, reading, updating, and deleting notices
- File upload support (stored in the `uploads/` directory)
- MongoDB persistence via Mongoose

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
- `PORT` - optional server port (defaults to `3000` if not set)

Example `.env`:

```
MONGO_URI=mongodb://localhost:27017/noticejs
PORT=3000
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

## Notes & Next Steps

- Add authentication if you need protected endpoints.
- Consider adding request validation and tests.
- Add pagination and searching for the notices listing.

---

If you'd like, I can add example `curl` requests, API documentation, or create a simple Postman collection next.
