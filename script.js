// ===== JAM DIGITAL =====
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

// ===== QUOTE SASUKE =====
const quotes = [
  "“Aku tidak akan mengulangi kesalahan yang sama.”",
  "“Kebencian adalah kekuatanku.”",
  "“Aku berjalan di jalan kegelapan demi tujuanku.”",
  "“Aku tidak butuh cinta, aku butuh kekuatan.”",
  "“Balas dendam adalah satu-satunya alasanku hidup.”"
];

let currentQuote = 0;
function showQuote() {
  document.getElementById('quote').textContent = quotes[currentQuote];
  currentQuote = (currentQuote + 1) % quotes.length;
  setTimeout(showQuote, 3000);
}
showQuote();

// ===== EFEK CHIDORI =====
function triggerChidori() {
  const chidori = document.getElementById('chidori');
  chidori.style.animation = 'spark 0.6s ease-out';
  chidori.style.opacity = '1';
  setTimeout(() => {
    chidori.style.opacity = '0';
    chidori.style.animation = 'none';
  }, 600);
}
setInterval(() => Math.random() > 0.4 && triggerChidori(), 5000);

// ===== INTERAKSI WAJAH 3D =====
const faceContainer = document.querySelector('.face-3d-container');
faceContainer.addEventListener('mousemove', (e) => {
  faceContainer.style.animation = 'none';
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  faceContainer.style.transform = `translateX(-50%) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

faceContainer.addEventListener('mouseleave', () => {
  faceContainer.style.animation = 'rotate3D 10s linear infinite';
  faceContainer.style.transform = 'translateX(-50%) rotateY(0deg)';
});
