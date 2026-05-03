"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleGenerate = () => {
    if (!input) return;

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setResult({
         title: `🚀 ${input} powered by AI`,
         description: `Transform your ${input} idea into a high-converting landing page instantly using AI.`,
         cta: "Start Free Trial",
    });

      setLoading(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
        Build Stunning Landing Pages with AI
      </h1>

      <p className="text-gray-500 mb-8 text-center">
        Turn your idea into a production-ready UI in seconds
      </p>

      {/* INPUT */}
      <div className="flex w-full max-w-2xl gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your product..."
          className="flex-1 border-2 border-black rounded-xl px-4 py-3 outline-none"
        />

        <button
          onClick={handleGenerate}
  disabled={loading}
  className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 disabled:opacity-50"
>
  {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {/* RESULT CARD */}
      {result && (
        <div className="mt-10 w-full max-w-2xl border rounded-xl p-6 shadow-lg bg-gray-50 transition-all duration-500 ease-in-out animate-fadeIn">
          <h2 className="text-2xl font-bold mb-3">{result.title}</h2>
          <p className="text-gray-600 mb-4">{result.description}</p>

          <button className="bg-black text-white px-5 py-2 rounded-lg">
            {result.cta}
          </button>
          <button
  onClick={() => {
    navigator.clipboard.writeText(
      `${result.title}\n${result.description}`
    );
    alert("Copied!");
  }}
  className="ml-3 border px-4 py-2 rounded-lg"
>
  Copy
</button>

        </div>
      )}
    </main>
  );
}
