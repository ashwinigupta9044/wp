import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { app } from "./firebase";

const messaging = getMessaging(app);

// 🔔 Permission + Token
export const requestPermission = async () => {
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey: "BIIuLLZVZX9_esE2OF0GTpDJljOdjpFvInx-KRkLvm0AXrKztf0t0VKLhE8gCowIAdnNgigCqwNKhgzBn6486Qo"
    });

    console.log("FCM Token:", token);

    // 🔥 Backend को भेजो
    await fetch("http://localhost:5000/save-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token })
    });

  } else {
    console.log("Permission denied");
  }
};

// 🔥 Foreground Notification (UPDATED)
export const listenNotification = (callback) => {
  onMessage(messaging, (payload) => {
    console.log("Message received:", payload);

    // 👉 alert हटाकर data भेज रहे हैं
    callback({
      title: payload.notification.title,
      body: payload.notification.body,
      image: payload.notification.image,
      url: payload.fcmOptions?.link
    });
  });
};