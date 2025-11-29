import { useEffect, useState } from "react";
import axios from "axios";

export default function Events() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/events`)
      .then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      {data.map(e => (
        <div key={e._id}>
          <h2>{e.title}</h2>
          <p>{e.description}</p>
          <p>{e.date}</p>
          <a href={`/register/${e._id}`}>Register</a>
        </div>
      ))}
    </div>
  );
}