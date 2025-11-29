import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Register() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function submit(e) {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_URL}/register`, { name, email, eventId: id })
      .then(() => alert("Registered"));
  }

  return (
    <form onSubmit={submit}>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}