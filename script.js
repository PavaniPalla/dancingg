// Get the cup element
const cup = document.getElementById('cup');

// Function to generate random noodles within the cup
function generateNoodles() {
  const numberOfNoodles = 40; // Adjust the number of noodles as needed
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < numberOfNoodles; i++) {
    const noodle = document.createElement('div');
    noodle.className = 'noodle';
    noodle.style.left = '${Math.random() * 100}%;' // Randomize horizontal position
    noodle.style.animationDuration = '${Math.random() * 1 + 0.5}s'; // Randomize animation duration
    fragment.appendChild(noodle);
  }

  cup.appendChild(fragment);
}

// Call the function to generate noodles when the page loads
generateNoodles();