"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("http://localhost:1337/api/contact-messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: form,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Have a question or want to work with us? Fill out the form below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Messages */}
          {success && (
            <p className="text-green-600 text-center font-medium">
              ✅ Message sent successfully!
            </p>
          )}

          {error && (
            <p className="text-red-600 text-center font-medium">
              ❌ {error}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
