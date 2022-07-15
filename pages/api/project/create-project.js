import formidable from "formidable";
import { createProject } from "../../../lib/db-utils/db-project";

export const config = {
  api: {
    bodyParser: false,
    responseLimit: "8mb",
  },
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
