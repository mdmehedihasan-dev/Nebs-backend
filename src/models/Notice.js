import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    targetType: {
      type: String,
      enum: ["individual", "department"],
      required: true,
    },

    noticeTitle: {
      type: String,
      required: true,
      trim: true,
    },

    employeeId: {
      type: String,
      required: true,
    },

    employeeName: {
      type: String,
      required: true,
    },

    position: {
      type: String,
      required: true,
    },

    noticeType: {
      type: String,
      enum: [
        "Warning / Disciplinary",
        "Performance Improvement",
        "Appreciation / Recognition",
        "Attendance / Leave Issue",
        "Payroll / Compensation",
        "Contract / Role Update",
        "Advisory / Personal Reminder",
      ],
      required: true,
    },

    noticeBody: {
      type: String,
      required: true,
    },

    attachments: [
      {
        fileName: String,
        fileUrl: String,
      },
    ],

    status: {
      type: String,
      enum: ["draft", "published", "unpublished"],
      default: "draft",
    },

    publishDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Notice", noticeSchema);
