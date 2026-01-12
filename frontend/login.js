import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
  updateProfile,
  signOut
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8C6ncKCm4cH0yhMZaPHzzS5GfbDZvp84",
  authDomain: "mindmates-286b9.firebaseapp.com",
  projectId: "mindmates-286b9",
  storageBucket: "mindmates-286b9.firebasestorage.app",
  messagingSenderId: "94777729364",
  appId: "1:94777729364:web:35a2cefa204ec71d8668c1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//
// 🔹 ROLE HANDLING
//
let selectedRole = "Student";
const roleButtons = document.querySelectorAll(".role");
roleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    roleButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedRole = btn.innerText;
  });
});

function redirectByRole() {
  if (selectedRole === "Counselor") {
    window.location.href = "dashboard1.html";
  } else {
    window.location.href = "dashboard.html";
  }
}

// LOGIN
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      // If currently signed in as anonymous, log them out first
      if (auth.currentUser && auth.currentUser.isAnonymous) {
        await signOut(auth);
      }

      await signInWithEmailAndPassword(auth, email, password);
      redirectByRole(); // role-based dashboard
    } catch (err) {
      alert(err.message);
    }
  });
}

// SIGNUP
const signupBtn = document.getElementById("signupBtn");
if (signupBtn) {
  signupBtn.addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    try {
      // If currently signed in as anonymous, log them out first
      if (auth.currentUser && auth.currentUser.isAnonymous) {
        await signOut(auth);
        alert("You were logged out of anonymous mode. Now please signup again.");
        return;
      }

      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCred.user, { displayName: name });
      redirectByRole(); // role-based dashboard
    } catch (err) {
      alert(err.message);
    }
  });
}

// ANONYMOUS (unchanged)
const anonBtn = document.getElementById("anonBtn");
if (anonBtn) {
  anonBtn.addEventListener("click", async () => {
    try {
      await signInAnonymously(auth);
      window.location.href = "dashboard2.html";
    } catch (err) {
      alert(err.message);
    }
  });
}
