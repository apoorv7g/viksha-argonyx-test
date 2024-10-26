const closeButton = document.getElementById("closeButton");
        const overlay = document.getElementById("overlay");

        // Lock scroll
        document.body.style.overflow = "hidden";

        closeButton.addEventListener("click", () => {
            overlay.style.display = "none"; // Hide the overlay
            document.body.style.overflow = "auto"; // Unlock scroll
        });
    // JavaScript to handle the invitation ID and date/time display
    const invitationId = document.getElementById("invitationId");
    const dateTimeElement = document.getElementById("dateTime");

    // Generate a random invitation ID (12 characters: uppercase letters and numbers)
    function generateInvitationId() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let id = '';
        for (let i = 0; i < 12; i++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return id;
    }

    // Get current date and time with time zone
    function getCurrentDateTime() {
        const now = new Date();
        return now.toLocaleString("en-US", { timeZoneName: "short" });
    }

    // When the DOM is loaded
    document.addEventListener("DOMContentLoaded", () => {
        invitationId.textContent = generateInvitationId(); // Set random invitation ID
        function checkScreenSize() {
            if (window.innerWidth <= 360) {
                // Display the overlay and prevent scrolling
                document.getElementById("sizeAlertOverlay").style.display = "flex";
                document.body.style.overflow = "hidden";
            } else {
                // Hide the overlay and restore scrolling if width is larger than 360px
                document.getElementById("sizeAlertOverlay").style.display = "none";
                document.body.style.overflow = "auto";
            }
        }

        // Check screen size on load
        checkScreenSize();

        // Add event listener for resizing
        window.addEventListener("resize", checkScreenSize);
    });

const glitchElements = document.querySelectorAll("#glitch");
const audio = document.getElementById("hoverSound");

glitchElements.forEach(glitchElement => {
    glitchElement.addEventListener("mouseenter", () => {
        audio.currentTime = 0; // Reset audio to the beginning
        audio.play();
    });

    glitchElement.addEventListener("mouseleave", () => {
        audio.pause(); // Pause audio on mouse leave
        audio.currentTime = 0; // Reset to start in case of next hover
    });
});
