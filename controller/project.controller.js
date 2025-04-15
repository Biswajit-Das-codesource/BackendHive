import { usermodel } from "../models/user.model.js";

export async function handleCreateProject(req, res) {
  const { title, description, contributor } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      message: "All fields required",
      success: false,
    });
  }

  if (!Array.isArray(contributor)) {
    return res.status(400).json({
      message: "Received array of data only",
      success: false,
    });
  }
  let note = "you are invited";

  await Promise.all(
    contributor.map((user) => {
     return usermodel.findByIdAndUpdate(user._id, {
        $push: { pendingInvites: note },
      });
    })
  );

  return res.status(201).json({
    message: "Project created and contributors notified",
    success: true
  });
}
