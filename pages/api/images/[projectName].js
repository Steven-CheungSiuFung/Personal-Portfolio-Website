import mongoose from "mongoose";
import Project from "../../../lib/models/project";

const handler = async (req, res) => {
  const { projectName } = req.query;
  console.log(projectName);
  mongoose.connect(process.env.MONGODB_URL);
  const project = await Project.findOne().where("name").equals(projectName);
  if (project && project.image && project.image.data !== null) {
    console.log(project.image.contentType);
    return res.send(project.image.data);
  }
};

export default handler;
