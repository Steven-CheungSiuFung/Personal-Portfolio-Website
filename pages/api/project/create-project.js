import formidable from "formidable";
import mongoose from "mongoose";
import Project from "../../../lib/models/project";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const createProject = async (fields, files) => {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("Fields ==> ", fields);
  const { name, description, tech, selected, frontend, backend } = fields;
  const frontendArray = JSON.parse(frontend).map((item) => item.value);
  const backendArray = JSON.parse(backend).map((item) => item.value);
  const techArray = tech.split(",");

  let formData = {
    name: name,
    description: description,
    tech: techArray,
    selected: selected,
    frontend: frontendArray,
    backend: backendArray,
    features: [],
  };
  let project = new Project(formData);
  console.log("project ==> ", project);

  if (files.image) {
    project.image.contentType = files.image.mimetype;
    project.image.data = fs.readFileSync(files.image.filepath);
  }
  const result = await project.save();
  return result;
};

const handler = async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) return reject(err);
    const result = await createProject(fields, files);
    res.status(200).json(result);
  });
};

export default handler;
