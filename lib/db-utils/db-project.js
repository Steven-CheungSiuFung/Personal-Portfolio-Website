import mongoose from "mongoose";
import Project from "../models/project";
import User from "../models/user";
import { hashPassword } from "../auth/auth";
import { v4 as uuidv4 } from "uuid";
import { sql } from "@vercel/postgres";

const cloudinary = require("cloudinary").v2;

const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

export const createProject = async (fields) => {
  const expectedSignature = cloudinary.utils.api_sign_request(
    {
      public_id: fields.imageData.public_id,
      version: fields.imageData.version,
    },
    cloudinaryConfig.api_secret
  );

  if (expectedSignature !== fields.imageData.signature) {
    throw new Error("signature not match!");
  }

  const { name, description, tech, selected, frontend, backend } = fields;
  const image = fields.imageData.public_id;
  const techArrayString = JSON.stringify(tech);
  const frontendArrayString = JSON.stringify(
    frontend.map((item) => item.value)
  );
  const backendArrayString = JSON.stringify(backend.map((item) => item.value));
  const uuid = uuidv4();
  const url = "";

  await sql`INSERT INTO project_main (
      id,
      name,
      description,
      image,
      tech, 
      frontend,
      backend,
      url,
      selected
  ) VALUES (
      ${uuid},
      ${name},
      ${description},
      ${image},
      ${techArrayString},
      ${frontendArrayString},
      ${backendArrayString},
      ${url},
      ${selected}
  );`;

  // let formData = {
  //   name: name,
  //   description: description,
  //   image: fields.imageData.public_id,
  //   tech: JSON.stringify(tech),
  //   frontend: JSON.stringify(frontendArray),
  //   backend: JSON.stringify(backendArray),
  //   selected: selected,
  // };

  // const db = await mongoose.connect(process.env.MONGODB_URL);
  // let project = new Project(formData);

  // const result = await project.save();
  // db.disconnect();
  return { ok: true };
};

export const getProjectsPreview = async () => {
  // const db = await mongoose.connect(process.env.MONGODB_URL);
  // const projects = await Project.find()
  //   .where("selected")
  //   .equals(true)
  //   .select(["name", "description", "tech", "_id", "image"]);
  // db.disconnect();
  // const projectsArray = JSON.parse(JSON.stringify(projects));
  // const projectsData = [];
  // for (let i = projectsArray.length; i > 0; i--) {
  //   projectsData.push(projectsArray[i - 1]);
  // }
  const { rows } =
    await sql`SELECT id, name, description, image, tech FROM project_main WHERE selected=true;`;
  const projectsPreviewArray = rows.map((project) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    image: project.image,
    tech: JSON.parse(project.tech),
  }));
  return projectsPreviewArray;
};

export const getAllProjectsPreview = async () => {
  // const db = await mongoose.connect(process.env.MONGODB_URL);
  // const projects = await Project.find().select([
  //   "name",
  //   "description",
  //   "tech",
  //   "_id",
  //   "image",
  // ]);
  // db.disconnect();
  // const projectsArray = JSON.parse(JSON.stringify(projects));
  // const projectsData = [];
  // for (let i = projectsArray.length; i > 0; i--) {
  //   projectsData.push(projectsArray[i - 1]);
  // }
  const { rows } =
    await sql`SELECT id, name, description, image, tech FROM project_main;`;
  const projectsPreviewArray = rows.map((project) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    image: project.image,
    tech: JSON.parse(project.tech),
  }));
  return projectsPreviewArray;
};

// export const getProjectCoverImage = async (projectName) => {
//   const db = await mongoose.connect(process.env.MONGODB_URL);
//   const project = await Project.findOne().where("name").equals(projectName);
//   if (project && project.image && project.image.data !== null) {
//     db.disconnect();
//     return project.image.data;
//   } else {
//     db.disconnect();
//     throw new Error("Image not found");
//   }
// };

// export const getProjectPageImage = async (pageId) => {
//   const db = await mongoose.connect(process.env.MONGODB_URL);
//   const page = await Project.findOne({
//     features: { $elemMatch: { _id: pageId } },
//   })
//     .select("-image")
//     .then((result) => {
//       const pageObject = result.features.find(
//         (item) => item._id.toString() === pageId
//       );
//       return pageObject;
//     });
//   if (page && page.image && page.image.data !== null) {
//     db.disconnect();
//     return page.image.data;
//   } else {
//     db.disconnect();
//     throw new Error("Image not found");
//   }
// };

export const getProjectDetials = async (projectId) => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);
    const project = await Project.findById(projectId).select([
      "-__v",
      "-updatedAt",
      "-createdAt",
    ]);
    const projectData = JSON.parse(JSON.stringify(project));
    db.disconnect();
    return projectData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addProjectPage = async (fields) => {
  const expectedSignature = cloudinary.utils.api_sign_request(
    {
      public_id: fields.imageData.public_id,
      version: fields.imageData.version,
    },
    cloudinaryConfig.api_secret
  );

  if (expectedSignature !== fields.imageData.signature) {
    throw new Error("signature not match!");
  }

  const contentArray = fields.content.map((item) => item.value);

  const newPageData = {
    page: fields.page,
    content: contentArray,
    image: fields.imageData.public_id,
  };

  const db = await mongoose.connect(process.env.MONGODB_URL);
  const project = await Project.findOne({ _id: fields.projectId });
  project.features.push(newPageData);
  const result = await project.save();
  db.disconnect();
  return result;
};

export const createUser = async (userData) => {
  // const db = await mongoose.connect(process.env.MONGODB_URL);
  try {
    const { email, password, secretKey } = userData;
    const isSecretKeyMatch = secretKey === process.env.SECRET_KEY;
    if (!isSecretKeyMatch) {
      throw new Error("Secret Key Not Match!");
    }
    const hashedPassword = await hashPassword(password);
    const uuid = uuidv4();

    await sql`INSERT INTO project_user (
        id,
        email,
        password
    ) VALUES (
        ${uuid},
        ${email},
        ${hashedPassword}
    );`;
  } catch (error) {
    throw new Error(error);
  }

  // const user = new User(newUser);
  // const result = await user.save();
  // db.disconnect();
  return { ok: true };
};

export const getUser = async (userEmail) => {
  // const db = await mongoose.connect(process.env.MONGODB_URL);
  // const user = await User.findOne({ email: userEmail });
  // db.disconnect();
  const { rows } =
    await sql`SELECT email, password FROM project_user WHERE email=${userEmail};`;
  return rows[0];
};
