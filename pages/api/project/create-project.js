import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]";
import { createProject } from "../../../lib/db-utils/db-project";

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: "You are not authenticated" });
  }
  try {
    const fields = JSON.parse(req.body);
    await createProject(fields);
    return res.status(201).json({ ok: true });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export default handler;
