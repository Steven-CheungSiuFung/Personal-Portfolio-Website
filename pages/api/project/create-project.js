import formidable from "formidable";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]";
import { createProject } from "../../../lib/db-utils/db-project";

export const config = {
  api: {
    bodyParser: false,
    responseLimit: "8mb",
  },
};

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: "You are not authenticated" });
  }
  const form = new formidable.IncomingForm();

  form.parse(req, async function (err, fields, files) {
    if (err) return reject(err);
    await createProject(fields, files);
    return res.status(201).json({ ok: true });
  });
};

export default handler;
