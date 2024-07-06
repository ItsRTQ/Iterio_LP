document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const toggleBtn = document.getElementById('toggleBtn');

    toggleBtn.addEventListener('click', function () {
        if (navbar.style.right === '-10px') {
            navbar.style.right = '-250px';
            toggleBtn.innerHTML = '⬅';
        } else {
            navbar.style.right = '-10px';
            toggleBtn.innerHTML = '➡';
        }
    });
});
