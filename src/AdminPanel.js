import { useState } from "react";

function AdminPanel() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const sendNotification = async () => {
    if (!title || !body) {
      alert("Title aur message daalo");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/send-all", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          body,
          image,
          url
        })
      });

      const data = await res.json();
      console.log("Response:", data);

      alert("🔥 Notification Sent Successfully");

      // Clear fields
      setTitle("");
      setBody("");
      setImage("");
      setUrl("");

    } catch (error) {
      console.error(error);
      alert("❌ Error sending notification");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🚀 Admin Panel</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Message"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Open Link URL (optional)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <br /><br />

      <button onClick={sendNotification}>
        🔔 Send to All Users
      </button>
    </div>
  );
}

export default AdminPanel;