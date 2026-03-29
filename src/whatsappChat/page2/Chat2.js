import React from "react";
import "../whatsapp.css";


import { useNavigate } from "react-router-dom";


const chats = [

   {
    id: 40,
    name: "Vijay Kumar",
    msg: "tumne jo bola tha.",
    time: "20:12",
   
    avatarColor: "#f43f5e",
    status: "delivered"
  },
  
  {
    id: 40,
    name: "Dev Moni",
    msg: "Haan yaad hai, tumne jo bola tha.",
    time: "19:12",
    avatar:"image/page2/1.jpg",
    avatarColor: "#f43f5e",
    status: "delivered"
  },
{ id: 1, name: "Garima Sethi", msg: "overthink kar rahe hain", time: "18:25",  avatarColor: "#6366f1", status: "seen" },
  { id: 2, name: "Raghav Jain", msg: "Sorry yaar, kal reply hi nahi kar paaya", time: "14:56" ,avatar:"image/page2/2.jpg", avatarColor: "#ec4899", status: "" },
  { id: 3, name: "Anjali Rawat", msg: "Jaldi aana.", time: "12:33", avatarColor: "#14b8a6", status: "sent" },
  { id: 4, name: "Piyush Ahuja", msg: "Message check karo.", time: "10:45", avatar:"image/page2/3.jpg", avatarColor: "#8b5cf6", status: "seen" },
  { id: 5, name: "Sakshi Mittal", msg: "miss ho gaya tha baat karna", time: "05:50", avatarColor: "#d946ef" },
  { id: 6, name: "Farhan Ali", msg: "Bataun to honestly", time: "Yesterday", avatarColor: "#0ea5e9", status: "" },
  { id: 7, name: "Isha Kulkarni", msg: "Awesome!", time: "Yesterday", avatarColor: "#84cc16", status: "sent" },
  { id: 8, name: "Dev Sharma", msg: "Thanks for explaining it properly.", time: "Yesterday", avatar:"image/page2/4.jpg", avatarColor: "#f43f5e", status: "seen" },

  { id: 9, name: "Abhishek Tripathi", msg: "Call kar lena.", time: "16/12/2025", avatarColor: "#3b82f6", status: "seen" },
  { id: 10, name: "Rashmi Kulkarni", msg: "Phone silent pe tha aur kaam me itna busy ho", time: "15/12/2025", avatarColor: "#22c55e", status: "" },
  { id: 11, name: "Naveen Chandra", msg: "Okay", time: "15/12/2025", avatar:"image/page2/5.jpg", avatarColor: "#0ea5e9", status: "sent" },
  { id: 12, name: "Priti Sawant", msg: "Aaj weather kaafi acha hai, isliye socha", time: "15/12/2025", avatarColor: "#f97316", status: "seen" },
  { id: 13, name: "Sandeep Rathore", msg: "Late ho jaunga.", time: "14/12/2025", avatar:"image/page2/6.jpg", avatarColor: "#a855f7" },
  { id: 14, name: "Isha Malviya", msg: "Perfect ", time: "14/12/2025", avatarColor: "#14b8a6", status: "seen" },
  { id: 15, name: "Rohini Kulkarni", msg: "Kal baat karte.", time: "14/11/2025", avatarColor: "#ef4444" },
  { id: 16, name: "Varun Bajaj", msg: "Thanks bro.", time: "13/11/2025", avatar:"image/page2/7.jpg", avatarColor: "#6366f1", status: "seen" },
  { id: 17, name: "Monika Sehgal", msg: "Done.", time: "22/10/2025", avatarColor: "#fb7185" },
  { id: 18, name: "Akash Tomar", msg: "Location bhejo.", time: "20/10/2025", avatar:"image/page2/8.jpg", avatarColor: "#0ea5e9", status: "seen" },
  { id: 19, name: "Jyoti Rawat", msg: "Aa rahi hu.", time: "12/10/2025", avatarColor: "#22c55e", status: "seen" },
  { id: 20, name: "Prakash Solanki", msg: "Check karo.", time: "10/10/2025", avatar:"image/page2/9.jpg", avatarColor: "#ef4444", status: "" },

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
  if (status === "seen") return <DoubleTick color="#0842b6ff" />;
  if (status === "delivered") return <DoubleTickk color="#1DA1F2" />;
  return null;
};


export default function Chat2() {

    const navigate = useNavigate();

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
            <img src="whatsappicon/camera.webp" alt="" style={{width:"25px"}}/>
          </button>
          <button className="wa-icon-btn" aria-label="Menu">
             <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>more-refreshed</title><path style={{color:"black"}} d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z" fill="currentColor"></path></svg>
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
      <button className="wa-fab" aria-label="New chat" style={{background:"#17a766ff"}}>
        <img style={{marginLeft:"13px"}}
        src="whatsappicon\chat+.webp"
        alt="video icon"
        className="w-6 h-6"
      />
      </button>

      {/* Bottom tabs */}
      <nav  >
      
    <div className="navbar">

        <div>
            <button>
            <span className="icon-img bg" ><img src="nav/dqb.webp" alt="" style={{width:"35px"}}/></span>
            <span className="p"><b>Chats</b></span>
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
            <button  onClick={() => navigate('/call2' )}>
            <span className="icon-img"><img src="nav/dqa.webp" alt="" style={{width:"35px"}}/></span>
            <span className="p">Calls</span>
            </button>
        </div>
    </div>

      </nav>
    </div>
  );
}
