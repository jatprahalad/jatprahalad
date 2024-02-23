const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Replace this with your logic to validate username and password against registered users
  // This is just a simple example, you should implement proper authentication mechanisms
  if (username === 'admin' && password === 'password') {
    message.textContent = 'Login successful!';
    
    // Redirect to another page or perform other actions after successful login
  } else {
    message.textContent = 'Invalid username or password.';
  }
});
