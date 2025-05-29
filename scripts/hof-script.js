function showFullscreen(src, desc) {
    const fullscreen = document.getElementById('fullscreen');
    document.getElementById('fullscreen-img').src = src;
    document.getElementById('fullscreen-desc').textContent = desc;
    fullscreen.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    document.getElementById('fullscreen').style.display = 'none';
    document.body.style.overflow = 'auto';
}