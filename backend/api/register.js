import { connectDB } from "../utils/db.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const db = await connectDB();
  const registrations = db.collection("registrations");

  const { name, email, eventId } = req.body;
  await registrations.insertOne({ name, email, eventId });
  res.json({ message: "Registered successfully" });
}