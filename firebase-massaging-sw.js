importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAo7ghgHswqPDlwqAe7qgd0ZXT0TcZMs9o",
  authDomain: "amarchat-328de.firebaseapp.com",
  projectId: "amarchat-328de",
  storageBucket: "amarchat-328de.firebasestorage.app",
  messagingSenderId: "549501657163",
  appId: "1:549501657163:web:83d8015892188f7162edce"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification?.title || 'AmarChat 💬';
  const options = {
    body: payload.notification?.body || 'নতুন মেসেজ আসছে',
    icon: '/icon.png'
  };
  self.registration.showNotification(title, options);
});
