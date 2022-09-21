import formidable from "formidable";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]";
import { addProjectPage } from "../../../lib/db-utils/db-project";

export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ message: "You are not authenticated" });
    return;
  }
  const form = new formidable.IncomingForm();

  form.parse(req, async function (err, fields, files) {
    if (err) return reject(err);
    await addProjectPage(fields, files);
    res.status(201).json({ ok: true });
  });
};

export default handler;
