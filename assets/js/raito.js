// ===== sticky header (same idea as nav.js from old site) =====
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("header");
    let scrollPosition = window.scrollY;
    //console.log(scrollPosition)

    if (scrollPosition > 100) { // Adjust this value as needed
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky")
    }
});


// ===== burger menu for mobile =====
function openMenu() {
  var nav = document.getElementById("navbar");
  var burger = document.getElementById("burger");
  nav.classList.toggle("open");
  burger.classList.toggle("open");
  console.log("menu clicked");
}

// close menu when clicking a link, otherwise it stays open lol
var navLinks = document.querySelectorAll("#navbar a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        document.getElementById("navbar").classList.remove("open");
        document.getElementById("burger").classList.remove("open");
    });
}


// ===== language picker (only changes the text for now, no translations yet) =====
// TODO: make the translations work
var langPicker = document.getElementById("langPicker");
var langList = document.getElementById("langList");

langPicker.addEventListener("click", function(e) {
    e.stopPropagation();
    langList.classList.toggle("open");
});

var langLinks = document.querySelectorAll("#langList a");
langLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("langText").innerHTML = this.getAttribute("data-lang");
        document.getElementById("langList").classList.remove("open");
        console.log("language: " + this.getAttribute("data-lang"));
    });
});

document.addEventListener("click", function () {
    langList.classList.remove("open")
});


// ===== services slider =====
//giving variable, duh...
var currentSlide = 0;
var track = document.getElementById("sliderTrack");
var dots = document.querySelectorAll(".dot");
// var slideWidth = 400;

function howManyVisible() {
    // same numbers as in the css media queries
    if (window.innerWidth <= 600) {
        return 1;
    } else if (window.innerWidth <= 1100) {
        return 2;
    }
    else {
        return 3;
    }
}

function makeDots() {
    var cards = document.querySelectorAll(".service-card");
    var pages = cards.length - howManyVisible() + 1;
    var dotsBox = document.getElementById("dots");
    dotsBox.innerHTML = "";
    for (let d = 0; d < pages; d++) {
        let dot = document.createElement("span");
        dot.className = "dot";
        if (d == currentSlide) dot.className = "dot active";
        dot.onclick = function () { goSlide(d); };
        dotsBox.appendChild(dot);
    }
    dots = document.querySelectorAll(".dot");
}

function goSlide(n) {
    var cards = document.querySelectorAll(".service-card");
    var maxSlide = cards.length - howManyVisible();
    if (n > maxSlide) n = 0;
    if (n < 0) n = maxSlide;
    currentSlide = n;

    var cardWidth = cards[0].offsetWidth + 30; // 30 is the gap
    track.style.transform = "translateX(-" + (cardWidth * n) + "px)";
    // track.style.marginLeft = "-" + (cardWidth * n) + "px";  <- this was jumpy, transform is better

    for (var j = 0; j < dots.length; j++) {
        dots[j].classList.remove("active");
    }
    if (dots[n]) dots[n].classList.add("active");
}

/* old version, did not work on phone
function nextSlide() {
    currentSlide++;
    if (currentSlide > 3) {
        currentSlide = 0;
    }
    goSlide(currentSlide);
}
*/

makeDots();

// auto play every 5 sec
var autoSlide = setInterval(function () {
    goSlide(currentSlide + 1);
}, 5000);

// stop when mouse is on it
document.getElementById("serviceSlider").addEventListener("mouseenter", function () {
    clearInterval(autoSlide);
});
document.getElementById("serviceSlider").addEventListener("mouseleave", function () {
    autoSlide = setInterval(function () {
        goSlide(currentSlide + 1);
    }, 5000);
});

window.addEventListener("resize", function () {
  currentSlide = 0;
  makeDots();
  goSlide(0);
});


// ===== count up numbers when you scroll to them =====
var counted = false;

function countUp() {
    var numbersBox = document.getElementById("numbers");
    var top = numbersBox.getBoundingClientRect().top;

    if (top < window.innerHeight - 100 && counted == false) {
        counted = true;
        var nums = document.querySelectorAll(".count-nbr");
        nums.forEach(function (el) {
            var end = parseInt(el.getAttribute("data-count"));
            var start = end > 1000 ? end - 60 : 0; // years should not start from 0, looks weird
            var now = start;
            var step = Math.ceil((end - start) / 40);
            var timer = setInterval(function () {
                now = now + step;
                if (now >= end) {
                    now = end;
                    clearInterval(timer);
                }
                el.innerHTML = now;
            }, 30);
        });
    }
}

window.addEventListener("scroll", countUp);
countUp();


// footer year
document.getElementById("year").innerHTML = new Date().getFullYear()
