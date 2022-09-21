import { getProjectPageImage } from "../../../../lib/db-utils/db-project";

const handler = async (req, res) => {
  const { pageId } = req.query;
  const imageData = await getProjectPageImage(pageId);
  await res.send(imageData);
  return res.end();
};

export default handler;
