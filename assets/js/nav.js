window.addEventListener("scroll", function () {
    const navbar = document.getElementById("header");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Adjust this value as needed
        navbar.classList.add("sticky", "white"); // Add both classes
    } else {
        navbar.classList.remove("sticky", "white"); // Remove both classes
    }
});