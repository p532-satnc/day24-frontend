// Load menus
function loadMenu(type) {
  let url = "https://day22-latest.onrender.com/merger";
  if (type) url += `/${type}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMenuItems(data))
    .catch(err => console.error(err));
}

// Display fetched menu
function displayMenuItems(items) {
  const container = document.getElementById("menu-items");
  container.innerHTML = "";
  items.forEach(item => {
    container.innerHTML += `
      <div class="menu-item">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>Vegetarian: ${item.vegetarian ? "Yes" : "No"}</p>
        <p>Price: $${item.price}</p>
      </div>
    `;
  });
}

// Navigate to a different page
function navigateTo(page) {
  window.location.href = page;
}

// Handle signup form submission
function setupSignupForm() {
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", e => {
      e.preventDefault();
      const data = {
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
      };

      fetch("https://day22-latest.onrender.com/merger/signup", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => {
        if (res.ok) {
          alert("Signup successful!");
          window.location.href = "index.html";
        } else {
          alert("Signup failed.");
        }
      });
    });
  }
}


// Handle login form submission
function setupLoginForm() {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;

      if (username && password) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", username);  // store logged-in user
        window.location.href = "menu.html";

      } else {
        alert("Invalid login.");
      }
    });
  }
}

// Run setup functions when the page loads
window.onload = function() {
  setupSignupForm();
  setupLoginForm();
}

