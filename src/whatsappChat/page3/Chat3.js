import React from "react";
import "../whatsapp.css";


import { useNavigate } from "react-router-dom";

const chats = [
 
  { id: 2, name: "Mitthi", msg: "Sorry yaar, kal reply hi nahi kar paaya", time: "14:56" ,avatar:"image/page3/1.jpg", avatarColor: "#ec4899", status: "" },


  
  { id: 1, name: "Arun Nair", msg: "Achha suno, kal wali baat detail me discuss karni hai.", time: " 13:50", avatar:"image/page3/0.png", avatarColor: "#ec4899", status: "seen" },
  { id: 2, name: "My Life", msg: "Project ke kuch points pending hain, aaj update de dunga.", avatar:"image/page3/2.jpg",  time: " 12:40", avatarColor: "#ec4899", status: "delivered" },
  { id: 3, name: "Vishnu Krishnan", msg: "Weekend par free ho to milte hain.", time: " 11:15", avatar:"image/page3/0.png", avatarColor: "#ec4899",  status: "sent" },
  { id: 4, name: "Rahul Pillai", msg: "Meeting ka summary bhej raha hoon, check kar lena.", time: " 10:05",  avatar:"image/page3/0.png", avatarColor: "#ec4899", status: "seen" },
  { id: 5, name: "Sreejith Kumar", msg: "Abhi travel me hoon isliye reply late aa raha hai.", time: " 09:30", avatar:"image/page3/3.jpg",  avatarColor: "#ec4899", status:"delivered" },
  { id: 6, name: "Akhil Varma", msg: "Final testing chal rahi hai, aaj raat tak complete.", time: "Yesterday", avatar:"image/page3/0.png", status: "seen" },
  { id: 7, name: "Deepak Namboothiri", msg: "File share kar di hai, changes ho to batao.", time: "Yesterday", avatar:"image/page3/0.png", status: "" },
  { id: 8, name: "Kiran Das", msg: "Thoda delay hua hai par kaam track par hai.", time: "Yesterday", avatar:"image/page3/4.jpg", status: "delivered" },
  { id: 9, name: "Manu Mohan", msg: "Client ka response aa gaya hai.", time: "Yesterday", avatar:"image/page3/0.png", status: "seen" },
  { id:10, name: "Praveen Nair", msg: "Kal subah detail me discuss karte hain.", time: "Yesterday", avatar:"image/page3/0.png", status: "" },
  { id:11, name: "Rohit Malhotra", msg: "Traffic ki wajah se late ho gaya.", time: "Yesterday", avatar:"image/page3/5.jpg", status: "seen" },
  { id:12, name: "Aman Mehta", msg: "Deal final ho gayi hai, documents ready hain.", time: "Yesterday", avatar:"image/page3/0.png", status: "delivered" },
  { id:13, name: "Kunal Shah", msg: "Payment confirmation aa gaya hai.", time: "Monday", avatar:"image/page3/0.png", status: "seen" },
  { id:14, name: "Rohan Verma", msg: "Meeting thodi long ho gayi thi.", time: "Monday", avatar:"image/page3/6.jpg", status: "sent" },
  { id:15, name: "Siddharth Joshi", msg: "New idea discuss karna hai.", time: "Sunday", avatar:"image/page3/0.png", status: "delivered" },

  // { id:16, name: "Nikhil Patil", msg: "File email par bhejna better rahega.", time: "Monday", status: "seen" },
  // { id:17, name: "Aditya Kulkarni", msg: "Kal ka plan confirm hai.", time: "Monday", status: "sent" },
  // { id:18, name: "Yash Desai", msg: "Client feedback positive hai.", time: "Monday", status: "seen" },
  // { id:19, name: "Saurabh Jain", msg: "Market thoda volatile tha.", time: "3 days ago, 20:40", status: "delivered" },
  // { id:20, name: "Pratik Sawant", msg: "Design ke colors adjust karne padenge.", time: "3 days ago, 19:10", status: "sent" },

  { id:21, name: "Abhishek Mishra", msg: "Server issue resolve ho gaya.", time: "Wednesday", avatar:"image/page3/7.jpg", status: "seen" },
  { id:22, name: "Piyush Agarwal", msg: "Invoice generate kar di hai.", time: "Wednesday", avatar:"image/page3/0.png", status: "delivered" },
  { id:23, name: "Harsh Vora", msg: "Kal next phase start karte hain.", time: "18/12/2025", avatar:"image/page3/20.jpg", status: "seen" },
  { id:24, name: "Manish Bansal", msg: "Thoda urgent kaam aa gaya tha.", time: "18/12/2025",avatar:"image/page3/8.jpg", status: "sent" },
  { id:25, name: "Akshay Thakur", msg: "Training schedule share kar raha hoon.", time: "16/12/2025", avatar:"image/page3/0.png", status: "delivered" },

  { id:26, name: "Varun Khanna", msg: "Client se call ho gayi hai.", time: "16/12/2025", avatar:"image/page3/9.jpg", status: "seen" },
  { id:27, name: "Jayesh Mistry", msg: "Budget approve ho gaya hai.", time: "15/12/2025", avatar:"image/page3/0.png", status: "seen" },
  { id:28, name: "Hardik Patel", msg: "Gujarat side ka kaam smooth chal raha hai.", time: "10/12/2025", avatar:"image/page3/21.jpg", status: "delivered" },
  { id:29, name: "Ketan Shah", msg: "Meeting agenda mail kar diya.", time: "06/12/2025", avatar:"image/page3/0.png", status: "" },
  { id:30, name: "Chirag Desai", msg: "Design final ho gaya hai.", time: "06/12/2025", avatar:"image/page3/19.jpg", status: "seen" },

  // { id:31, name: "Amit Trivedi", msg: "Kal site visit hai, timing confirm kar lena.", time: "06/12/2025", status: "delivered" },
  // { id:32, name: "Parth Joshi", msg: "Report ready hai, PDF bhej raha hoon.", time: "07/12/2025", status: "seen" },
  // { id:33, name: "Sandeep Dave", msg: "Aaj thoda busy schedule hai.", time: "07/12/2025", status: "sent" },
  // { id:34, name: "Jay Patel", msg: "Sab kuch track par hai.", time: "7 days ago, 19:05", status: "delivered" },
  // { id:35, name: "Hiren Modi", msg: "Client meeting successful rahi.", time: "7 days ago, 18:00", status: "seen" },

  { id:36, name: "Bhavesh Parmar", msg: "Next week ka plan bana lete hain.", time: "25/11/2025", avatar:"image/page3/11.jpg", status: "" },
  { id:37, name: "Ronak Solanki", msg: "Data update kar diya hai.", time: "20/11/2025", avatar:"image/page3/18.jpg", status: "delivered" },
  { id:38, name: "Kalpesh Makwana", msg: "Final review ke baad submit kar denge.", avatar:"image/page3/0.png", time: "20/11/2025", status: "seen" },
  { id:39, name: "Darshan Chauhan", msg: "Kaam almost done hai.", time: "08/11/2025", avatar:"image/page3/12.jpg", status: "sent" },
  { id:40, name: "Mahesh Vyas", msg: "Client feedback ka wait hai.", time: "09/10/2025", avatar:"image/page3/0.png", status: "delivered" },

  { id:41, name: "Jignesh Rathod", msg: "Sab clear hai, aage proceed kar sakte hain.", time: "20/10/2025", avatar:"image/page3/13.jpg", status: "seen" },
  { id:42, name: "Sangeeta Chauhan", msg: "Kal call par baat karte hain.", time: "09/10/2025", avatar:"image/page3/14.jpg", status: "" },
  { id:43, name: "Piyush Ahuja", msg: "Meeting ke baad update deta hoon.", time: "09/10/2025", avatar:"image/page3/15.jpg", status: "delivered" },
  { id:44, name: "Ramesh Kumar", msg: "Documents verify ho gaye hain.", time: "10/10/2025", avatar:"image/page3/17.jpg", status: "seen" },
  { id:45, name: "Mukesh ", msg: "Payment process me hai.", time: "10/10/2025", avatar:"image/page3/16.jpg", status: "" },
  // { id:46, name: "Sunil Chauhan", msg: "Kal office me milte hain.", time: "10 days ago, 19:00", status: "delivered" },
  // { id:47, name: "Lavkush Yadav", msg: "Client ne changes suggest kiye hain.", time: "10 days ago, 18:05", status: "seen" },
  // { id:48, name: "Ajeet Jaiswal", msg: "Final approval mil gaya.", time: "11 days ago, 21:20", status: "seen" },
  // { id:49, name: "Sonu Gupta", msg: "Next step par move karte hain.", time: "11 days ago, 20:00", status: "sent" },
   { id:50, name: "Manish Kumar Gond", msg: "Sab data upload ho gaya hai.", time: "10/05/2025", avatar:"image/page3/0.png", status: "delivered" }
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


export default function Chat4() {

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
            <button  onClick={() => navigate('/call3' )}>
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
