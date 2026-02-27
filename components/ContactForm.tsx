"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Nachricht gesendet 🤍");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      <input
        type="text"
        placeholder="Name"
        required
        className="w-full p-4 bg-black border border-neutral-800 rounded-lg"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        required
        className="w-full p-4 bg-black border border-neutral-800 rounded-lg"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <textarea
        placeholder="Nachricht"
        required
        className="w-full p-4 bg-black border border-neutral-800 rounded-lg h-32"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button
        type="submit"
        className="px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition"
      >
        Kontakt aufnehmen
      </button>
    </form>
  );
}