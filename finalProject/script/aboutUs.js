// hamburger menu

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

// extra info button

const button = document.getElementById('displayTextButton');
const buttonText = document.getElementById('infoText');

button.addEventListener('click', () => {
  buttonText.classList.toggle('hidden');
});