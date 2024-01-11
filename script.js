const button = document.getElementById('randomButton');
const yesButton = document.getElementById('yes-btn');
const buggyHappy = document.getElementById('buggy-happy');
const buggyPleading = document.getElementById('buggy-pleading');

document.addEventListener('mousemove', (event) => {
  const pointerX = event.clientX;
  const pointerY = event.clientY;

  const distance = Math.sqrt((pointerX - button.offsetLeft) ** 2 + (pointerY - button.offsetTop) ** 2);

  // Adjust this threshold based on how close you want the pointer to be for the button to move
  const proximityThreshold = 100;

  if (distance < proximityThreshold) {
    moveButtonRandomly();
  }
});

function clickedYes() {
    yesButton.addEventListener("click", function() {
        // Remove 'hidden' class from 'buggyHappy'
        buggyHappy.classList.remove('hidden');

        // Add 'hidden' class to 'buggyPleading'
        buggyPleading.classList.add('hidden');
    });
}

function moveButtonRandomly() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const newLeft = Math.random() * (windowWidth - button.offsetWidth);
  const newTop = Math.random() * (windowHeight - button.offsetHeight);

  button.style.left = `${newLeft}px`;
  button.style.top = `${newTop}px`;
}
clickedYes()