import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAING_ID",
  appId: "YOUR_APP_ID",
  measurementId: "_YOUR_MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const authBtn = document.getElementById("auth-btn");
const logoutBtn = document.getElementById("logout-btn");
const userGreeting = document.getElementById("user-greeting");
const authView = document.getElementById("auth-view");
const authForm = document.getElementById("auth-form");
const authTitle = document.getElementById("auth-title");
const authSubmitBtn = document.getElementById("auth-submit-btn");
const authToggleLink = document.getElementById("auth-toggle-link");
const authToggleMsg = document.getElementById("auth-toggle-msg");
const createPostView = document.getElementById("create-post-view");
const postForm = document.getElementById("post-form");
const postsContainer = document.getElementById("posts-container");

let isSignUpMode = true;

authBtn.addEventListener("click", () => {
  authView.classList.toggle("hidden");
});

authToggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  isSignUpMode = !isSignUpMode;
  authTitle.innerText = isSignUpMode ? "Create Account" : "Welcome Back";
  authSubmitBtn.innerText = isSignUpMode ? "Sign Up" : "Log In";
  authToggleMsg.innerText = isSignUpMode
    ? "Already have an account?"
    : "New around here?";
  authToggleLink.innerText = isSignUpMode ? "Log In" : "Sign Up";
});

authForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;

  try {
    if (isSignUpMode) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }
    authForm.reset();
    authView.classList.add("hidden");
  } catch (error) {
    alert(error.message);
  }
});

logoutBtn.addEventListener("click", () => signOut(auth));

onAuthStateChanged(auth, (user) => {
  if (user) {
    userGreeting.innerText = user.email;
    userGreeting.classList.remove("hidden");
    logoutBtn.classList.remove("hidden");
    createPostView.classList.remove("hidden");
    authBtn.classList.add("hidden");
    authView.classList.add("hidden");
  } else {
    userGreeting.classList.add("hidden");
    logoutBtn.classList.add("hidden");
    createPostView.classList.add("hidden");
    authBtn.classList.remove("hidden");
  }
});

postForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("post-title").value;
  const description = document.getElementById("post-desc").value;
  const currentUser = auth.currentUser;

  if (!currentUser) return alert("You must be logged in to post.");

  try {
    await addDoc(collection(db, "posts"), {
      title: title,
      description: description,
      authorEmail: currentUser.email,
      authorId: currentUser.uid,
      createdAt: serverTimestamp(),
    });
    postForm.reset();
  } catch (error) {
    console.error("Error publishing thread: ", error);
    alert("Could not post: Unauthorized action.");
  }
});

const postsQuery = query(collection(db, "posts"), orderBy("createdAt", "desc"));

onSnapshot(postsQuery, (snapshot) => {
  postsContainer.innerHTML = "";

  if (snapshot.empty) {
    postsContainer.innerHTML =
      '<p class="loading">No posts found. Start the conversation!</p>';
    return;
  }

  snapshot.forEach((doc) => {
    const data = doc.data();

    const dateOptions = {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDate = data.createdAt
      ? data.createdAt.toDate().toLocaleDateString("en-US", dateOptions)
      : "Just now";

    const postCard = document.createElement("div");
    postCard.className = "post-card";
    postCard.innerHTML = `
      <h3 class="post-title">${escapeHTML(data.title)}</h3>
      ${data.description ? `<p class="post-desc">${escapeHTML(data.description)}</p>` : ""}
      <div class="post-meta">Posted by ${escapeHTML(data.authorEmail)} • ${formattedDate}</div>
    `;
    postsContainer.appendChild(postCard);
  });
});

function escapeHTML(str) {
  if (!str) return "";
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        tag
      ] || tag,
  );
}
