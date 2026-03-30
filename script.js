const button = document.getElementById('randomButton');
const yesButton = document.getElementById('yes-btn');
const buggyHappy = document.getElementById('buggy-happy');
const buggyPleading = document.getElementById('buggy-pleading');

document.addEventListener('mousemove', (event) => {
  const pointerX = event.clientX;
  const pointerY = event.clientY;

  const rect = button.getBoundingClientRect();
  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2;

  const distance = Math.sqrt((pointerX - buttonX) ** 2 + (pointerY - buttonY) ** 2);

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