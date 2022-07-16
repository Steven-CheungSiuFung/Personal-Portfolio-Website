import mongoose from "mongoose";
import Project from "../models/project";
import fs from "fs";

export const createProject = async (fields, files) => {
  mongoose.connect(process.env.MONGODB_URL);
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

  if (files.image) {
    project.image.contentType = files.image.mimetype;
    project.image.data = fs.readFileSync(files.image.filepath);
  }
  const result = await project.save();
  return result;
};

export const getProjectsPreview = async () => {
  mongoose.connect(process.env.MONGODB_URL);
  const projects = await Project.find()
    .where("selected")
    .equals(true)
    .select(["name", "description", "tech", "_id"]);
  const projectsData = JSON.parse(JSON.stringify(projects));
  return projectsData;
};

export const getProjectCoverImage = async (projectName) => {
  mongoose.connect(process.env.MONGODB_URL);
  const project = await Project.findOne().where("name").equals(projectName);
  if (project && project.image && project.image.data !== null) {
    return project.image.data;
  }
};

export const getProjectPageImage = async (pageId) => {
  // console.log("PAGE ID ==> ", pageId);
  mongoose.connect(process.env.MONGODB_URL);
  const page = await Project.findOne({
    features: { $elemMatch: { _id: pageId } },
  })
    .select("-image")
    .then((result) => {
      const pageObject = result.features.find(
        (item) => item._id.toString() === pageId
      );
      return pageObject;
    });
  // console.log("PAGE ==> ", page.page);
  if (page && page.image && page.image.data !== null) {
    // console.log("PAGE/ GET IMAGE/ IMAGE TYPE ==>", page.image.contentType);
    return page.image.data;
  }
};

export const getProjectDetials = async (projectId) => {
  mongoose.connect(process.env.MONGODB_URL);
  const project = await Project.findById(projectId).select([
    "-image",
    "-features.image",
  ]);
  const projectData = JSON.parse(JSON.stringify(project));
  return projectData;
};

export const addProjectPage = async (fields, files) => {
  mongoose.connect(process.env.MONGODB_URL);

  const contentArray = JSON.parse(fields.content).map((item) => item.value);

  const newPageData = {
    page: fields.page,
    content: contentArray,
    image: {
      data: {},
      contentType: "",
    },
  };

  if (files.image) {
    newPageData.image.contentType = files.image.mimetype;
    newPageData.image.data = fs.readFileSync(files.image.filepath);
  }

  const project = await Project.findOne({ _id: fields.projectId });
  project.features.push(newPageData);
  const result = await project.save();
  return result;
};
