// =============================================
// WhatsApp-Style Chat + Updates (BUILD-SAFE FINAL)
// Single file, valid JSX, predictable time handling
// =============================================

import React, { useState } from "react";
import "./chat.css";

// ---------------------------------------------
// Utility: safe current time generator (HH:MM)
// ---------------------------------------------
function getCurrentTime() {
  const d = new Date();
  const h = String(d.getHours()).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}

// =============================================
// Chat Screen
// =============================================
export function ChatScreen({
  name = "Rahul RAJBHAR",
  avatar,
  onBack,
}) {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    { from: "other", text: "Ab 2 sal me kaise kya karu kuchh samjh hi nhi aa raha", time: "21:27" },
    { from: "me", text: "Karo ho jayega", time: "21:27", seen: true },

    { from: "other", replyFrom: "You", replyText: "Aap logo me to hota hai", text: "Ha", time: "21:27" },
    { from: "me", text: "Mehnat karoge to", time: "21:27", seen: true },

    { from: "other", replyFrom: "You", replyText: "Mehnat karoge to", text: "Kaise", time: "21:27" },
    { from: "other", text: "पढ़ाई bhi to isi me hai", time: "21:27" },

    { type: "missed-voice-call", time: "09:15" },
    { type: "missed-video-call", time: "17:04" },

    { from: "deleted", text: "This message was deleted", time: "22:04" },

    { from: "me", text: "Tyag karna padega", time: "21:27", seen: true },
    { from: "me", text: "Kuchh karna hai to", time: "21:28", seen: true },

    { from: "other", text: "Dono ek sath", time: "21:28" },
    { from: "other", text: "Mera problem ye ki", time: "21:28" },
    { from: "other", text: "Rajan bhai ke shadi ka bhi kharch uthana padega", time: "21:28" },
    { from: "other", text: "दिक्कत ye hai", time: "21:29" },
    { from: "other", text: "Kaha se karunga do shadi ka arjest", time: "21:29" },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      from: "me",
      text: input,
      time: getCurrentTime(), // always valid
      seen: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <div className="wa">
      <div className="wa-h">
        <span className="bk" onClick={() => onBack && onBack()}>←</span>
        <img className="av" src={avatar || "https://i.pravatar.cc/100"} alt="avatar" />
        <div className="u">
          <div className="nm">{name}</div>
          <div className="st">last seen today at 15:35</div>
        </div>
        <div className="ic"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>video-call-refreshed</title><path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V10.5L21.15 7.35C21.3167 7.18333 21.5 7.14167 21.7 7.225C21.9 7.30833 22 7.46667 22 7.7V16.3C22 16.5333 21.9 16.6917 21.7 16.775C21.5 16.8583 21.3167 16.8167 21.15 16.65L18 13.5V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H4ZM4 18H16V6H4V18Z" fill="currentColor"></path></svg></div>
        <div className="ic"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>more-refreshed</title><path d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z" fill="currentColor"></path></svg></div>
      </div>

      <div className="wa-b">
        {messages.map((m, i) => {
          if (m.type === "missed-voice-call") {
            return (
              <div key={i} className="call missed">
                <div className="call-icon">📞</div>
                <div className="call-text">
                  <strong>Missed voice call</strong>
                  <span>Tap to call back</span>
                </div>
                <div className="call-time">{m.time}</div>
              </div>
            );
          }

          if (m.type === "missed-video-call") {
            return (
              <div key={i} className="call missed">
                <div className="call-icon video">
                  <div className="video-box">←</div>
                </div>
                <div className="call-text">
                  <strong>Missed video call</strong>
                  <span>Tap to call back</span>
                </div>
                <div className="call-time">{m.time}</div>
              </div>
            );
          }

          if (m.from === "deleted") {
            return (
              <div key={i} className="del">
                <em>This message was deleted</em>
                <small>{m.time}</small>
              </div>
            );
          }

          return (
            <div key={i} className={`mb ${m.from === "me" ? "s" : "r"}`}>
              {m.replyText && (
                <div className="reply-box">
                  <b>{m.replyFrom}</b>
                  <span>{m.replyText}</span>
                </div>
              )}
              <span>{m.text}</span>
              <small>
                {m.time} {m.from === "me" && m.seen ? <span>  <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18"><title>status-dblcheck</title><path style={{color:"#007bfc"}} fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
</span> : ""}
                
              </small>
            </div>
          );
        })}
      </div>

      <div className="wa-i">
        <span className="i">😊</span>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Message" />
        <span className="i">📎</span>
        <span className="i">📷</span>
        <button className="mic" onClick={sendMessage}>{input ? "➤" : "🎤"}</button>
      </div>
    </div>
  );
}

// Default export for simpler imports (prevents build errors)
export default ChatScreen;

// =============================================
// Updates / Status Screen
// =============================================
export function Updates() {
  const statuses = [
    { name: "Sandeep Sharma", img: "https://i.pravatar.cc/150?img=11", seen: false },
    { name: "Sachin Gupta", img: "https://i.pravatar.cc/150?img=12", seen: true },
    { name: "Gow Yadav", img: "https://i.pravatar.cc/150?img=13", seen: false },
    { name: "Vikas Babu", img: "https://i.pravatar.cc/150?img=14", seen: true },
  ];

  const channels = [
    { name: "Indian Cricket Team", time: "11:25", unread: true },
    { name: "CFO Courses", time: "06/12/2025" },
    { name: "TECNO INDIA", time: "02/08/2025" },
    { name: "(RowTeam) Android Hack Tool", time: "You followed the channel" },
    { name: "Coding Course", time: "Channel was created" },
  ];

  return (
    <div className="updates">
      <div className="updates-h">
        <h2>Updates</h2>
        <div className="icons">🔍 ⋮</div>
      </div>

      <div className="status-sec">
        <h3>Status</h3>
        <div className="status-row">
          <div className="status add">
            <div className="add-circle">＋</div>
            <span>Add status</span>
          </div>

          {statuses.map((s, i) => (
            <div key={i} className="status">
              <div className={`ring ${s.seen ? "seen" : ""}`}>
                <img src={s.img} alt={s.name} />
              </div>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="channel-sec">
        <div className="channel-h">
          <h3>Channels</h3>
          <button>Explore</button>
        </div>

        {channels.map((c, i) => (
          <div key={i} className="channel-row">
            <div className="ch-img"></div>
            <div className="ch-mid">
              <strong>{c.name}</strong>
              <span>{c.time}</span>
            </div>
            {c.unread && <div className="unread">1</div>}
          </div>
        ))}
      </div>

      <button className="cam-btn">📷</button>
    </div>
  );
}

// =============================================
// BASIC TEST CASES (manual)
// =============================================
// 1. App builds without error
// 2. Sending message always shows valid HH:MM time
// 3. No undefined or null time renders
// 4. Missed voice/video call bubbles render
