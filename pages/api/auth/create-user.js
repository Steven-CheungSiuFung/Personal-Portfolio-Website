import { createUser } from "../../../lib/db-utils/db-project";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(400).json({ message: "Invalid Request" });
    return;
  }
  const formData = req.body;
  if (
    !formData ||
    !formData.email ||
    !formData.password ||
    !formData.secretKey
  ) {
    res.status(400).json({ message: "Invalid Input" });
    return;
  }
  try {
    await createUser(formData);
  } catch (error) {
    return res.status(500).json({ message: "Fail to create user" });
  }
  return res.status(201).json({ ok: true });
};

export default handler;
