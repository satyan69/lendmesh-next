'use client';
import { useState } from "react";

const faqs = [
  {
    question: "What is LendMesh?",
    answer:
      "LendMesh is a loan comparison platform that connects borrowers with trusted credit unions and lenders across the USA. We help you find the best loan offers with the lowest interest rates—all in one place, 100% free.",
  },
  {
    question: "How does LendMesh work?",
    answer: "LendMesh compares loan offers from various lenders to help you choose the best option based on your profile and preferences.",
  },
  {
    question: "Does LendMesh provide loans directly?",
    answer: "No, LendMesh is not a lender. We connect you with vetted loan providers through our platform.",
  },
  {
    question: "Is LendMesh free to use?",
    answer: "Yes, LendMesh is 100% free to use. We never charge users for comparing loans.",
  },
];

export default function AboutLendMesh() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) =>
    setOpenIndex(index === openIndex ? null : index);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b pb-4">
          <h4
            className="text-lg font-bold text-[#4296EA] cursor-pointer flex justify-between"
            onClick={() => toggleIndex(index)}
          >
            {faq.question}
            <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
          </h4>
          {openIndex === index && (
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}