const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const kontakme = document.getElementById("kontakme");

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;

  if (window.scrollY > fixednav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  console.log("hamburger ditekan");

  navMenu.classList.toggle("hidden");
});

document.getElementById("downloadCv").addEventListener("click", function () {
  var pdfURL = "assets/cv-desember24.pdf";

  var link = document.createElement("a");
  link.href = pdfURL;
  link.download = "CV-Naufal Assyafiq.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

kontakme.addEventListener("click", function (event) {
  event.preventDefault();
  const email = "assyafiqnaufal625@gmail.com";
  const subjek = document.getElementById("judulPesan").value;
  const isiPesan = document.getElementById("message").value;

  const encodedSubject = encodeURIComponent(subjek);
  const encodedBody = encodeURIComponent(isiPesan);

  const gmailURL =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    email +
    "&su=" +
    encodedSubject +
    "&body=" +
    encodedBody;

  window.open(gmailURL, "_blank");
});

// carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.remove("hidden");
  dots[slideIndex - 1].classList.add("active");
}
