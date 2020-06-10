const parallaxBuddha = document.querySelector('.parallax-buddha');
const layers = parallaxBuddha.children;

function moveLayersDependensScroll(wScroll) {
    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 20;
        layer.style.transform = `translateY(${strafe}%)`;
    })
}

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayersDependensScroll(wScroll);
});