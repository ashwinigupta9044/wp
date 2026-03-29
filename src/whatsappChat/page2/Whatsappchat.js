import "./whatsappChat.css";
import {
  FaArrowLeft,
  FaPhone,
  FaVideo,
  FaEllipsisV,
  FaCheckDouble
} from "react-icons/fa";

const messages = [
  { id: 1, text: "Haan bhai kaha ho?", time: "10:05", type: "received" },
  { id: 2, text: "Thoda busy tha", time: "10:06", type: "sent", seen: true },
  { id: 3, text: "Kab free hoge?", time: "10:07", type: "received" },
  { id: 4, text: "Shaam ko", time: "10:07", type: "sent", seen: true },
  { id: 5, text: "Aaj milna hai zaroori", time: "10:08", type: "received" },
  { id: 6, text: "Theek hai bata dena time", time: "10:09", type: "sent", seen: true },
  { id: 7, text: "6 baje chalega?", time: "10:10", type: "received" },
  { id: 8, text: "Haan perfect 👍", time: "10:10", type: "sent", seen: true },
  { id: 9, text: "Location bhej dunga", time: "10:11", type: "received" },
  { id: 10, text: "Ok waiting", time: "10:12", type: "sent", seen: false },
  { id: 11, text: "Jaldi aana", time: "10:13", type: "received" }
];

export default function WhatsAppChat() {
  return (
    <div className="wa-container">

      {/* Header */}
      <div className="wa-header-chat">
        <FaArrowLeft />
        <img src="https://i.pravatar.cc/100" className="profile" />
        <div className="user-info">
          <h4>Adarsh Alhabad</h4>
          <span>last seen today at 10:17</span>
        </div>
        <div className="header-icons">
          <FaVideo />
          <FaPhone />
          <FaEllipsisV />
        </div>
      </div>

      {/* Chat Area */}
      <div className="wa-chat">

        <div className="date">11 April 2025</div>

        <div className="encrypt">
          🔒 Messages and calls are end-to-end encrypted.
        </div>

        {messages.map(msg => (
          <div key={msg.id} className={`msg ${msg.type}`}>
            {msg.text}
            <span>
              {msg.time}
              {msg.type === "sent" && (
                <FaCheckDouble
                  style={{ marginLeft: 4, color: msg.seen ? "#53bdeb" : "#777" }}
                />
              )}
            </span>
          </div>
        ))}

      </div>

      {/* Input */}
      <div className="wa-input">
        <input placeholder="Message" />
        <button>🎤</button>
      </div>
    </div>
  );
}
