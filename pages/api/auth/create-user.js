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
  await createUser(formData);
  res.status(201).json({ message: "User Created!" });
};

export default handler;
