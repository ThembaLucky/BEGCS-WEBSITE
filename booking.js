document.addEventListener("DOMContentLoaded", () => {
    // Select the booking form
    const bookingForm = document.getElementById("booking-form");

    // Handle form submission
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Collect form data
        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData);

        // Perform client-side validation
        if (!data.name || !data.email || !data.phone || !data.service || !data.date || !data.time) {
            alert("Please fill out all required fields.");
            return;
        }

        // Display a confirmation message
        const confirmationMessage = `
            Thank you for your booking, ${data.name}!<br>
            Here's what you submitted:<br><br>
            <strong>Email:</strong> ${data.email}<br>
            <strong>Phone:</strong> ${data.phone}<br>
            <strong>Service:</strong> ${data.service}<br>
            <strong>Preferred Date:</strong> ${data.date}<br>
            <strong>Preferred Time:</strong> ${data.time}<br>
            <strong>Additional Notes:</strong> ${data.message || "None"}<br><br>
            We will get back to you shortly!
        `;

        // Show confirmation in a modal or alert
        showConfirmation(confirmationMessage);

        // Reset the form fields
        bookingForm.reset();
    });

    // Function to show confirmation message in a modal
    function showConfirmation(message) {
        const modal = document.createElement("div");
        modal.innerHTML = `
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                        background: white; padding: 20px; border: 2px solid #ccc; z-index: 1000;
                        text-align: center; width: 80%; max-width: 500px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                ${message}
                <button style="margin-top: 10px; padding: 10px 20px; background: #4CAF50; color: white;
                               border: none; cursor: pointer;" onclick="document.body.removeChild(this.parentNode)">
                    Close
                </button>
            </div>
        `;
        document.body.appendChild(modal);
    }
});
