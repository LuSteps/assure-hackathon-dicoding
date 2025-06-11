"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Terima kasih! Data berhasil dikirim.");
      setFormData({ nama: "", email: "", phone: "" });
    } else {
      setStatus("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div className="w-full flex justify-center items-center py-20">
      <div className="bg-white/80 p-8 rounded-xl shadow-lg w-full max-w-xl">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-black">Let’s get </span>
            <span className="text-[#74846A]">involved</span>
          </h2>
          <p className="text-gray-700">
            Join us to be involved in helping countless of others
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 relative">
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
            placeholder="Nama"
            className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-500"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="No. Telepon"
            className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-500"
          />

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-[#74846A] text-white px-6 py-2 rounded-[12px] hover:bg-[#5f725d] transition"
            >
              Submit
            </button>
          </div>

          {status && (
            <p className="text-sm text-green-600 mt-2 absolute -bottom-6 left-0">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
