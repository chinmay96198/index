document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    const birthdaySong = document.getElementById("birthdaySong");
    const playButton = document.createElement("button");
    
    // Create Play Button for Audio
    playButton.innerText = "Play Birthday Song 🎶";
    playButton.style.position = "absolute";
    playButton.style.top = "20px";
    playButton.style.left = "50%";
    playButton.style.transform = "translateX(-50%)";
    playButton.style.padding = "10px 20px";
    playButton.style.fontSize = "16px";
    playButton.style.cursor = "pointer";
    playButton.style.border = "none";
    playButton.style.background = "#ff4081";
    playButton.style.color = "white";
    playButton.style.borderRadius = "5px";
    
    document.body.appendChild(playButton);
    
    // Play Song on Button Click
    playButton.addEventListener("click", function () {
        birthdaySong.play();
        playButton.style.display = "none"; // Hide button after clicking
    });

    // Confetti Effect on Card Open
    function launchConfetti() {
        const confettiCount = 50;
        for (let i = 0; i < confettiCount; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            document.body.appendChild(confetti);

            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;

            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }

    // Detect Card Open
    let isOpen = false;
    card.addEventListener("click", function () {
        if (!isOpen) {
            launchConfetti();
            isOpen = true;
        }
    });
});
