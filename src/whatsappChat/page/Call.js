import React from "react";
import { useNavigate } from "react-router-dom";
import "../whatsapp.css";

/**
 * FIX SUMMARY:
 * ------------
 * ❌ Error cause:
 *    - `calls` array was closed, but EXTRA objects were written outside the array
 *    - This caused: `Missing semicolon` / syntax error
 *
 * ✅ Fix:
 *    - Removed duplicate stray objects
 *    - Kept ONE valid `calls` array
 *    - Code is now valid JSX + TypeScript friendly
 *
 * Status:
 * ✔ Syntax-safe
 * ✔ Build-safe
 * ✔ Avatar supported
 */

// ---------------- ICON COMPONENTS ----------------

function PhoneIcon({ className = "w-6 h-6 fill-green-600" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.59a1 1 0 01-.25 1.01l-2.2 2.19z" />
    </svg>
  );
}

function VideoIcon() {
  return <span className="text-xl"></span>;
}

// ---------------- DATA (SINGLE, VALID ARRAY) ----------------

const calls = [
  {
    name: "Rahul Verma",
    avatar:"image/chat1/1.jpg",
    time: "Today, 13:04",
    type: "out",
  },
  {
    name: "Priya Sharma",
    avatarColor: "#3b82f6",
    time: "Today, 13:00",
    type: "out",
  },
  {
    name: "Aman Singh (2)",
    avatar:"image/chat1/3.jpg",
    time: "Today, 11:38",
    type: "out",
  },
  {
    name: "Rohit Gupta ",
    avatar:"image/chat1/5.jpg",
    time: "16 December, 11:03",
    type: "out",
  },
  {
    name: "Sneha Nair",
    avatar: "https://i.pravatar.cc/150?img=16",
    time: "14 December, 08:42",
    type: "in",
  },
  {
    name: "Sneha Nair",
    avatar: "https://i.pravatar.cc/150?img=16",
    time: "12 December, 11:55",
    type: "missed",
  },
  {
    name: "Arjun Mehta",
    avatar:"image/chat1/6.jpg",
    time: "12 December, 09:36",
    type: "out",
  },
];

// ---------------- MAIN UI ----------------

export default function Call() {
    const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto h-screen bg-white flex flex-col relative">

      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">Calls</h1>
        <div className="flex gap-4 text-gray-600 text-xl">
          <span>
            <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="11" cy="11" r="7" />
  <line x1="16.65" y1="16.65" x2="21" y2="21" />
</svg>

          </span>
          <span>
            <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <circle cx="12" cy="5" r="2" />
  <circle cx="12" cy="12" r="2" />
  <circle cx="12" cy="19" r="2" />
</svg>


          </span>
        </div>
      </div>
       {/* Header */}


      {/* Top Actions */}
      <div className="flex justify-around py-4">
        <Action icon={<span><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8l-1.3 1.3a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 1.8-.6l2.6.4a2 2 0 0 1 1.7 2z"/>
</svg>
</span>} label="Call" />

        <Action icon={<span><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M3 4h18v18H3z"/>
  <path d="M16 2v4M8 2v4M3 10h18"/>
  <path d="M8 14h2M12 14h2M16 14h2M8 18h2M12 18h2"/>
</svg>
</span>} label="Schedule" />

        <Action icon={<span><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <circle cx="6" cy="6" r="1.5"/>
  <circle cx="12" cy="6" r="1.5"/>
  <circle cx="18" cy="6" r="1.5"/>
  <circle cx="6" cy="12" r="1.5"/>
  <circle cx="12" cy="12" r="1.5"/>
  <circle cx="18" cy="12" r="1.5"/>
  <circle cx="6" cy="18" r="1.5"/>
  <circle cx="12" cy="18" r="1.5"/>
  <circle cx="18" cy="18" r="1.5"/>
</svg>
</span>} label="Keypad" />

        <Action icon={<span><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
</svg>
</span>} label="Favorites" />
      </div>

      {/* Recent */}
      <div className="px-4 text-gray-500 font-semibold">Recent</div>

      {/* Call List */}
      <div className="flex-1 overflow-y-auto">
        {calls.map((c, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              {c.avatar ? (
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold"
                style={{ backgroundColor: c.avatarColor }} >
                  {c.name[0]}
                </div>
              )}

              <div>
                <div
                  className={`font-medium ${
                    c.type === "missed" ? "text-red-500" : "text-black"
                  }`}
                >
                  {c.name}
                </div>

                <div className="text-sm text-gray-500 flex items-center gap-1">
                  {c.type === "out" && <span className="text-green-500">↗</span>}
                  {c.type === "in" && <span className="text-green-500">↙</span>}
                  {c.type === "missed" && <span className="text-red-500">↙</span>}
                  {c.time}
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <PhoneIcon />
              <VideoIcon />
            </div>
          </div>
        ))}
      </div>

      {/* Floating Call Button */}
      <div className="absolute bottom-20 right-4">
        <button className="bg-green-500 p-4 rounded-full shadow-lg">
          <PhoneIcon className="w-6 h-6 fill-white" />
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-around border-t py-2 text-gray-500">
        <div>
            <button className="wa-tab active" onClick={() => navigate('/whatsappChat')}>
          <span><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>chat-filled-refreshed</title><path style={{color:"#393939ff"}} fill-rule="evenodd" clip-rule="evenodd" d="M22.0002 6.66667C22.0002 5.19391 20.8062 4 19.3335 4H1.79015C1.01286 4 0.540213 4.86348 0.940127 5.53L3.00016 9V17.3333C3.00016 18.8061 4.19406 20 5.66682 20H19.3335C20.8062 20 22.0002 18.8061 22.0002 17.3333V6.66667ZM7.00016 10C7.00016 9.44772 7.44787 9 8.00016 9H17.0002C17.5524 9 18.0002 9.44772 18.0002 10C18.0002 10.5523 17.5524 11 17.0002 11H8.00016C7.44787 11 7.00016 10.5523 7.00016 10ZM8.00016 13C7.44787 13 7.00016 13.4477 7.00016 14C7.00016 14.5523 7.44787 15 8.00016 15H14.0002C14.5524 15 15.0002 14.5523 15.0002 14C15.0002 13.4477 14.5524 13 14.0002 13H8.00016Z" fill="currentColor"></path></svg></span>
          <span>Chats</span>
        </button></div>

        <div>
            <button className="wa-tab">
          <span><img src="https://cdn-icons-png.flaticon.com/512/12595/12595841.png" alt="" style={{width:"25px"}}/></span>
          <span>Updates</span>
        </button></div>

        <div>
            <button className="wa-tab">
          <span><img src="https://cdn-icons-png.flaticon.com/512/9581/9581138.png" alt="" style={{width:"25px"}}/></span>
          <span>Communities</span>
        </button>
        </div>

        <div className="text-green-600 font-semibold"> <button className="wa-tab">
          <span><img src="https://cdn-icons-png.flaticon.com/512/14276/14276763.png" alt="" style={{width:"25px"}}/></span>
          <span>Calls</span>
        </button></div>
      </div>
    </div>
  );
}

// ---------------- REUSABLE ACTION ----------------

function Action({ icon, label }) {
  return (
    <div className="flex flex-col items-center text-gray-600">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm mt-1">{label}</span>
    </div>
  );
}
