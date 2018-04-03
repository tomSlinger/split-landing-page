// Get DOM elements
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', () => {
    left.classList.add('hover');
    right.classList.add('opacity');
});

left.addEventListener('mouseleave', () => {
    left.classList.remove('hover');
    right.classList.remove('opacity');
});