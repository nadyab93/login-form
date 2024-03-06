document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // Here, you would typically send the data to a backend for processing and storage
    // For this basic example, we won't implement the storage functionality
    alert('Registration successful!');
    // Optionally, you can redirect the user to the login page after successful registration
    // window.location.href = 'index.html';
});
