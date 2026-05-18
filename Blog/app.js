import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAv7nR2yf6qZDfURiG5OG7_llIQWb6EpJA",
  authDomain: "userform-cd03d.firebaseapp.com",
  projectId: "userform-cd03d",
  storageBucket: "userform-cd03d.firebasestorage.app",
  messagingSenderId: "766236048799",
  appId: "1:766236048799:web:aad812703b62bd951e91aa",
  measurementId: "G-0BQLFTQW6P",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const addButtonEl = document.getElementById("add-blog");
const blogWrapperEl = document.getElementById("blog-wrapper");
function addBlogClickHandler() {
  location.href = "./add/index.html";
}
addButtonEl.addEventListener("click", addBlogClickHandler);

async function fetchBlogs() {
  blogWrapperEl.innerHTML = "";
  const collectionRef = db.collection("blogs");
  const qsnapshot = await collectionRef.get();

  qsnapshot.forEach((doc) => {
    const blogData = {
      ...doc.data(),
      id: doc.id,
    };
    renderCard(blogData);
  });
}

function deleteBlogHandler(id) {
  const collectionRef = db.collection("blogs");
  const docRef = collectionRef.doc(id);

  docRef
    .delete()
    .then(() => {
      alert("This blog is deleted");
      fetchBlogs();
    })
    .catch((error) => {
      console.log("failed to delete it");
    });
}

function editBlogHandler(id) {
  location.href(`./edit/index.html?id=${id}`);
}

function renderCard({ id, description, title }) {
  const html = `<div class="blog" id=${id}>
  <h1>${title}</h1>
  <p>${description}</p>
  <button onclick='deleteBlogHandler("${id}")'>Delete</button>
  <button onclick='editBlogHandler("${id}")'>Edit</>
  </div>`;

  blogWrapperEl.innerHTML += html;
}
fetchBlogs();