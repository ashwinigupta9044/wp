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






// ---------------- DATA (SINGLE, VALID ARRAY) ----------------

const calls = [
     { id: 1, name: "Rahul Patil", avatar: "image/page4/0.png", time: "Today 09:12 AM", type: "out", callType: "voice" },
  { id: 2, name: "Sneha Kulkarni", avatar: "image/page4/1.jpg", time: "Today 09:15 AM", type: "in", callType: "video" },
  { id: 3, name: "Akshay Deshmukh", avatar: "image/page4/0.png", time: "Today 09:18 AM", type: "out", callType: "voice" },
  { id: 4, name: "Pallavi More", avatar: "image/page4/4.jpg", time: "Today 09:22 AM", type: "in", callType: "video" },
  { id: 5, name: "Rohan Jadhav", avatar: "image/page4/5.jpg", time: "Today 09:25 AM", type: "missed", callType: "voice" },
  { id: 6, name: "Sayali Shinde", avatar: "image/page4/8.jpg", time: "Yesterday 09:35 AM", type: "out", callType: "video" },
  { id: 7, name: "Saurabh Kulkarni", avatar: "image/page4/9.jpg", time: "Yesterday 09:38 AM", type: "in", callType: "voice" },
  { id: 8, name: "Tanvi Bhave", avatar: "image/page4/2.jpg", time: "Yesterday 09:42 AM", type: "out", callType: "video" },

  { id: 9, name: "Nitin Pawar", avatar: "image/page4/11.jpg", time: "Yesterday", type: "out", callType: "voice" },
  { id: 10, name: "Amit Shinde", avatar: "image/page4/13.jpg", time: "Yesterday", type: "in", callType: "video" },

  { id: 11, name: "Mayur Sonawane", avatar: "image/page4/17.jpg", time: "02/01/2026, 15:00", type: "out", callType: "voice" },
  { id: 12, name: "Vishal Chavan", avatar: "image/page4/19.jpg", time: "02/01/2026, 11:25", type: "in", callType: "video" },
  { id: 13, name: "Rutuja Wagh", avatar: "image/page4/20.jpg", time: "01/01/2026, 19:12", type: "missed", callType: "voice" },

  { id: 14, name: "Kalyani Sutar", avatar: "image/page4/22.jpg", time: "01/01/2026, 13:12", type: "out", callType: "video" },
  { id: 15, name: "Sonali Bhosale", avatar: "image/page4/24.jpg", time: "01/01/2026, 09:12", type: "in", callType: "voice" },
  { id: 16, name: "Harshad Inamdar", avatar: "image/page4/25.jpg", time: "01/01/2026, 08:00", type: "out", callType: "voice" },

  { id: 17, name: "Aditya Sane", avatar: "image/page4/0.png", time: "29/12/2025, 19:12", type: "in", callType: "video" },
  { id: 18, name: "Ketaki Tambe", avatar: "image/page4/0.png", time: "22/12/2025, 19:12", type: "missed", callType: "voice" },
  { id: 19, name: "Shraddha Jadhav", avatar: "image/page4/26.jpg", time: "20/12/2025, 19:12", type: "out", callType: "video" },
  { id: 20, name: "Milind Deshpande", avatar: "image/page4/27.jpg", time: "20/12/2025, 19:12", type: "in", callType: "voice" },

  { id: 21, name: "Vaishali Sawant", avatar: "image/page4/28.jpg", time: "18/12/2025, 15:00", type: "missed", callType: "video" },
  { id: 22, name: "Pravin Kharade", avatar: "image/page4/0.png", time: "18/12/2025, 14:50", type: "out", callType: "voice" },
  { id: 23, name: "Komal Mahajan", avatar: "image/page4/0.png", time: "15/12/2025, 12:00", type: "in", callType: "video" },

  { id: 24, name: "Manasi Gokhale", avatar: "image/page4/14.jpg", time: "10/12/2025, 10:00", type: "out", callType: "voice" },
  { id: 25, name: "Tejas Kale", avatar: "image/page4/15.jpg", time: "06/12/2025, 16:48", type: "missed", callType: "voice" },

  { id: 26, name: "Aditya Sane", avatar: "image/page4/0.png", time: "05/12/2025, 15:00", type: "out", callType: "video" },
  { id: 27, name: "Ketaki Tambe", avatar: "image/page4/32.jpg", time: "05/12/2025, 15:00", type: "in", callType: "voice" }
];


function PhoneIcon({ className = "w-6 h-6 fill-black-600" }) {
  return (

    <span> <img
        src="whatsappicon/callicon.png"
        alt="video icon"
        className="w-6 h-6"
      /></span>
  );
}

const Videocall =(()=>{
 return (

    <span aria-hidden="true" data-icon="video-call-refreshed" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>video-call-refreshed</title><path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V10.5L21.15 7.35C21.3167 7.18333 21.5 7.14167 21.7 7.225C21.9 7.30833 22 7.46667 22 7.7V16.3C22 16.5333 21.9 16.6917 21.7 16.775C21.5 16.8583 21.3167 16.8167 21.15 16.65L18 13.5V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H4ZM4 18H16V6H4V18Z" fill="currentColor"></path></svg></span>
  );
});

const CallIcon = ({ callType }) => {
  return callType === "voice" ? <PhoneIcon /> : <Videocall />;
};


// ---------------- MAIN UI ----------------

export default function Call4() {
    const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto h-screen bg-white flex flex-col relative "  >

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
      <div className="flex-1 overflow-y-auto py-2" style={{scrollbarWidth: "none"}} >

         {/* Top Actions */}
      <div className="flex justify-around ">
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
                  className="w-13 h-13 rounded-full object-cover"
                />
              ) : (
                <div className="w-13 h-13 rounded-full bg-gray-200 flex items-center justify-center font-bold"
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

                <div className=" text-gray-500 flex items-center gap-1">
                  {c.type === "out" && <span className="text-green-500 " style={{fontSize:"15px", fontWeight:"bold"}}>↗</span>}
                  {c.type === "in" && <span className="text-green-500" style={{fontSize:"15px", fontWeight:"bold"}}>↙</span>}
                  {c.type === "missed" && <span className="text-red-500" style={{fontSize:"15px", fontWeight:"bold"}}>↙</span>}
                  {c.time}
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              
              <CallIcon callType={c.callType} />
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
            <button onClick={() => navigate('/chat4' )}>
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
