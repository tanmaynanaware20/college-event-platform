import { connectDB } from "../utils/db.js";

export default async function handler(req, res) {
  const db = await connectDB();
  const events = db.collection("events");

  if (req.method === "GET") return res.json(await events.find().toArray());

  if (req.method === "POST") {
    const { title, description, date } = req.body;
    await events.insertOne({ title, description, date });
    return res.json({ message: "Event created" });
  }
  res.status(405).end();
}