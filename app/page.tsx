"use client";

import { useState } from "react";
import { Moon, Sun, Copy, Loader2 } from "lucide-react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);

  const generateLanding = async () => {
    if (!prompt) return;

    setLoading(true);
    setOutput("");

    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setOutput(data.result);
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <main className={`${dark ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition`}>

      {/* NAVBAR */}
      <nav className="h-16 flex items-center justify-between px-8 sticky top-0 backdrop-blur z-50">
        <h1 className="font-semibold text-lg">AI Builder</h1>

        <div className="flex items-center gap-4">

          {/* DARK MODE */}
          <button onClick={() => setDark(!dark)}>
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:scale-105 transition">
            Generate
          </button>
        </div>
      </nav>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* HERO */}
      <section className="relative text-center py-32 px-6 max-w-4xl mx-auto">

        {/* Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className={`${dark ? "bg-white/10" : "bg-black/10"} w-[500px] h-[300px] blur-3xl rounded-full`} />
        </div>

        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          Build Stunning Landing Pages
          <br />
          <span className="text-gray-500">with AI</span>
        </h1>

        <p className="text-gray-500 mt-6 text-lg">
          Turn your idea into a production-ready UI in seconds
        </p>

        {/* INPUT */}
        <div className={`mt-10 flex items-center border rounded-2xl shadow-lg p-2 max-w-2xl mx-auto ${dark ? "bg-black border-gray-700" : "bg-white"}`}>

          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your product..."
            className="flex-1 px-4 py-3 outline-none bg-transparent"
          />

          <button
            onClick={generateLanding}
            className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition flex items-center gap-2"
          >
            {loading && <Loader2 className="animate-spin" size={16} />}
            Generate
          </button>
        </div>

        {/* TAGS */}
        <div className="flex justify-center gap-6 text-sm text-gray-500 mt-6">
          <span>⚡ Instant UI</span>
          <span>🎨 Clean Design</span>
          <span>🚀 Production Ready</span>
        </div>

      </section>

      {/* OUTPUT */}
      {(output || loading) && (
        <section className="max-w-5xl mx-auto px-6 pb-24">

          <div className={`border rounded-2xl shadow-xl p-8 transition-all ${dark ? "bg-gray-900 border-gray-700" : "bg-white"}`}>

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                Generated Landing Page
              </h2>

              {output && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-black"
                >
                  <Copy size={16} /> Copy
                </button>
              )}
            </div>

            <div className={`${dark ? "bg-black" : "bg-gray-50"} rounded-xl p-6`}>

              {loading ? (
                <div className="flex items-center gap-3 text-gray-500">
                  <Loader2 className="animate-spin" />
                  Generating...
                </div>
              ) : (
                <p className="whitespace-pre-line leading-relaxed">
                  {output}
                </p>
              )}

            </div>

          </div>

        </section>
      )}

      {/* FEATURES */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Everything you need to launch fast
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Instant Generation",
            "Pixel Perfect UI",
            "AI Powered Workflow",
          ].map((item) => (
            <div
              key={item}
              className={`p-6 border rounded-2xl hover:-translate-y-1 transition-all ${dark ? "bg-gray-900 border-gray-700" : "bg-white shadow-sm hover:shadow-xl"}`}
            >
              <h3 className="font-semibold text-lg">{item}</h3>
              <p className="text-gray-500 mt-3 text-sm">
                Build high-quality landing pages in seconds using AI.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 text-center">
        <h2 className="text-3xl font-semibold">
          Ready to build your landing page?
        </h2>

        <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
          Start Generating
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2026 AI Builder
      </footer>

    </main>
  );
}
