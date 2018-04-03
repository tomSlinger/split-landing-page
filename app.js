// Get DOM elements
const left = document.querySelector('.left');
const right = document.querySelector('.right');

// Event Listeners
left.addEventListener('mouseenter', () => {
    left.classList.add('hover');
    right.classList.add('opacity');
});

left.addEventListener('mouseleave', () => {
    left.classList.remove('hover');
    right.classList.remove('opacity');
});

right.addEventListener('mouseenter', () => {
    right.classList.add('hover');
    left.classList.add('opacity');
});

right.addEventListener('mouseleave', () => {
    right.classList.remove('hover');
    left.classList.remove('opacity');
})