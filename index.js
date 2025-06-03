const mask = document.querySelector('.reveal-mask');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX + 'px';
  const y = e.clientY + 'px';
  mask.style.setProperty('--x', x);
  mask.style.setProperty('--y', y);
}); 
const text = document.querySelector('h1');

document.addEventListener('mousemove', (e) => {
  const box = text.getBoundingClientRect();

  if (
    e.clientX >= box.left &&
    e.clientX <= box.right &&
    e.clientY >= box.top &&
    e.clientY <= box.bottom
  ) {
    text.style.color = "white";
  } else {
    text.style.color = "var(--text)";
  }
});
const text2 = document.querySelector('h2');

document.addEventListener('mousemove', (e) => {
  const box = text2.getBoundingClientRect();

  if (
    e.clientX >= box.left &&
    e.clientX <= box.right &&
    e.clientY >= box.top &&
    e.clientY <= box.bottom
  ) {
    text2.style.color = "white";
  } else {
    text2.style.color = "var(--text)";
  }
});