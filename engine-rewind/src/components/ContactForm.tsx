'use client';

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("submitting");

    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name")?.toString().trim();
      const email = formData.get("email")?.toString().trim();
      const phone = formData.get("phone")?.toString().trim();
      const company = formData.get("company")?.toString().trim();
      const details = formData.get("details")?.toString().trim();

      if (!name || !email || !details) {
        throw new Error("Please complete the required fields.");
      }

      await new Promise((resolve) => setTimeout(resolve, 800));

      const companySuffix = company ? ` from ${company}` : "";
      setMessage(
        `Thanks ${name}${companySuffix}, our service coordinator will call you at ${phone || "the number provided"} within one business hour.`
      );
      setFormState("success");
      event.currentTarget.reset();
    } catch (error) {
      const err = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setMessage(err);
      setFormState("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold text-zinc-700">
            Contact Name*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 rounded-md border border-zinc-200 px-4 py-3 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold text-zinc-700">
            Work Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 rounded-md border border-zinc-200 px-4 py-3 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-semibold text-zinc-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 rounded-md border border-zinc-200 px-4 py-3 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="company" className="text-sm font-semibold text-zinc-700">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-2 rounded-md border border-zinc-200 px-4 py-3 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="details" className="text-sm font-semibold text-zinc-700">
          Project Details*
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          className="mt-2 rounded-md border border-zinc-200 px-4 py-3 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          placeholder="Tell us about the motor type, HP, and what symptoms you are seeing."
        />
      </div>
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {formState === "submitting" ? "Sending..." : "Request Emergency Support"}
      </button>
      {message && (
        <p
          className={`text-sm ${
            formState === "success" ? "text-emerald-600" : "text-rose-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
