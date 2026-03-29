import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HackingHome() {
  const navigate = useNavigate();

  const [hash, setHash] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  const generateHash = () => {
    const chars = "abcdef0123456789";
    let result = "";
    for (let i = 0; i < 16; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += 1;
      setProgress(value);
      if (value >= 100) {
        clearInterval(interval);
        setHash(generateHash());
        setTimeout(() => setLoading(false), 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // 🔄 Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0f2a] text-white px-6">
        <h2 className="text-xl font-bold mb-4 text-pink-500">Initializing System...</h2>
        <div className="w-full max-w-xs h-3 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-400 transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-400">Loading {progress}%</p>
      </div>
    );
  }

  // ✅ Main Page
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f2a] to-[#0a0a14] flex justify-center px-4 py-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-pink-500 text-xl font-bold">Hacking Pro max ++</h1>
          <p className="text-white text-lg mt-2">Hacking App New Upgraded Pro Version</p>
          <p className="text-green-400 text-sm mt-1">{hash}</p>
        </div>

        {/* Version Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex justify-center py-3">
            <div className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="logo"
                className="w-10 h-10"
              />
            </div>
          </div>

          <h2 className="text-center font-semibold text-lg mb-3">Version 3.2 Pro max ++</h2>

          {/* Inner Dark Card */}
          <div className="mx-4 mb-4 rounded-2xl bg-[#0f1226] p-2 text-sm">
            <div className="flex items-center gap-2 mb-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="whatsapp"
                className="w-6 h-6"
              />
              <h3 className="text-white font-semibold text-base">Whatsapp Hacking App</h3>
            </div>

            <ul className="space-y-2 text-sky-400">
              <li>* 3 Month old Whatsapp Chat (Videos, Images, Voice Call Recording + Video Call Recording + All Chat) and Deleted Chat</li>
              <li>* Hack Any Whatsapp Account Without Otp</li>
              <li>* Maximum 15 Account Hack per day</li>
              <li>* Live Location Track</li>
              <li>* Victim's complete OTP system in your hands</li>
              <li>* You can see all the INBOX sms sent by Victim</li>
            </ul>

            <div className="mt-3 space-y-1 text-red-500 font-semibold">
              <p>* New</p>
              <p>* New</p>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="flex items-center justify-between px-4 py-4 border-t">
            <div className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="icon"
                className="w-8 h-8"
              />
              <div>
                <p className="text-green-500 font-semibold">Whatsapp Hack</p>
                <p className="text-xs text-gray-500">Try Now</p>
              </div>
            </div>

            <button
              className="bg-emerald-400 hover:bg-emerald-500 text-white px-5 py-2 rounded-lg shadow"
              onClick={() => navigate('/number')}
            >
              Hack Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
