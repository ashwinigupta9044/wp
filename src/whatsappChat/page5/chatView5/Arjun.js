import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Viewchat.css";

export default function ChatRoom() {

  const name = "Arjun";
  const avatar = "/image/page5/0.png";
  const status = "Online";
 



  const navigate = useNavigate();
  const { id } = useParams();

  const [messages, setMessages] = useState([
    { id: 1, text: "Hello 👋", type: "received", time: "10:00", status: "" },
  { id: 2, text: "Hi! Kaise ho?", type: "sent", time: "10:01", status: "seen" },
  { id: 3, text: "Sab theek, tum batao", type: "received", time: "10:02", status: "" },
  { id: 4, text: "Bas kaam chal raha hai", type: "sent", time: "10:03", status: "seen" },
  { id: 5, text: "Office ya ghar?", type: "received", time: "10:04", status: "" },
  { id: 6, text: "Office 😓", type: "sent", time: "10:05", status: "seen" },
  { id: 7, text: "Aaj kaafi busy lag rahe ho", type: "received", time: "10:06", status: "" },
  { id: 8, text: "Haan thoda zyada", type: "sent", time: "10:07", status: "seen" },
  { id: 9, text: "Lunch kiya?", type: "received", time: "10:08", status: "" },
  { id: 10, text: "Abhi nahi", type: "sent", time: "10:09", status: "seen" },

  { id: 11, text: "Time pe kar lena", type: "received", time: "10:10", status: "" },
  { id: 12, text: "Haan pakka", type: "sent", time: "10:11", status: "seen" },
  { id: 13, text: "Aaj shaam free ho?", type: "received", time: "10:12", status: "" },
  { id: 14, text: "Shayad haan", type: "sent", time: "10:13", status: "seen" },
  { id: 15, text: "Movie ka plan kare?", type: "received", time: "10:14", status: "" },
  { id: 16, text: "Kaunsi movie?", type: "sent", time: "10:15", status: "seen" },
  { id: 17, text: "Koi comedy 😄", type: "received", time: "10:16", status: "" },
  { id: 18, text: "Perfect!", type: "sent", time: "10:17", status: "seen" },
  { id: 19, text: "Timing bata dena", type: "received", time: "10:18", status: "" },
  { id: 20, text: "6 baje?", type: "sent", time: "10:19", status: "seen" },

  { id: 21, text: "Haan theek hai", type: "received", time: "10:20", status: "" },
  { id: 22, text: "Location wahi?", type: "sent", time: "10:21", status: "seen" },
  { id: 23, text: "Mall ke paas", type: "received", time: "10:22", status: "" },
  { id: 24, text: "Ok 👍", type: "sent", time: "10:23", status: "seen" },
  { id: 25, text: "Tickets main book karu?", type: "received", time: "10:24", status: "" },
  { id: 26, text: "Haan kar do", type: "sent", time: "10:25", status: "seen" },
  { id: 27, text: "Seat kaunsa?", type: "received", time: "10:26", status: "" },
  { id: 28, text: "Middle wali", type: "sent", time: "10:27", status: "seen" },
  { id: 29, text: "Popcorn meri taraf se 😋", type: "received", time: "10:28", status: "" },
  { id: 30, text: "Done deal 😄", type: "sent", time: "10:29", status: "seen" },

  { id: 31, text: "Office kab chhutega?", type: "received", time: "10:30", status: "" },
  { id: 32, text: "5:30", type: "sent", time: "10:31", status: "seen" },
  { id: 33, text: "Time pe aa jana", type: "received", time: "10:32", status: "" },
  { id: 34, text: "Try karunga", type: "sent", time: "10:33", status: "seen" },
  { id: 35, text: "Traffic ka dhyan rakhna", type: "received", time: "10:34", status: "" },
  { id: 36, text: "Haan haan", type: "sent", time: "10:35", status: "seen" },
  { id: 37, text: "Phone silent mat karna", type: "received", time: "10:36", status: "" },
  { id: 38, text: "Bilkul nahi", type: "sent", time: "10:37", status: "seen" },
  { id: 39, text: "Ok milte hain", type: "received", time: "10:38", status: "" },
  { id: 40, text: "See you later!", type: "sent", time: "10:39", status: "seen" },
  { id: 41, text: "Take care!", type: "received", time: "10:40", status: "" },
  { id: 42, text: "Bye!", type: "sent", time: "10:41", status: "seen" },

  // … (same pattern)
   
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        text: input,
        type: "sent",
        status: "sent",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setInput("");
  };


  

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

const Tick = ({ status }) => {
  if (status === "sent") return <SingleTick color="#0b55e8ff" />;
  if (status === "seen") return <DoubleTick color="#0842b6ff" />;
  if (status === "delivered") return <DoubleTickk color="#1DA1F2" />;
  return null;
};


const AudioCall = ({ className = "w-6 h-6 fill-black-600" }) => {
  return (

    <span> 
        <img src="/whatsappicon/callicon.png" alt="call icon" className="w-6 h-6" />
    </span>
  );
}

const Videocall =(()=>{
 return (

    <span aria-hidden="true" data-icon="video-call-refreshed" class=""><svg style={{color:"#000"}} viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>video-call-refreshed</title><path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V10.5L21.15 7.35C21.3167 7.18333 21.5 7.14167 21.7 7.225C21.9 7.30833 22 7.46667 22 7.7V16.3C22 16.5333 21.9 16.6917 21.7 16.775C21.5 16.8583 21.3167 16.8167 21.15 16.65L18 13.5V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H4ZM4 18H16V6H4V18Z" fill="currentColor"></path></svg></span>
  );
});

const Dot = ({ color }) => (
   <span> 
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>more-refreshed</title><path style={{color:"black"}} d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z" fill="currentColor"></path></svg>

    </span>
);

  return (
    <div className="wa-chat-page">

      {/* HEADER */}
      <div className="wa-chat-header" >
        <button className="wa-back-btn" onClick={() => navigate(-1)}><img src="/whatsappicon/arow.png" alt="back icon" className="w-6 h-6" /></button>
        <img src={avatar} alt="" className="wa-chat-avatar" />
        <div>
          <div className="wa-chat-name1">{name} {id}</div>
          <div className="wa-chat-status">{status}</div>
        </div>

        <div className="wa-chat-header-icons" style={{position:"absolute", right:"30px" , display:"flex", gap:"20px"}}>
          <button className="wa-chat-icon"><Videocall /></button>
          <button className="wa-chat-icon"><AudioCall /></button>
          
          <button className="wa-chat-icon"><Dot /></button>
          
        </div>
      </div>

      {/* MESSAGES */}
      <div className="wa-chat-body" style={{backgroundImage:"url('/whatsappicon/wpbg.jpg')", backgroundSize:"cover", backgroundPosition:"center", }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`wa-msg ${
              msg.type === "sent" ? "wa-msg-sent" : "wa-msg-received"
            }`}
          >
            
            <div style={{display:"flex"}}>
            <span>{msg.text}</span>
            <div className="wa-msg-time">{msg.time} <Tick status={msg.status} />
              {/* <span className="wa-msg-tick">
                <Tick status={msg.status} />
              </span> */}             
            </div>
            </div>
          </div>         
        ))}

       
      </div>

      {/* INPUT */}
      <div className="wa-chat-input-container" style={{backgroundImage:"url('/whatsappicon/wpbg.jpg')", backgroundSize:"cover", backgroundPosition:"center"}}>
      <div className="wa-chat-input">

        <div style={{display:"flex", alignItems:"center" ,marginLeft:"10px"}}>
         <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none" style={{opacity:"0.6"}}><title>expressions</title><path d="M8.49893 10.2521C9.32736 10.2521 9.99893 9.5805 9.99893 8.75208C9.99893 7.92365 9.32736 7.25208 8.49893 7.25208C7.6705 7.25208 6.99893 7.92365 6.99893 8.75208C6.99893 9.5805 7.6705 10.2521 8.49893 10.2521Z" fill="currentColor"></path><path d="M17.0011 8.75208C17.0011 9.5805 16.3295 10.2521 15.5011 10.2521C14.6726 10.2521 14.0011 9.5805 14.0011 8.75208C14.0011 7.92365 14.6726 7.25208 15.5011 7.25208C16.3295 7.25208 17.0011 7.92365 17.0011 8.75208Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.8221 19.9799C15.5379 21.2537 13.8087 21.9781 12 22H9.27273C5.25611 22 2 18.7439 2 14.7273V9.27273C2 5.25611 5.25611 2 9.27273 2H14.7273C18.7439 2 22 5.25611 22 9.27273V11.8141C22 13.7532 21.2256 15.612 19.8489 16.9776L16.8221 19.9799ZM14.7273 4H9.27273C6.36068 4 4 6.36068 4 9.27273V14.7273C4 17.6393 6.36068 20 9.27273 20H11.3331C11.722 19.8971 12.0081 19.5417 12.0058 19.1204L11.9935 16.8564C11.9933 16.8201 11.9935 16.784 11.9941 16.7479C11.0454 16.7473 10.159 16.514 9.33502 16.0479C8.51002 15.5812 7.84752 14.9479 7.34752 14.1479C7.24752 13.9479 7.25585 13.7479 7.37252 13.5479C7.48919 13.3479 7.66419 13.2479 7.89752 13.2479L13.5939 13.2479C14.4494 12.481 15.5811 12.016 16.8216 12.0208L19.0806 12.0296C19.5817 12.0315 19.9889 11.6259 19.9889 11.1248V9.07648H19.9964C19.8932 6.25535 17.5736 4 14.7273 4ZM14.0057 19.1095C14.0066 19.2605 13.9959 19.4089 13.9744 19.5537C14.5044 19.3124 14.9926 18.9776 15.4136 18.5599L18.4405 15.5576C18.8989 15.1029 19.2653 14.5726 19.5274 13.996C19.3793 14.0187 19.2275 14.0301 19.0729 14.0295L16.8138 14.0208C15.252 14.0147 13.985 15.2837 13.9935 16.8455L14.0057 19.1095Z" fill="currentColor"></path></svg>
        </div>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <div style={{display:"flex", alignItems:"center"}}>
          <img src="/whatsappicon/camera.webp" alt="emoji icon" className="w-6 h-6 mr-3 " style={{opacity:"0.6"}} />
          
        </div>
        
      </div>
        
        <div style={{width:"50px",height:"50px", borderRadius:"50%", background:"#21c063", display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"10px"}}>
        <button onClick={sendMessage}><img src="/whatsappicon/send.webp" alt="send icon" className="w-8 h-8" /></button>
        </div>

      </div>
      {/* INPUT */}

    </div>
  );
}
