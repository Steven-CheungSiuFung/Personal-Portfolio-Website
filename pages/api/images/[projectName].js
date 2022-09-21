import { getProjectCoverImage } from "../../../lib/db-utils/db-project";

const handler = async (req, res) => {
  const { projectName } = req.query;
  const imageData = await getProjectCoverImage(projectName);
  await res.send(imageData);
  return res.end();
};

export default handler;
