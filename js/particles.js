const characters = document.querySelectorAll('.character');
characters.forEach(character => {
  character.addEventListener('click', () => {
    alert('A empezar a programar Videojuegos!');
  });
});
