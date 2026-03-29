import React from "react";
import "./whatsapp.css";

const chats = [

 
  {
    id: 1,
    name: "Rahul Verma",
    msg: "Hello, kya kar rahe ho?",
    time: "09:12 AM",
    avatar:"image/chat1/1.jpg",
    avatarColor: "#f43f5e",
    status: "seen"
  },
  {
    id: 2,
    name: "Priya Sharma",
    msg: "Kal milte hain?",
    time: "10:45 AM",
    
    avatarColor: "#3b82f6",
    status: "seen"
  },
  {
    id: 3,
    name: "Aman Singh",
    msg: "Thik hai bhai!",
    time: "11:20 AM",
    avatar:"image/chat1/3.jpg",
    avatarColor: "#10b981",
    status: "delivered"
  },
  {
    id: 4,
    name: "Neha Patel",
    msg: "Ok, main aati hoon.",
    time: "12:05 PM",
    
    avatarColor: "#a855f7",
    status: "delivered"
  },
  {
    id: 5,
    name: "Rohit Gupta",
    msg: "File bhej di?",
    time: "01:33 PM",
    avatar:"image/chat1/5.jpg",
    avatarColor: "#f59e0b",
    status: "delivered"
  },
  {
    id: 6,
    name: "Sneha Nair",
    msg: "Yes, ho gaya!",
    time: "02:11 PM",
    avatarColor: "#ef4444",
    status: "sent"
  },
  {
    id: 7,
    name: "Arjun Mehta",
    msg: "Aaj match dekhne chalna?",
    time: "03:50 PM",
    avatar:"image/chat1/6.jpg",
    avatarColor: "#6366f1",
    status: "delivered"
  },
  {
    id: 8,
    name: "Kavya Rao",
    msg: "Call karlo jab free ho.",
    time: "04:27 PM",
    avatarColor: "#ec4899",
    status: "seen"
  },
  {
    id: 9,
    name: "Mohit Yadav",
    msg: "Bhai urgent baat hai.",
    time: "06:10 PM",
    avatar:"image/chat1/7.jpg",
    avatarColor: "#14b8a6",
    status: "sent"
  },
  {
    id: 10,
    name: "Ananya Desai",
    msg: "Thank you 😊",
    time: "08:45 PM",
    avatarColor: "#8b5cf6",
    status: "seen"
  },
  {
    id: 31,
    name: "Tanvi Deshmukh",
    msg: "Thanks!",
    time: "12/11/2025",
    avatarColor: "#f59e0b",
    status: "delivered"
  },
  {
    id: 32,
    name: "Zaid Khan",
    msg: "Scene set!",
    time: "25/10/2025",
    avatar:"image/chat1/4.jpg",
    avatarColor: "#ef4444",
    status: "seen"
  },
  {
    id: 33,
    name: "Garima Sethi",
    msg: "Achha suno…",
    time: "22/10/2025",
    avatarColor: "#6366f1",
    status: "delivered"
  },
  {
    id: 34,
    name: "Raghav Jain",
    msg: "Ok bro.",
    time: "20/10/2025",
    avatarColor: "#ec4899",
    status: "sent"
  },
  {
    id: 35,
    name: "Anjali Rawat",
    msg: "Jaldi aana.",
    time: "03/06/2025",
    avatarColor: "#14b8a6",
    status: "delivered"
  },
  {
    id: 36,
    name: "Piyush Ahuja",
    msg: "Message check karo.",
    time: "16/06/2025",
    avatar:"image/chat1/10.jpg",
    avatarColor: "#8b5cf6",
    status: "seen"
  },
  {
    id: 37,
    name: "Sakshi Mittal",
    msg: "All good!",
    time: "29/05/2025",
    avatarColor: "#d946ef",
    status: "sent"
  },
  {
    id: 38,
    name: "Farhan Ali",
    msg: "Chal theek.",
    time: "11/05/2025",
    avatarColor: "#0ea5e9",
    status: "delivered"
  },
  {
    id: 39,
    name: "Isha Kulkarni",
    msg: "Awesome!",
    time: "22/04/2025",
    avatarColor: "#84cc16",
    status: "seen"
  },
  {
    id: 40,
    name: "Dev Sharma",
    msg: "Bro fast!",
    time: "04/04/2025",
    avatar:"image/chat1/2.jpg",
    avatarColor: "#f43f5e",
    status: "delivered"
  },






  { id: 31, name: "Tanvi Deshmukh", msg: "Thanks!", time: "12/07/2025", avatarColor: "#f59e0b",status: "seen"},  // 👈 Add this 
  { id: 32, name: "Zaid Khan", msg: "Scene set!", time: "25/08/2025", avatarColor: "#ef4444" },
  { id: 33, name: "Garima Sethi", msg: "Achha suno…", time: "09/09/2025", avatarColor: "#6366f1" },
  { id: 34, name: "Raghav Jain", msg: "Ok bro.", time: "20/10/2025", avatarColor: "#ec4899" },
  { id: 35, name: "Anjali Rawat", msg: "Jaldi aana.", time: "03/11/2024", avatarColor: "#14b8a6" },
  { id: 36, name: "Piyush Ahuja", msg: "Message check karo.", time: "16/12/2024", avatarColor: "#8b5cf6" },
  { id: 37, name: "Sakshi Mittal", msg: "All good!", time: "29/01/2024", avatarColor: "#d946ef" },
  { id: 38, name: "Farhan Ali", msg: "Chal theek.", time: "11/02/2024", avatarColor: "#0ea5e9", status: "delivered" },
  { id: 39, name: "Isha Kulkarni", msg: "Awesome!", time: "22/03/2024", avatarColor: "#84cc16", status: "sent" },
  { id: 40, name: "Dev Sharma", msg: "Bro fast!", time: "04/04/2023", avatarColor: "#f43f5e", status: "seen" },
];


// ✔ SVG Double Tick Icon Component
// ======================= REAL TICK SVG =======================
const SingleTick = ({ color }) => (
  // <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
  //   <path
  //      d="M3 13L8 18L21 5"
  //     stroke={color}
  //     strokeWidth="2.2"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //   />
  // </svg>
    
  <svg viewBox="0 0 14 18" height="18" width="14" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 14 18"><title>status-check</title><path style={{color:"#8D9599"}} fill="currentColor" d="M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>


);

const DoubleTickk = ({ color }) => (
  <svg viewBox="0 0 18 18"  height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 1">  <path style={{color:"#8D9599"}} fill="currentColor"
   d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"
   
/></svg>
);
const DoubleTick = ({ color }) => (
  <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18"><title>status-dblcheck</title><path style={{color:"#007bfc"}} fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
);

// ======================= REAL TICK SVG =======================

const Tick = ({ status }) => {
  if (status === "sent") return <SingleTick color="#0b55e8ff" />;
  if (status === "delivered") return <DoubleTick color="#0842b6ff" />;
  if (status === "seen") return <DoubleTickk color="#1DA1F2" />;
  return null;
};


export default function Chat() {
  return (
    <div className="wa-app">
      {/* Top green header */}
      <header className="wa-header">
        <div className="wa-header-left">
          <h1>WhatsApp Hack</h1>
        </div>
        <div className="wa-header-right">
          <button className="wa-icon-btn" aria-label="QR code">
            <img src="https://cdn-icons-png.flaticon.com/128/6927/6927609.png" alt="" style={{width:"25px"}}/>
          </button>
          <button className="wa-icon-btn" aria-label="Camera">
            <img src="https://cdn-icons-png.flaticon.com/512/14586/14586713.png" alt="" style={{width:"30px"}}/>
          </button>
          <button className="wa-icon-btn" aria-label="Menu">
            ⋮
          </button>
        </div>
      </header>

      {/* Search bar */}
      <div className="wa-search-wrapper">
        <input
          className="wa-search"
          placeholder="Ask Meta AI or Search"
        />
      </div>

      {/* Archived */}
      {/* <div className="wa-archived">
        <span className="wa-archived-icon">📁</span>
        <span className="wa-archived-text">Archived</span>
      </div> */}

      {/* Chats list */}
      <div className="wa-chats">
        {chats.map((chat) => (
          <div key={chat.id} className="wa-chat-row">
           <div className="wa-avatar">
                  {chat.avatar ? (
                    <img src={chat.avatar} alt={chat.name} />
                 ) : (
            <div
          className="wa-letter"
          style={{ backgroundColor: chat.avatarColor }} >

                  {chat.name[0]}
             </div>
             )}
          </div>

            <div className="wa-chat-middle">
              <div className="wa-chat-title-row">
                <span className="wa-chat-name">{chat.name}</span>
                <span className="wa-chat-time">{chat.time}</span>
              </div>

              

              <div className="wa-chat-msg-row">

                <Tick status={chat.status} />
               

                {chat.muted && <span className="wa-muted">🔕</span>}
                <span className="wa-chat-msg">{chat.msg}</span>
              </div>


            </div>

            <div className="wa-chat-right">
              {chat.badge && (
                <span className="wa-badge">{chat.badge}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Floating new chat button */}
      <button className="wa-fab" aria-label="New chat">
        +
      </button>

      {/* Bottom tabs */}
      <nav className="wa-bottom-nav">
        <button className="wa-tab active">
          <span><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>chat-filled-refreshed</title><path fill-rule="evenodd" clip-rule="evenodd" d="M22.0002 6.66667C22.0002 5.19391 20.8062 4 19.3335 4H1.79015C1.01286 4 0.540213 4.86348 0.940127 5.53L3.00016 9V17.3333C3.00016 18.8061 4.19406 20 5.66682 20H19.3335C20.8062 20 22.0002 18.8061 22.0002 17.3333V6.66667ZM7.00016 10C7.00016 9.44772 7.44787 9 8.00016 9H17.0002C17.5524 9 18.0002 9.44772 18.0002 10C18.0002 10.5523 17.5524 11 17.0002 11H8.00016C7.44787 11 7.00016 10.5523 7.00016 10ZM8.00016 13C7.44787 13 7.00016 13.4477 7.00016 14C7.00016 14.5523 7.44787 15 8.00016 15H14.0002C14.5524 15 15.0002 14.5523 15.0002 14C15.0002 13.4477 14.5524 13 14.0002 13H8.00016Z" fill="currentColor"></path></svg></span>
          <span>Chats</span>
        </button>
        <button className="wa-tab">
          <span><img src="https://cdn-icons-png.flaticon.com/512/12595/12595841.png" alt="" style={{width:"25px"}}/></span>
          <span>Updates</span>
        </button>
        <button className="wa-tab">
          <span><img src="https://cdn-icons-png.flaticon.com/512/9581/9581138.png" alt="" style={{width:"25px"}}/></span>
          <span>Communities</span>
        </button>
        <button className="wa-tab">
          <span><img src="https://cdn-icons-png.flaticon.com/512/14276/14276763.png" alt="" style={{width:"25px"}}/></span>
          <span>Calls</span>
        </button>
      </nav>
    </div>
  );
}
