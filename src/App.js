import { useEffect, useState } from "react";
import { requestPermission, listenNotification } from "./notification";
import NotificationPopup from "./NotificationPopup";

function App() {
  const [queue, setQueue] = useState([]);
  const [current, setCurrent] = useState(null);

  listenNotification((data) => {
  setQueue((prev) => [...prev, data]);
});

  useEffect(() => {
    requestPermission();

    // 🔥 notification listener
    listenNotification((data) => {
      setQueue((prev) => [...prev, data]); // queue में add
    });
  }, []);

  // 🔥 queue system
  useEffect(() => {
    if (!current && queue.length > 0) {
      setCurrent(queue[0]);
      setQueue((prev) => prev.slice(1));
    }
  }, [queue, current]);

  const handleClose = () => {
    setCurrent(null); // next popup show होगा
  };

  return (
    <div>
      

      {/* WhatsApp style popup */}
      <NotificationPopup data={current} onClose={handleClose} />
    </div>
  );
}

export default App;