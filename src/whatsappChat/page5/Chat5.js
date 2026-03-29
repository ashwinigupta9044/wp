import React from "react";
import "../whatsapp.css";


import { Link, useNavigate } from "react-router-dom";
const chats = [
  { id: 1, name: "Arjun Mehta", msg: "Aaj ka kaam kaafi zyada tha, isliye thoda delay ho gaya.", time: "20:12", avatar:"image/page4/0.png", avatarColor:"#f43f5e", status:"seen", Link:"/chat5/arjun" },
  { id: 2, name: "Rohit Sharma", msg: "Abhi meeting chal rahi hai, baad me baat karte hain.", time:"19:15", avatar:"image/page5/1.jpg", avatarColor:"#6366f1", status:"received" , Link:"/chat5/rohit" },
  { id: 3, name: "Ritesh Malhotra", msg: "Bike ride ka plan banate hain weekend par.", time:"19:18", avatar:"image/page5/0.png", avatarColor:"#22c55e", status:"sent" },
  { id: 49, name: "Nikhil Rao", msg: "Payment successful ho gaya hai.", time:"11:42", avatar:"image/page5/0.png", avatarColor:"#0ea5e9", status:"seen" },
  { id: 50, name: "Kavya Joshi", msg: "Aaj ka din kaafi productive raha.", time:"11:45", avatar:"image/page5/2.jpg", avatarColor:"#a855f7", status:"received", Link:"/chat5/kavya" },
  { id: 4, name: "Meera Kulkarni", msg: "Photos editing ke baad share kar dungi.", time:"10:22", avatar:"image/page5/4.jpg", avatarColor:"#ec4899", status:"seen" },
  { id: 5, name: "Aman Verma", msg: "Network issue ki wajah se call nahi laga.", time:"10:25", avatar:"image/page5/5.jpg", avatarColor:"#0ea5e9", status:"sent" },
  { id: 8, name: "Isha Patil", msg: "Content achha hai, caption short rakhna.", time:"08:35", avatar:"image/page5/8.jpg", avatarColor:"#f97316", status:"received" },
  { id: 9, name: "Sagar Kulkarni", msg: "Project almost complete hai.", time:"07:38", avatar:"image/page5/9.jpg", avatarColor:"#84cc16", status:"" },
  { id: 10, name: "Riya Nair", msg: "Aaj weather kaafi pleasant lag raha hai.", time:"06:42", avatar:"image/page5/10.jpg", avatarColor:"#06b6d4", status:"seen" },
  { id: 11, name: "Vikas Pawar", msg: "Office se late nikla hoon.", time:"Yesterday", avatar:"image/page5/11.jpg", avatarColor:"#ef4444", status:"" },
  { id: 13, name: "Harshit Jain", msg: "Amount account me credit ho gaya.", time:"Yesterday", avatar:"image/page5/13.jpg", avatarColor:"#10b981", status:"seen" },
  { id: 17, name: "Rohit Deshmukh", msg: "Laptop service ke liye dena padega.", time:"Sunday", avatar:"image/page5/17.jpg", avatarColor:"#22c55e", status:"received" },
  { id: 19, name: "Ankit Chavan", msg: "Match ka ending kaafi exciting tha.", time:"Sunday", avatar:"image/page5/19.jpg", avatarColor:"#0ea5e9", status:"sent" },
  { id: 22, name: "Kiran Sutar", msg: "Aaj ka din thoda hectic tha.", time:"Saturday", avatar:"image/page5/22.jpg", avatarColor:"#6366f1", status:"seen" },
  { id: 24, name: "Shreya Bhosale", msg: "Aaj ghar par guests aaye hue hain.", time:"Saturday", avatar:"image/page5/24.jpg", avatarColor:"#ec4899", status:"received" },
  { id: 25, name: "Sameer Inamdar", msg: "Kal schedule thoda tight rahega.", time:"Friday", avatar:"image/page5/25.jpg", avatarColor:"#0ea5e9", status:"" },
  { id: 31, name: "Aditya Sane", msg: "Movie tickets book kar liye hain.", time:"Friday", avatar:"image/page5/0.png", avatarColor:"#14b8a6", status:"" },
  { id: 32, name: "Ketki Tambe", msg: "Office me aaj kaafi shor tha.", time:"Thursday", avatar:"image/page5/0.png", avatarColor:"#6366f1", status:"seen" },
  { id: 26, name: "Shruti Jadhav", msg: "Photos ka backup le liya hai.", time:"Thursday", avatar:"image/page5/26.jpg", avatarColor:"#a855f7", status:"seen" },
  { id: 27, name: "Milind Joshi", msg: "Aaj ki news kaafi surprising thi.", time:"Thursday", avatar:"image/page5/27.jpg", avatarColor:"#84cc16", status:"received" },
  { id: 28, name: "Vaidehi Sawant", msg: "Aaj mood thoda low hai.", time:"Wednesday", avatar:"image/page5/28.jpg", avatarColor:"#f97316", status:"seen" },
  { id: 29, name: "Prakash Kharade", msg: "Client se discussion complete ho gaya.", time:"Wednesday", avatar:"image/page5/0.png", avatarColor:"#3b82f6", status:"sent" },
  { id: 30, name: "Komal Shah", msg: "Aaj new recipe try ki.", time:"Tuesday", avatar:"image/page5/0.png", avatarColor:"#ec4899", status:"received" },
  { id: 14, name: "Manisha Gokhale", msg: "Presentation ready hai, review kar lo.", time:"Tuesday", avatar:"image/page5/14.jpg", avatarColor:"#f59e0b", status:"received" },
  { id: 15, name: "Tejas Patel", msg: "Gym kal pakka jaunga.", time:"Tuesday", avatar:"image/page5/15.jpg", avatarColor:"#3b82f6", status:"sent" },
  { id: 16, name: "Dipika Chavan", msg: "Morning walk regular rakho.", time:"Monday", avatar:"image/page5/16.jpg", avatarColor:"#ec4899", status:"seen" },
  { id: 33, name: "Kunal Phadke", msg: "Update ke baad phone slow lag raha.", time:"Sunday", avatar:"image/page5/0.png", avatarColor:"#22c55e", status:"received" },
  { id: 34, name: "Shubham Pingle", msg: "Event ke liye outfit final ho gaya.", time:"Sunday", avatar:"image/page5/0.png", avatarColor:"#f59e0b", status:"seen" },
  { id: 35, name: "Umesh Raut", msg: "Internet slow hai aaj.", time:"Sunday", avatar:"image/page5/29.jpg", avatarColor:"#ef4444", status:"sent" },
  { id: 36, name: "Chitra Karande", msg: "Aaj ka lecture interesting tha.", time:"03/01/2026", avatar:"image/page5/30.jpg", avatarColor:"#8b5cf6", status:"received" },
  { id: 37, name: "Bhavesh Nikam", msg: "Travel plan cancel karna pada.", time:"03/01/2026", avatar:"image/page5/31.jpg", avatarColor:"#0ea5e9", status:"sent" },
  { id: 38, name: "Dipti Apte", msg: "Morning routine follow kar rahi hoon.", time:"02/01/2026", avatar:"image/page5/0.png", avatarColor:"#10b981", status:"seen" },
  { id: 23, name: "Abhinav Lokhande", msg: "File mail kar di hai.", time:"02/01/2026", avatar:"image/page5/23.jpg", avatarColor:"#22c55e", status:"sent" },
  { id: 39, name: "Avinash Bagul", msg: "Traffic bahot zyada tha.", time:"02/01/2026", avatar:"image/page5/0.png", avatarColor:"#f43f5e", status:"sent" },
  { id: 40, name: "Nikita Rane", msg: "Happy New Year!", time:"01/01/2026", avatar:"image/page5/0.png", avatarColor:"#a855f7", status:"received" },
  { id: 41, name: "Gaurav Pandey", msg: "Happy new year!", time:"01/01/2026", avatar:"image/page5/0.png", avatarColor:"#22c55e", status:"seen" },
  { id: 42, name: "Smita Kulkarni", msg: "Happy new year di.", time:"01/01/2026", avatar:"image/page5/32.jpg", avatarColor:"#ec4899", status:"received" },
  { id: 43, name: "Vaibhav Dixit", msg: "Email bhej diya hai.", time:"28/12/2025", avatar:"image/page5/0.png", avatarColor:"#3b82f6", status:"sent" },
  { id: 21, name: "Sandeep Gaikwad", msg: "Weekend plan confirm hai.", time:"27/12/2025", avatar:"image/page5/21.jpg", avatarColor:"#f97316", status:"sent" },
  { id: 44, name: "Poonam Patankar", msg: "Weekend family ke saath busy rahega.", time:"27/12/2025", avatar:"image/page5/33.jpg", avatarColor:"#f97316", status:"seen" },
  { id: 45, name: "Tushar Pingle", msg: "Phone storage full ho gaya.", time:"25/12/2025", avatar:"image/page5/0.png", avatarColor:"#14b8a6", status:"sent" },
  { id: 6, name: "Prachi Pawar", msg: "Kal ka function kaafi acha tha.", time:"22/12/2025", avatar:"image/page5/6.jpg", avatarColor:"#a855f7", status:"received" },
  { id: 7, name: "Omkar Sawant", msg: "Payment done hai.", time:"18/12/2025", avatar:"image/page5/7.jpg", avatarColor:"#14b8a6", status:"seen" },
  { id: 46, name: "Kirti Pandit", msg: "Aaj thoda headache hai.", time:"12/12/2025", avatar:"image/page5/0.png", avatarColor:"#6366f1", status:"received" },
  { id: 47, name: "Hemant Karande", msg: "Meeting ka response positive tha.", time:"05/12/2025", avatar:"image/page5/0.png", avatarColor:"#22c55e", status:"seen" },
  { id: 18, name: "Aarti Patil", msg: "Shopping list ready hai.", time:"25/11/2025", avatar:"image/page5/18.jpg", avatarColor:"#f43f5e", status:"seen" },
  { id: 48, name: "Madhuri Desai", msg: "Weather outing ke liye perfect hai.", time:"25/11/2025", avatar:"image/page5/0.png", avatarColor:"#ec4899", status:"received" },
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


export default function Chat5() {

    const navigate = useNavigate();

  return (
    <div style={{scrollbarWidth: "none"}}>
    <div className="wa-app"  >
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
          <a href={chat.Link} >
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
          </a>
        ))}

        
      </div>

      {/* Floating new chat button */}
      <button className="wa-fab" aria-label="New chat" style={{background:"#17a766ff"}}>
        <img style={{marginLeft:"13px"}}
        src="whatsappicon/chat+.webp"
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
            <button  onClick={() => navigate('/call5' )}>
            <span className="icon-img"><img src="nav/dqa.webp" alt="" style={{width:"35px"}}/></span>
            <span className="p">Calls</span>
            </button>
        </div>
    </div>

      </nav>
      
    </div>
    </div>
  );
}
