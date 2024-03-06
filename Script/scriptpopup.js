document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popupContainer');
    const newsletterForm = document.getElementById('newsletterForm');

    // Show the popup after a delay (e.g., 3 seconds)
    setTimeout(function () {
        popupContainer.style.display = 'flex';
    }, 3000);

    // Handle form submission
    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value;

        // Add your logic for handling the email subscription here

        // Close the popup after submission (you can modify this behavior)
        closePopup();
    });
});

function closePopup() {
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.style.display = 'none';
}