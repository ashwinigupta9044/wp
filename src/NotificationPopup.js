import "./style/popup.css";

function NotificationPopup({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="chat-popup">

      <div className="chat-card">

        {/* Profile Image */}
        <img
          src={data.image || "https://via.placeholder.com/50"}
          alt="profile"
          className="chat-avatar"
        />

        {/* Content */}
        <div className="chat-content">
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>

        {/* Close */}
        <button className="chat-close" onClick={onClose}>✖</button>

      </div>
    </div>
  );
}

export default NotificationPopup;