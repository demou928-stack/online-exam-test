// ============================================================
// REPLACE WITH YOUR OWN FIREBASE CONFIG
// ============================================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Helper: get current user data
async function getCurrentUserData() {
  const user = auth.currentUser;
  if (!user) return null;
  const doc = await db.collection('users').doc(user.uid).get();
  return doc.exists ? { uid: user.uid, ...doc.data() } : null;
}

// Helper: require auth
function requireAuth(role = null) {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        window.location.href = '../index.html';
        reject('Not authenticated');
        return;
      }
      const data = await getCurrentUserData();
      if (role && data.role !== role) {
        alert('Access denied');
        window.location.href = '../index.html';
        reject('Wrong role');
        return;
      }
      resolve(data);
    });
  });
}
