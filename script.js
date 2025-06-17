document.addEventListener('DOMContentLoaded', () => {
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const day = dayNames[now.getDay()];
    const date = now.getDate();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    document.getElementById('dayDate').textContent = `${day}, ${date} ${month} ${year}`;
  }

  setInterval(updateClock, 1000);
  updateClock();

  const quotes = [
    "“Aku tidak akan mengulangi kesalahan yang sama.”",
    "“Kebencian adalah kekuatanku.”",
    "“Aku berjalan di jalan kegelapan demi tujuanku.”",
    "“Aku tidak butuh cinta, aku butuh kekuatan.”",
    "“Balas dendam adalah satu-satunya alasanku hidup.”",
    "“Kenyataan kadang lebih menyakitkan daripada mimpi buruk.”",
    "“Aku telah memilih jalan yang gelap, dan aku tidak akan berpaling.”",
    "“Kekuasaan sejati hanya bisa didapatkan dengan pengorbanan.”",
    "“Jika kamu ingin mengenalku... maka bencilah aku, bencilah dan hiduplah dalam kebencian.”",
    "“Aku sudah kehilangan segalanya, dan itu yang membuatku kuat.”"
  ];

  let currentQuote = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeQuote() {
    const quoteEl = document.getElementById('quote');
    const currentText = quotes[currentQuote];

    if (!isDeleting) {
      charIndex++;
      quoteEl.textContent = currentText.substring(0, charIndex);
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeQuote, 3000);
      } else {
        setTimeout(typeQuote, 60);
      }
    } else {
      charIndex--;
      quoteEl.textContent = currentText.substring(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        currentQuote = (currentQuote + 1) % quotes.length;
        setTimeout(typeQuote, 500);
      } else {
        setTimeout(typeQuote, 30);
      }
    }
  }

  typeQuote();

  function triggerChidori() {
    const chidori = document.getElementById('chidori');
    chidori.style.animation = 'spark 0.6s ease-out';
    chidori.style.opacity = '1';
    setTimeout(() => {
      chidori.style.animation = 'none';
      chidori.style.opacity = '0';
    }, 600);
  }

  setInterval(() => {
    if (Math.random() > 0.4) {
      triggerChidori();
    }
  }, 5000);

  // ROTASI DAN LEDAKAN
  const profileImg = document.getElementById("profileImg");
  const explosion = document.getElementById("explosion");
  const speedIndicator = document.getElementById("speedIndicator");

  let angle = 0;
  let speed = 0.5;
  const maxSpeed = 10;

  function rotate() {
    angle += speed;
    profileImg.style.transform = `translateX(-50%) rotate(${angle}deg)`;

    if (speed >= 8 && !profileImg.classList.contains("shaking")) {
      triggerExplosion();
    }

    requestAnimationFrame(rotate);
  }

  rotate();

  profileImg.addEventListener("click", () => {
    speed += 0.5;
    if (speed > maxSpeed) speed = maxSpeed;

    profileImg.style.boxShadow = "0 0 30px 10px rgba(0,255,204,0.9)";
    setTimeout(() => {
      profileImg.style.boxShadow = "0 0 20px rgba(0,255,204,0.5), 0 0 40px rgba(0,255,204,0.3)";
    }, 300);
  });

  function triggerExplosion() {
    profileImg.classList.add("shaking");
    explosion.style.animation = 'explode 0.6s ease-out';
    explosion.style.opacity = '1';
    profileImg.style.animation = 'shake 0.3s ease-in-out 3';

    setTimeout(() => {
      explosion.style.animation = 'none';
      explosion.style.opacity = '0';
      profileImg.classList.remove("shaking");
      profileImg.style.animation = 'none';
      speed = 0.5;
    }, 700);
  }

  setInterval(() => {
    speedIndicator.textContent = `⚡️ Speed: ${speed.toFixed(2)}°/frame`;
  }, 500);
});
