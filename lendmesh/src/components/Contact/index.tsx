"use client";

import { useRef, useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "./actions/contact";
import ReCAPTCHA from "react-google-recaptcha";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-800 transition"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function Contact() {
  const [message, setMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  async function handleSubmit(formData: FormData) {
    if (!recaptchaToken) {
      setMessage("Please complete the reCAPTCHA verification.");
      return;
    }

    formData.append("recaptcha", recaptchaToken);

    const result = await submitContactForm(formData);
    if (result.success) {
      setMessage(
        "Thank you for showing your interest. We'll get back to you soon!"
      );
      formRef.current?.reset();
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } else if (result.errors) {
      setMessage("Please correct the errors in the form.");
    } else {
      setMessage(result.error || "An error occurred. Please try again.");
    }
  }

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Get In Touch With Us
      </h2>
      {message && (
        <div className="mb-12 text-sm font-medium text-green-500 dark:text-green-400">
          {message}
        </div>
      )}
      <form className="space-y-4" action={handleSubmit} ref={formRef}>
        <div className="flex gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-1/2 px-4 py-2 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-1/2 px-4 py-2 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <input
          type="text"
          name="contact"
          placeholder="Subject"
          className="w-full px-4 py-2 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <textarea
          rows={4}
          name="message"
          placeholder="Message"
          className="w-full px-4 py-2 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        ></textarea>
        <div className="w-full px-4">
          <div className="mb-8">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeQXpAqAAAAAPvMHaBNwODCiYltSqtHUZ8FbPmm"
              onChange={handleRecaptchaChange}
              className="origin-center scale-75 transform sm:scale-100"
            />
          </div>
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}
