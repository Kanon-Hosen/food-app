const navSlide = () => {
    const navBar = document.querySelector(".navBar");

    window.addEventListener('scroll', () => {
        navBar.classList.toggle("sticky", window.scrollY > 0);
    });
}
navSlide();