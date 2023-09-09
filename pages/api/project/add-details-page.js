import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]";
import { addProjectPage } from "../../../lib/db-utils/db-project";

const handler = async (req, res) => {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ message: "You are not authenticated" });
    }

    const fields = JSON.parse(req.body);
    await addProjectPage(fields);
    return res.status(201).json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Fail to add page" });
  }
};

export default handler;
