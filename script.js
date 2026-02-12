// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const envelope = document.getElementById("envelope-container");
    const letter = document.getElementById("letter-container");
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".btn[alt='Yes']");

    const title = document.getElementById("letter-title");
    const catImg = document.getElementById("letter-cat");
    const buttons = document.getElementById("letter-buttons");
    const finalText = document.getElementById("final-text");

    // Click Envelope
    if (envelope) {
        envelope.addEventListener("click", () => {
            envelope.style.display = "none";
            letter.style.display = "flex";

            setTimeout( () => {
                document.querySelector(".letter-window").classList.add("open");
            },50);
        });
    }

    // Logic to move the NO btn
    if (noBtn) {
        noBtn.addEventListener("mouseover", () => {
            const min = 200;
            const max = 300;

            const distance = Math.random() * (max - min) + min;
            const angle = Math.random() * Math.PI * 2;

            const moveX = Math.cos(angle) * distance;
            const moveY = Math.sin(angle) * distance;

            noBtn.style.transition = "transform 0.3s ease";
            noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

    // YES is clicked
    if (yesBtn) {
        yesBtn.addEventListener("click", () => {
            title.textContent = "Yippeeee!";

            catImg.src = "cat_dance.gif";

            document.querySelector(".letter-window").classList.add("final");

            buttons.style.display = "none";

            finalText.style.display = "block";

            document.getElementById("letter-section").style.display = "flex";
        });
    }

 // View Letter button logic
const viewLetterBtn = document.getElementById("view-letter-btn");
const letterDisplay = document.getElementById("letter-display");

if (viewLetterBtn) {
    viewLetterBtn.addEventListener("click", () => {
        // Check visibility based on the class instead of display style for better reliability
        const isOpening = !letterDisplay.classList.contains('large');

        if (isOpening) {
            // --- OPENING LOGIC ---
            letterDisplay.style.display = "block"; 
            
            // Allow a frame for display:block to register
            requestAnimationFrame(() => {
                letterDisplay.classList.add('large');
                // Use inline styles to ensure they beat any conflicting CSS
                letterDisplay.style.opacity = "1";
                letterDisplay.style.transform = "translate(-50%, -50%) scale(1)";
            });

            viewLetterBtn.textContent = "Close Letter ✕";
            letterDisplay.tabIndex = -1;
            letterDisplay.focus();
            letterDisplay.scrollTop = 0;
        } else {
            // --- CLOSING LOGIC ---
            letterDisplay.classList.remove('large');
            letterDisplay.style.opacity = "0";
            letterDisplay.style.transform = "translate(-50%, -50%) scale(0.8)";
            
            viewLetterBtn.textContent = "View Letter ♡";

            // Wait for the 300ms transition defined in your CSS
            setTimeout(() => {
                // Only hide if the user hasn't tried to reopen it during the animation
                if (!letterDisplay.classList.contains('large')) {
                    letterDisplay.style.display = "none";
                }
            }, 300); 
        }
    });
}
