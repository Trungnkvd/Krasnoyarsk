// Firebase configuration - Dùng thông tin bạn lấy từ Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyANpVXXb7dJzWs5x6RvvmwS7tF9ErVIsEA", // Lấy từ Firebase
    authDomain: "test-c400a.firebaseapp.com", // Lấy từ Firebase
    projectId: "test-c400a", // Lấy từ Firebase
    storageBucket: "test-c400a.firebasestorage.app", // Lấy từ Firebase
    appId: "1:399378368992:web:7bb499b780e492ef964385",
    measurementId: "G-C80E0YYJYR"
  };
  
  // Khởi tạo Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  let user = null;
  
  // Đăng nhập bằng Google
  function login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
      user = result.user;
      showUserInfo();
    }).catch((error) => {
      console.error(error);
    });
  }
  
  // Hiển thị thông tin người dùng sau khi đăng nhập
  function showUserInfo() {
    document.getElementById('login-button').style.display = 'none';
    document.getElementById('forum').style.display = 'block';
  
    const userInfo = `
      <h2>Welcome, ${user.displayName}</h2>
      <img src="${user.photoURL}" alt="User Photo" class="rounded-full mx-auto">
      <p>Email: ${user.email}</p>
    `;
    document.getElementById('user-info').innerHTML = userInfo;
  
    // Tải các bài viết forum
    loadForumPosts();
  }
  
  // Tải các bài viết forum (bài viết giả lập)
  function loadForumPosts() {
    const postsContainer = document.getElementById('posts');
    
    // Bài viết giả lập
    const posts = [
      { user: "User 1", content: "This is a test post!" },
      { user: "User 2", content: "Hello, how is everyone?" },
      { user: "User 3", content: "Looking forward to more posts!" }
    ];
  
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('border-b', 'py-3');
      postElement.innerHTML = `
        <strong>${post.user}</strong>
        <p>${post.content}</p>
      `;
      postsContainer.appendChild(postElement);
    });
  }