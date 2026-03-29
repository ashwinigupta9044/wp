importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAI2nHamONTU7jSqKX8e3DUe3Wln2oiCDI",
  authDomain: "wptool-edfc6.firebaseapp.com",
  projectId: "wptool-edfc6",
  messagingSenderId: "217477386141",
  appId: "1:217477386141:web:ae031c155d9c97d420e974"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});