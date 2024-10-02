document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if username and password match the required credentials
    if (username === "Adnan Khan" && password === "Adnan@123") {
        alert("Login successful");
        // Redirect to admin panel
        window.location.href = "admin.html";
    } else {
        alert("Invalid credentials, please try again.");
    }
});
