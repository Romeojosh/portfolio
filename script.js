// Toggle project details
function showProjectDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
        projectDetails.style.display = "block";
    } else {
        projectDetails.style.display = "none";
    }
}

// Handle form submission (on Contact Page)
function handleFormSubmit(event) {
    event.preventDefault();  // Prevent form from submitting to a server
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending the data (for now, just log to console)
    console.log('Form submitted with:', { name, email, message });

    // Clear the form
    document.getElementById('contactForm').reset();
    alert('Thank you for your message!');
}
