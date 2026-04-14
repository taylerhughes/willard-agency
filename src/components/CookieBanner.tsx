"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[999] max-w-sm w-full animate-[fadeInUp_0.4s_ease-out]">
      <div className="bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
        <p className="text-sm text-gray-400 font-light leading-relaxed mb-4">
          We use cookies to keep our website safe, give you a better experience
          and show more relevant content.
        </p>

        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 bg-gray-600 text-white rounded-full py-2 px-4 text-sm font-medium transition-colors hover:bg-gray-500"
          >
            Accept
          </button>
          <button
            onClick={reject}
            className="flex-1 border border-gray-200 text-gray-600 rounded-full py-2 px-4 text-sm font-medium transition-colors hover:bg-gray-50"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
