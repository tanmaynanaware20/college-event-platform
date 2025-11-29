import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { connectDB } from "../utils/db.js";

export default async function handler(req, res) {
  const db = await connectDB();
  const users = db.collection("users");

  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = await users.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    return res.json({ token, role: user.role });
  }
  res.status(405).end();
}