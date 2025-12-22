import express from "express";
import cors from "cors";
import noticeRoutes from "./routes/notice.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/notices", noticeRoutes);

export default app;
