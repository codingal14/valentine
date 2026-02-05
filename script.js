let noClicks = 0;

const messages = [
  "Chadddiiiii",
  "Oye hello?",
  "Zyada ho raha hai ab",
  "Badtameezi mat kar, gussa ho jaungi maii"
];

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const angryGif = document.getElementById("angryGif");

noBtn.addEventListener("click", () => {
  if (noClicks < 4) {
    message.innerText = messages[noClicks];

    if (noClicks === 3) {
      angryGif.style.display = "block";
      angryGif.classList.remove("pop");
      void angryGif.offsetWidth; // re-trigger animation
      angryGif.classList.add("pop");
    } else {
      angryGif.style.display = "none";
    }

    noClicks++;
    yesBtn.style.transform = `scale(${1 + noClicks * 0.4})`;
  }
});

yesBtn.addEventListener("click", () => {

  // 💖 Heart Confetti
  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      shapes: ['heart'],
      colors: ['#ff4d6d', '#ff758f', '#ffb3c1']
    });
    confetti({
      particleCount: 6,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      shapes: ['heart'],
      colors: ['#ff4d6d', '#ff758f', '#ffb3c1']
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();

  // 💌 Final message
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:150px; font-family:Comic Sans MS;">
      <h1 style="color:#ff4d6d;">Hehehe, I knew it! 💘</h1>
      <p style="font-size:22px;">
        You have been making good choices since 23rd March 2025 ;) <br>
        I love you babyy 💖
      </p>
    </div>
  `;
});
