function moveNoButton(button) {
    button.style.position = 'absolute';
    button.style.top = `${Math.random() * 80 + 10}%`;
    button.style.left = `${Math.random() * 80 + 10}%`;
    document.querySelector('.no-response').style.display = 'block';
}


function createLoveSigns() {
    const loveSigns = document.getElementById('loveSigns');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
        heart.textContent = '❤️';
        loveSigns.appendChild(heart);
    }
  }
createLoveSigns();
