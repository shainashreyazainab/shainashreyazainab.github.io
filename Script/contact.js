document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    // Handle form submission
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Add your logic for handling the form submission here

        // Clear form fields (you can modify this behavior)
        contactForm.reset();
    });
});