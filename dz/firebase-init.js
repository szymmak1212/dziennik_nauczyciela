// Paste your Firebase config below and initialize Firebase app.
// 1) Create a Firebase project (console.firebase.google.com) named 'szkolny-dziennik' (or your chosen name)
// 2) Go to Project settings -> SDK setup and configuration -> Add app -> Web
// 3) Copy the Firebase config object into the firebaseConfig variable below
// 4) Save this file and open index.html

// EXAMPLE (replace the values with your project's keys):
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT.appspot.com",
//   messagingSenderId: "....",
//   appId: "..."
// };

// --- Paste your firebaseConfig here ---
const firebaseConfig = {
  apiKey: "REPLACE_ME",
  authDomain: "REPLACE_ME",
  projectId: "REPLACE_ME",
  storageBucket: "REPLACE_ME",
  messagingSenderId: "REPLACE_ME",
  appId: "REPLACE_ME"
};

// Initialize Firebase (compat mode)
firebase.initializeApp(firebaseConfig);
