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

function PhoneIcon({ className = "w-6 h-6 fill-black-600" }) {
  return (

    <span> <img
        src="whatsappicon/callicon.png"
        alt="video icon"
        className="w-6 h-6"
      /></span>
  );
}


function VideoIcon() {
  return <span className="text-xl">  </span>;
}

// ---------------- DATA (SINGLE, VALID ARRAY) ----------------

const calls = [
  {
    name: "Garima Sethi",
    avatarColor: "#6366f1",
    time: "Today, 13:04",
    type: "out",
  },
  {
    name: "Piyush Ahuja",
    avatar:"image/page2/3.jpg",
    time: "Today, 13:00",
    type: "out",
  },
  {
    name: "Piyush Ahuja",
    avatar:"image/page2/3.jpg",
    time: "Today, 13:50",
    type: "in",
  },
  {
    name: "Piyush Ahuja (2)",
    avatar:"image/page2/3.jpg",
    time: "Today, 11:38",
    type: "in",
  },
  {
    name: "Garima Sethi ",
    avatarColor: "#6366f1",
    time: "16 December, 11:03",
    type: "out",
  },
  {
    name: "Garima Sethi",
    avatarColor: "#6366f1",
    time: "15 December, 08:42",
    type: "in",
  },
  {
    name: "Naveen Chandra",
    avatar: "https://i.pravatar.cc/150?img=8",
    time: "15 December, 11:55",
    type: "missed",
  },
  {
    name: "Akash Tomer",
    avatar:"image/chat1/6.jpg",
    time: "12 December, 11:36",
    type: "in",
  },
   {
    name: "Varun Bajaj",
    avatar:"image/page2/7.jpg",
    time: "14 December, 09:36",
    type: "out",
  },
   {
    name: "Dev Sharma",
    avatar:"image/page2/4.jpg",
    time: "14 December, 10:36",
    type: "out",
  },
   {
    name: "Anjali Rawat",
   avatarColor: "#14b8a6",
    time: "13 December, 11:36",
    type: "out",
  },
   {
    name: "Sakshi Mittal",
    avatarColor: "#d946ef",
    time: "13 December, 12:36",
    type: "out",
  },
   {
    name: "Sandeep Rathore",
    avatar:"image/page2/6.jpg",
    time: "12 December, 09:36",
    type: "out",
  },
   {
    name: "Sakshi Mittal",
    avatarColor: "#d946ef",
    time: "12 December, 10:36",
    type: "out",
  },
   {
    name: "Naveen Chandra",
   avatar:"image/page2/5.jpg",
    time: "11 December, 08:36",
    type: "in",
  },
];

// ---------------- MAIN UI ----------------

export default function Call2() {
    const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto h-screen bg-white flex flex-col relative">

      {/* Header */}
      <div className="flex items-center justify-between p-4 ">
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
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>more-refreshed</title><path style={{color:"black"}} d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z" fill="currentColor"></path></svg>

          </span>
          
        </div>
      </div>
       {/* Header */}


     

      {/* Call List */}
      <div className="flex-1 overflow-y-auto" style={{scrollbarWidth: "none"}} >

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
      <div className="px-4 text-black font-semibold">Recent</div>



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
                  className={`font-small ${
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
        <button className="bg-green-500 p-4 rounded-full shadow-lg"  style={{background:"#17a766ff"}}>
           <img
        src="whatsappicon\Call+.webp"
        alt="video icon"
        className="w-6 h-6"
      />
        </button>
      </div>

      {/* Bottom Navigation */}
       <nav  >
      
    <div className="navbar">

        <div>
            <button onClick={() => navigate('/chat2' )}>
            <span className="icon-img " ><img src="nav/dqc.webp" alt="" style={{width:"35px"}}/></span>
            <span className="p">Chats</span>
            </button>
        </div>

        <div>
            <button>
            <span className="icon-img"><img src="nav/dqi.webp" alt="" style={{width:"35px"}}/></span>
            <span className="p">Updates</span>
            </button>
        </div>

        <div>
            <button>
            <span className="icon-img"><img src="nav/dqe.webp" alt="" style={{width:"35px"}}/></span>
            <span className="p">Communities</span>
            </button>
        </div>

        <div>
            <button>
            <span className="icon-img bg"><img src="nav/dqa.webp" alt="" style={{width:"35px"}}/></span>
            <span className="p"><b>Calls</b></span>
            </button>
        </div>
    </div>

      </nav>

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
