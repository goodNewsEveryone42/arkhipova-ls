const parallaxBaloon = document.querySelector('.parallax-baloon');
const layers = parallaxBaloon.children;

function moveLayersDependensScroll(wScroll) {
    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 10;
        layer.style.transform = `translateY(${strafe}%)`;
    })
}

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayersDependensScroll(wScroll);
});