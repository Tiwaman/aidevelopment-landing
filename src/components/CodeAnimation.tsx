"use client";

import { useEffect, useState } from "react";

// Each entry is one line, with multiple colored segments
const codeLines: { text: string; color: string }[][] = [
  [
    { text: "const ", color: "text-purple-400" },
    { text: "website", color: "text-blue-300" },
    { text: " = ", color: "text-white" },
    { text: "create", color: "text-yellow-300" },
    { text: "({", color: "text-white" },
  ],
  [
    { text: '  name: ', color: "text-blue-300" },
    { text: '"Your Business"', color: "text-green-400" },
    { text: ",", color: "text-white" },
  ],
  [
    { text: '  style: ', color: "text-blue-300" },
    { text: '"modern"', color: "text-green-400" },
    { text: ",", color: "text-white" },
  ],
  [
    { text: "  responsive: ", color: "text-blue-300" },
    { text: "true", color: "text-orange-400" },
    { text: ",", color: "text-white" },
  ],
  [
    { text: "  seo: ", color: "text-blue-300" },
    { text: "true", color: "text-orange-400" },
    { text: ",", color: "text-white" },
  ],
  [
    { text: '  delivery: ', color: "text-blue-300" },
    { text: '"7 days"', color: "text-green-400" },
    { text: ",", color: "text-white" },
  ],
  [{ text: "});", color: "text-white" }],
  [],
  [{ text: "// ✓ Deployed successfully!", color: "text-green-500" }],
  [{ text: "// → yoursite.com is live 🚀", color: "text-green-500" }],
];

export default function CodeAnimation() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          setTimeout(() => setVisibleLines(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl overflow-hidden border border-gray-700/50 bg-gray-900/90 shadow-2xl shadow-blue-500/5 h-[280px]">
      {/* Editor top bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-800/80 border-b border-gray-700/50">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-gray-500 ml-2 font-mono">
          build-website.js
        </span>
      </div>

      {/* Code content */}
      <div className="p-4 font-mono text-xs sm:text-sm leading-6 overflow-hidden">
        {codeLines.slice(0, visibleLines).map((line, index) => (
          <div key={index} className="flex animate-fade-in">
            <span className="text-gray-600 w-5 text-right mr-3 select-none text-xs shrink-0">
              {index + 1}
            </span>
            <span>
              {line.map((segment, i) => (
                <span key={i} className={segment.color}>
                  {segment.text}
                </span>
              ))}
              {index === visibleLines - 1 && (
                <span className="inline-block w-1.5 h-4 bg-blue-500 ml-0.5 animate-pulse align-middle" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
