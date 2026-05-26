"use client";

import { useEffect, useState } from "react";

const messages = [
  {
    sender: "client",
    text: "Hi! I need a website for my bakery business 🍰",
    time: "10:30 AM",
  },
  {
    sender: "us",
    text: "Hey! We'd love to help. We can have a modern site ready in 5-7 days at ₹15,000. Want to discuss?",
    time: "10:31 AM",
  },
  {
    sender: "client",
    text: "That's fast! What do I need to provide?",
    time: "10:32 AM",
  },
  {
    sender: "us",
    text: "Just your logo, menu details & some photos. We handle everything else — design, development, hosting setup ✅",
    time: "10:32 AM",
  },
  {
    sender: "client",
    text: "Perfect, let's do it! 🙌",
    time: "10:33 AM",
  },
  {
    sender: "us",
    text: "Done! Your site is live → sweetbakes.in 🚀",
    time: "Day 5",
  },
];

export default function WhatsAppChat() {
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev >= messages.length) {
          setTimeout(() => setVisibleMessages(0), 3000);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl overflow-hidden border border-gray-700/50 bg-gray-900/90 shadow-2xl shadow-green-500/5 h-[300px]">
      {/* WhatsApp header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#1f2c34] border-b border-gray-700/50">
        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
          <span className="text-xs font-bold text-blue-400">Ai</span>
        </div>
        <div>
          <p className="text-sm font-medium text-white">AiDevelopment.in</p>
          <p className="text-xs text-green-400">online</p>
        </div>
      </div>

      {/* Chat body */}
      <div className="p-3 flex-1 bg-[#0b141a] space-y-2 overflow-hidden">
        {messages.slice(0, visibleMessages).map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "us" ? "justify-start" : "justify-end"
            } animate-fade-in`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 rounded-lg text-xs sm:text-sm ${
                msg.sender === "us"
                  ? "bg-[#1f2c34] text-gray-200 rounded-tl-none"
                  : "bg-[#005c4b] text-white rounded-tr-none"
              }`}
            >
              <p>{msg.text}</p>
              <p
                className={`text-[10px] mt-1 text-right ${
                  msg.sender === "us" ? "text-gray-500" : "text-green-300/60"
                }`}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {visibleMessages < messages.length && visibleMessages > 0 && (
          <div className="flex justify-start">
            <div className="bg-[#1f2c34] px-4 py-2 rounded-lg rounded-tl-none">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
