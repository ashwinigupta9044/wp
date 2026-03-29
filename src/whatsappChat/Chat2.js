import React from "react";
import "./whatsapp.css";

const chats = [

  { id:1, name:"John Miller", msg:"Hey, how are you?", time:"09:10 AM", date:"12 Dec 2025",avatar: "https://randomuser.me/api/portraits/men/14.jpg", avatarColor:"#3b82f6", status:"seen" },
  { id:2, name:"Emily Johnson", msg:"Did you check the email?", time:"10:22 AM", date:"12 Dec 2025",avatar: "https://randomuser.me/api/portraits/men/12.jpg", avatarColor:"#ec4899", status:"delivered" },
  { id:3, name:"Michael Brown", msg:"Let's meet tomorrow", time:"11:45 AM", date:"11 Dec 2025", avatarColor:"#22c55e", status:"seen" },
  { id:4, name:"Sophia Wilson", msg:"Call me when free", time:"08:30 PM", date:"11 Dec 2025",avatar:"https://randomuser.me/api/portraits/women/1.jpg", avatarColor:"#a855f7", status:"sent" },
  { id:5, name:"Daniel Anderson", msg:"Payment received ", time:"07:05 PM", date:"10 Dec 2025", avatarColor:"#f97316", status:"seen" },

  { id:6, name:"Chris Evans", msg:"On my way", time:"06:40 PM",avatar:"https://randomuser.me/api/portraits/men/1.jpg", date:"10 Dec 2025", avatarColor:"#6366f1", status:"seen" },
  { id:7, name:"Emma Davis", msg:"Thanks!", time:"14/12/2025", date:"14/12/2025", avatarColor:"#ec4899", status:"seen" },
  { id:8, name:"James Taylor", msg:"Talk later", time:"14/12/2025", date:"09 Dec 2025", avatarColor:"#22c55e", status:"delivered" },
  { id:9, name:"Olivia Moore", msg:"Sounds good", time:"14/12/2025", date:"09 Dec 2025",avatar:"https://randomuser.me/api/portraits/women/2.jpg" ,avatarColor:"#f59e0b", status:"seen" },
  { id:10, name:"Robert Thomas", msg:"Busy right now", time:"13/12/2025", date:"09 Dec 2025", avatarColor:"#3b82f6", status:"sent" },

  { id:11, name:"Isabella Martin", msg:"Good morning ", time:"13/12/2025", date:"08 Dec 2025", avatarColor:"#ec4899", status:"seen" },
  { id:12, name:"+63 912 116 8968", msg:"Check this file", time:"13/12/2025", date:"08 Dec 2025",  avatar:"https://randomuser.me/api/portraits/men/11.jpg", avatarColor:"#22c55e", status:"delivered" },
  { id:13, name:"Mia Lewis", msg:"Okay ", time:"13/12/2025", date:"12/12/2025", avatarColor:"#a855f7", status:"seen" },
  { id:14, name:"William Lee", msg:"See you soon", time:"12/12/2025", date:"07 Dec 2025", avatar:"https://randomuser.me/api/portraits/women/18.jpg", avatarColor:"#f97316", status:"seen" },
  { id:15, name:"Ava Walker", msg:"Call me", time:"12/12/2025", date:"07 Dec 2025", avatarColor:"#6366f1", status:"sent" },

  { id:16, name:"Henry Hall", msg:"Meeting postponed", time:"10/12/2025", date:"07 Dec 2025",avatar: "https://randomuser.me/api/portraits/men/19.jpg", avatarColor:"#22c55e", status:"seen" },
  { id:17, name:"Grace Young", msg:"No problem", time:"13/11/2025", date:"06 Dec 2025",avatar: "https://randomuser.me/api/portraits/men/20.jpg", avatarColor:"#ec4899", status:"seen" },
  { id:18, name:"Jack Hernandez", msg:"Where are you?", time:"15/10/2025", date:"06 Dec 2025", avatarColor:"#3b82f6", status:"delivered" },
  { id:19, name:"Lily King", msg:"Reached home", time:"15/10/2025", date:"06 Dec 2025", avatar:"https://randomuser.me/api/portraits/women/4.jpg",avatarColor:"#a855f7", status:"seen" },
  { id:20, name:"Noah Wright", msg:"Good night ", time:"10/10/2025", date:"06 Dec 2025",avatar: "https://randomuser.me/api/portraits/men/21.jpg", avatarColor:"#f59e0b", status:"seen" },

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
  <svg viewBox="0 0 18 18"  height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 1">  <path  style={{color:"#007bfc"}} fill="currentColor"
   d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"
   
/></svg>
);
const DoubleTick = ({ color }) => (
  <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18"><title>status-dblcheck</title><path style={{color:"#8D9599"}} fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
);

// ======================= REAL TICK SVG =======================

const Tick = ({ status }) => {
  if (status === "sent") return <SingleTick color="#0b55e8ff" />;
  if (status === "delivered") return <DoubleTick color="#0842b6ff" />;
  if (status === "seen") return <DoubleTickk color="#1DA1F2" />;
  return null;
};


export default function Chat2() {
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
