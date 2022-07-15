import formidable from "formidable";
import { addProjectPage } from "../../../lib/db-utils/db-project";

export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};

const handler = async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async function (err, fields, files) {
    if (err) return reject(err);
    console.log(fields);
    const result = await addProjectPage(fields, files);
    res.status(200).json(result);
  });
};

export default handler;
