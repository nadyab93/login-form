document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email === 'user@example.com' && password === 'password123') {
        window.location.href = 'dashboard.html';
    } else {
        // Display error message if credentials are incorrect
        document.getElementById('errorMessage').textContent = 'Incorrect email or password. Please try again.';
        document.getElementById('errorMessage').style.display = 'block'; // Show error message
    }
});
