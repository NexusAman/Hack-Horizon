document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const aadhaar = document.getElementById('aadhaar').value;
  const password = document.getElementById('password').value;

  if (name && email && aadhaar && password) {
      alert('Account created successfully!');
      // You can add further logic for saving the data or redirecting
  } else {
      alert('Please fill out all fields!');
  }
});
