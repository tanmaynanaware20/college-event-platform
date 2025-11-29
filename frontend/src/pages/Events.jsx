import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      {events.map(e => (
        <div key={e._id} className="bg-white p-4 rounded shadow mb-3">
          <h2 className="text-xl font-semibold">{e.title}</h2>
          <p>{e.description}</p>
          <p className="text-sm text-gray-500">{e.date}</p>
        </div>
      ))}
    </div>
  );
}
