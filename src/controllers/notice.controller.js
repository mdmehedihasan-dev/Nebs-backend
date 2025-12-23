import Notice from "../models/Notice.js";
//  =========================Create Notice=========================
 
export const createNotice = async (req, res) => {
  try {
    const files =
      req.files?.map((file) => ({
        fileName: file.originalname,
        fileUrl: `/uploads/${file.filename}`,
      })) || [];

    const notice = await Notice.create({
      ...req.body,
      attachments: files,
    });

    res.status(201).json({
      success: true,
      message: "Notice created successfully",
      data: notice,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ===================== Get All Notices (filter by status)=====================

export const getAllNotices = async (req, res) => {
  try {
    const { status } = req.query;

    const filter = status ? { status } : {};

    const notices = await Notice.find(filter).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: notices,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//  =======================Update Notice Status (Publish / Unpublish)=======================

export const updateNoticeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (status === "draft") {
      return res.status(400).json({
        success: false,
        message: "Draft status cannot be set manually",
      });
    }

    if (!["published", "unpublished"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    const notice = await Notice.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!notice) {
      return res.status(404).json({
        success: false,
        message: "Notice not found",
      });
    }

    res.json({
      success: true,
      message: `Notice ${status} successfully`,
      data: notice,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================Get Single Notice =========================
 
export const getSingleNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);

    if (!notice) {
      return res.status(404).json({ success: false, message: "Notice not found" });
    }

    res.json({ success: true, data: notice });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
