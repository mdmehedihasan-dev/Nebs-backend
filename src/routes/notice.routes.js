import express from "express";
import {
  createNotice,
  getAllNotices,
  updateNoticeStatus,
  getSingleNotice,
} from "../controllers/notice.controller.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.array("attachments"), createNotice);
router.get("/", getAllNotices);
router.patch("/status/:id", updateNoticeStatus);
router.get("/:id", getSingleNotice); 

export default router;
