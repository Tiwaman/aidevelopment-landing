"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are delivered within 5-7 business days after we finalize the design and content. Simple one-page sites can be ready even faster.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Just your business details, logo (if you have one), text content, and any images you'd like to use. If you don't have content ready, we can help you with that too.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Absolutely! Every website we build is fully responsive and looks great on phones, tablets, and desktops. We test on multiple devices before delivery.",
  },
  {
    question: "What does maintenance include?",
    answer:
      "Maintenance covers content updates, security patches, performance monitoring, bug fixes, and minor feature additions. We provide a custom quote based on your needs — no one-size-fits-all pricing.",
  },
  {
    question: "Do I own the website after it's built?",
    answer:
      "Yes, 100%. You own all the code, design, and content. We'll hand over everything to you, and you're free to host it anywhere you like.",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "Depending on the setup, we can build it so you can make simple content changes yourself. For anything more complex, our maintenance service has you covered.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies like Next.js, React, and Tailwind CSS. This ensures your website is fast, secure, and easy to maintain in the long run.",
  },
  {
    question: "Is there any upfront payment?",
    answer:
      "We typically ask for 50% upfront to begin work, and the remaining 50% upon delivery. This protects both parties and ensures commitment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-gray-900/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Got questions? We&apos;ve got answers. If you don&apos;t see your question
            here, feel free to reach out.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-900/50 transition-colors"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-blue-500 shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
