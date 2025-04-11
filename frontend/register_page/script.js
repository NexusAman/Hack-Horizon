document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const number = document.getElementById('number').value.trim();
  const aadhaar = document.getElementById('aadhaar').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (!name || !number || !aadhaar || !password || !confirmPassword) {
    alert('Please fill out all fields!');
    return;
  }

  if (!/^\d{10}$/.test(number)) {
    alert('Phone number must be exactly 10 digits.');
    return;
  }

  if (!/^\d{12}$/.test(aadhaar)) {
    alert('Aadhaar number must be exactly 12 digits.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Save user data in localStorage
  const userData = {
    name,
    number,
    aadhaar,
    password
  };
  localStorage.setItem('sevasetuUser', JSON.stringify(userData));

  alert('Account created successfully!');
  window.location.href = "/frontend/login_page/login.html"; // Redirect to login
});
