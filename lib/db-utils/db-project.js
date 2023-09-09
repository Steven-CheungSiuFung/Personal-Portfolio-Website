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

  return { ok: true };
};

export const getProjectsPreview = async () => {
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

export const getProjectDetials = async (projectId) => {
  try {
    // get project main
    const projectMain =
      await sql`SELECT id, name, description, image, tech, url, frontend, backend FROM project_main WHERE id=${projectId};`;
    const project = projectMain.rows[0];

    const projectData = {
      id: project.id,
      name: project.name,
      description: project.description,
      image: project.image,
      tech: JSON.parse(project.tech),
      url: project.url,
      frontend: JSON.parse(project.frontend),
      backend: JSON.parse(project.backend),
      features: [],
    };
    // get project pages
    const pages =
      await sql`SELECT id, projectId, page, image, content FROM project_detail WHERE projectId=${projectId};`;
    if (pages.rows && pages.rows.length > 0) {
      const projectPages = pages.rows.map((detail) => ({
        id: detail.id,
        projectId: detail.projectId,
        page: detail.page,
        image: detail.image,
        content: JSON.parse(detail.content),
      }));
      projectData.features = projectPages;
    }
    return projectData;
  } catch (error) {
    console.error(error);
    return null;
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

  const { page, content, projectId } = fields;
  const image = fields.imageData.public_id;
  const contentArrayString = JSON.stringify(content.map((item) => item.value));
  const uuid = uuidv4();

  await sql`INSERT INTO project_detail (
      id,
      projectId,
      page,
      image,
      content
  ) VALUES (
      ${uuid},
      ${projectId},
      ${page},
      ${image},
      ${contentArrayString}
  )`;

  return { ok: true };
};

export const createUser = async (userData) => {
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

  return { ok: true };
};

export const getUser = async (userEmail) => {
  const { rows } =
    await sql`SELECT email, password FROM project_user WHERE email=${userEmail};`;
  return rows[0];
};
