import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) return reject(err);
    console.log(fields, files);
    res.status(200).json({ fields, files });
  });
};

export default handler;
