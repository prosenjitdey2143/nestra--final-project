
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard easing
    direction: 'vertical', 
    gestureDirection: 'vertical',
    smoothHover: true,
    smoothTouch: false, // Set to true if you want smooth scroll on mobile too
    touchMultiplier: 2,
  });

  // 2. The Animation Loop (Required)
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);



const words = ["ideal", "smart", "modern"];
const textElement = document.getElementById("changing-text");
let index = 0;

function changeText() {
  // 1. Start the "hide" animation
  textElement.classList.add("hidden");

  setTimeout(() => {
    // 2. Change the word while it's invisible
    index = (index + 1) % words.length;
    textElement.textContent = words[index];

    // 3. Trigger the "show" animation
    textElement.classList.remove("hidden");
  }, 500); // This delay matches half of the CSS transition
}

// Change word every 3 seconds
setInterval(changeText, 4000);