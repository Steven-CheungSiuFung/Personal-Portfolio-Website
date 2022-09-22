import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]";
import { addProjectPage } from "../../../lib/db-utils/db-project";

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ message: "You are not authenticated" });
    return;
  }

  const fields = JSON.parse(req.body);
  await addProjectPage(fields);
  res.status(201).json({ ok: true });
};

export default handler;
