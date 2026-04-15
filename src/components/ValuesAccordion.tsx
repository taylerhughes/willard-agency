"use client";

import { useState } from "react";

const VALUES = [
  { title: "Craft over quantity", body: "We'd rather do fewer things brilliantly than many things averagely. Every project gets our full attention." },
  { title: "Honest by default", body: "We tell you what you need to hear, not what you want to hear. It's how we build trust." },
  { title: "Collaboration first", body: "We work with you, not for you. The best results come from genuine partnership." },
  { title: "Always learning", body: "The web moves fast. We stay curious, experiment constantly, and bring fresh thinking to every brief." },
];

export default function ValuesAccordion() {
  const [activeValue, setActiveValue] = useState<number | null>(null);

  return (
    <>
      {VALUES.map((value, i) => (
        <div key={value.title} className="w-full rounded-2xl bg-gray-50 mb-4 lg:rounded-3xl">
          <button
            className="flex justify-between items-center text-left cursor-pointer w-full p-6 focus:outline-none"
            onClick={() => setActiveValue(activeValue === i ? null : i)}
          >
            <h3 className="text-lg tracking-tight text-gray-600 leading-tight text-balance pr-10">
              {value.title}
            </h3>
            <div className={`flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center transition-transform duration-300 ${activeValue === i ? "rotate-180" : ""}`}>
              <svg className="w-3 h-3 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
              </svg>
            </div>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${activeValue === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="w-full pl-6 pb-6 pr-6 lg:pr-28">
              <p className="text-base text-gray-400 font-light leading-7">{value.body}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
