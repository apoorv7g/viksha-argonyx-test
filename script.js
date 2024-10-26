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
