import { getProjectCoverImage } from "../../../lib/db-utils/db-project";

const handler = async (req, res) => {
  const { projectName } = req.query;
  const imageData = await getProjectCoverImage(projectName);
  return res.send(imageData);
};

export default handler;
