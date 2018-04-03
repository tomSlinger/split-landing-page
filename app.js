// Get DOM elements
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', () => {
    left.classList.add('hover');
});

left.addEventListener('mouseleave', () => {
    left.classList.remove('hover');
});