const gallery = document.getElementById('photo-gallery');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('[data-direction]').forEach(button => {
  button.addEventListener('click', () => {
    const card = gallery.querySelector('.gallery-item');
    gallery.scrollBy({left: Number(button.dataset.direction) * (card.getBoundingClientRect().width + 16), behavior: reduceMotion.matches ? 'instant' : 'smooth'});
  });
});

const video = document.getElementById('showreel');
const playButton = document.querySelector('.reel-play');
playButton.addEventListener('click', async () => {
  try { await video.play(); playButton.hidden = true; }
  catch { document.querySelector('.reel-error').hidden = false; }
});
