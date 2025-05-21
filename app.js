const carousel = document.getElementById('carousel');
const cells = carousel.children;
const cellCount = cells.length;
let selectedIndex = 0;

const rotateCarousel = () => {
  const angle = 360 / cellCount;
  const rotateY = angle * selectedIndex * -1;
  carousel.style.transform = `translateZ(-288px) rotateY(${rotateY}deg)`;
};

document.getElementById('next').addEventListener('click', () => {
  selectedIndex++;
  rotateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
  selectedIndex--;
  rotateCarousel();
});

// Set up each cell and add click-to-play handler
for (let i = 0; i < cellCount; i++) {
  const cell = cells[i];
  const angle = 360 / cellCount * i;
  cell.style.transform = `rotateY(${angle}deg) translateZ(288px)`;

  cell.addEventListener('click', () => {
    const videoUrl = cell.getAttribute('data-video');
    const player = document.getElementById('videoPlayer');
    const modal = document.getElementById('videoModal');

    player.querySelector('source').src = videoUrl;
    player.load();
    modal.classList.remove('hidden');
    player.play();
  });
}

// Modal close controls
const modal = document.getElementById('videoModal');
const player = document.getElementById('videoPlayer');

document.getElementById('closeModal').addEventListener('click', () => {
  player.pause();
  modal.classList.add('hidden');
  player.currentTime = 0;
});

// Auto-close modal when video ends
player.addEventListener('ended', () => {
  modal.classList.add('hidden');
  player.currentTime = 0;
});

  // Ensures audio plays automatically on some browsers
  document.addEventListener('DOMContentLoaded', function () {
    const music = document.getElementById('background-music');
    music.volume = 0.05; // Adjust volume
    music.play().catch(function(error) {
      console.log("Autoplay might be blocked. User interaction needed.");
    });
  });

  const music = document.getElementById('background-music');

  function playMusic() {
    music.play();
  }

  function pauseMusic() {
    music.pause();
  }

  function setVolume(value) {
    music.volume = value;
  }
//flash 

  function goToMainPage() {
    const flash = document.createElement('div');
    flash.className = 'flash-transition';
    document.body.appendChild(flash);
  
    setTimeout(() => {
      window.location.href = 'main.html'; // Replace with your main page URL
    }, 500); // Duration should match the CSS animation
  }
  
//Velkommen hos Milkey
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  


