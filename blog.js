const image = document.getElementById('blog-image');
const zoomIn = document.getElementById('zoom-in');
const zoomOut = document.getElementById('zoom-out');
const zoomReset = document.getElementById('zoom-reset');

let scale = 1;

function applyZoom() {
  image.style.transform = `scale(${scale})`;
  image.style.transformOrigin = 'center top';
  zoomReset.textContent = `${Math.round(scale * 100)}%`;
}

zoomIn.addEventListener('click', () => {
  scale = Math.min(3, scale + 0.2);
  applyZoom();
});

zoomOut.addEventListener('click', () => {
  scale = Math.max(0.6, scale - 0.2);
  applyZoom();
});

zoomReset.addEventListener('click', () => {
  scale = 1;
  applyZoom();
});

applyZoom();
