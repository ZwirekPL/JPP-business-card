const screenWidth = $(window).width();
const meIn = document.querySelector(".meIn");
const eduIn = document.querySelector(".eduIn");
const evIn = document.querySelector(".evIn");
const evkonIn = document.querySelector(".evkonIn");
const detIn = document.querySelector(".detIn");
const detInGal = document.querySelector(".detInGal");
const achiev = document.querySelector(".achiev");

const scrolling = document.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  const scrollValue = document.documentElement.scrollTop;

  // First Section
  const meInFromTop = meIn.offsetTop;
  const meInHeight = meIn.offsetHeight;
  const eduInFromTop = eduIn.offsetTop;
  const eduInHeight = eduIn.offsetHeight;
  const evInFromTop = evIn.offsetTop;
  const evInHeight = evIn.offsetHeight;
  const evkonInFromTop = evkonIn.offsetTop;
  const evkonInHeight = evkonIn.offsetHeight;
  const detInFromTop = detIn.offsetTop;
  const detInHeight = detIn.offsetHeight;
  const detInGalFromTop = detInGal.offsetTop;
  const detInGalHeight = detInGal.offsetHeight;
  const achievFromTop = achiev.offsetTop;
  const achievHeight = achiev.offsetHeight;

  if (scrollValue > meInFromTop + meInHeight - windowHeight) {
    meIn.classList.add("active");
  }
  if (scrollValue > eduInFromTop + eduInHeight - windowHeight) {
    eduIn.classList.add("active");
  }
  if (scrollValue > evInFromTop + evInHeight - windowHeight) {
    evIn.classList.add("active");
  }
  if (scrollValue > evkonInFromTop + evkonInHeight - windowHeight) {
    evkonIn.classList.add("active");
  }
  if (scrollValue > detInFromTop + detInHeight / 2 - windowHeight) {
    detIn.classList.add("active");
  }
  if (scrollValue > detInGalFromTop + detInGalHeight / 2 - windowHeight) {
    detInGal.classList.add("active");
  }
  if (scrollValue > achievFromTop + achievHeight / 2 - windowHeight) {
    achiev.classList.add("active");
  }
  //Czyściciel
  if (scrollValue < 50) {
    const remov = document.querySelectorAll("div");
    [].forEach.call(remov, function (el) {
      el.classList.remove("active");
    });
  }
});
if (screenWidth > 769) {
  scrolling;
} else {
  meIn.classList.add("active");
  eduIn.classList.add("active");
  evIn.classList.add("active");
  evkonIn.classList.add("active");
  detIn.classList.add("active");
  detInGal.classList.add("active");
  achiev.classList.add("active");
}
if ($(".mobileMenu").css("display") === "none") {
  document.getElementById("meHam").setAttribute("id", "me");
  document.getElementById("detHam").setAttribute("id", "detailing");
  document.getElementById("evHam").setAttribute("id", "ev");
}
const jpgHeader = document.querySelector(".headerjpg");
const windowHeight = window.innerHeight;
const jpgHeaderHeight = jpgHeader.offsetHeight;
const jpgHeaderWidth = jpgHeader.offsetWidth;
const menuHeight = windowHeight - jpgHeaderHeight + "px";
document.querySelector(".nav").style.height = [
  windowHeight - jpgHeaderHeight >= 75 ? `${76}px` : menuHeight,
];
// Dark mode
const jpgDark = document.querySelector(".jpgDark");
document.querySelector(".btnDarkMode").addEventListener("click", (e) => {
  const darkMode = document.body.classList.toggle("darkMode");
  jpgDark.classList.toggle("jpgDark-active");
  e.target.blur();
  localStorage.setItem("dark-mode", darkMode);
});
// Dark mode End
// Dark mode burger
const jpgDarkHam = document.querySelector(".jpgDark");
document.querySelector(".btnDarkModeHam").addEventListener("click", (e) => {
  const darkModeHam = document.body.classList.toggle("darkModeHam");
  jpgDarkHam.classList.toggle("jpgDarkHam-active");
  e.target.blur();
  localStorage.setItem("dark-mode", darkMode);
});
// Dark mode burger end
// hamburger
const menu = document.querySelector(".burg");
const burgerActivation = document.querySelector(".menuHam");
menu.addEventListener("click", () => {
  menu.classList.toggle("burg--active");
  burgerActivation.classList.toggle("burger--active");
});
// end hamburger
// contact button
const contactBtn = document.getElementById("contactIconClosed");
const contactBtnClose = document.getElementById("close");
const contactForm = document.querySelector(".contactForm");
contactBtn.addEventListener("click", () => {
  contactForm.classList.toggle("contactForm-active");
});
contactBtnClose.addEventListener("click", () => {
  contactForm.classList.toggle("contactForm-active");
});
// end contact button
$(".nav .menu li a").on("click", function () {
  const goToSection = "#" + $(this).attr("class");
  $("body, html").animate({
    scrollTop: $(goToSection).offset().top - $("div.nav").height(),
  });
});
$(".mobileMenu .menuHam .navHam li a").on("click", function () {
  const goToSectionMob = "#" + $(this).attr("class");
  $("body, html").animate({
    scrollTop: $(goToSectionMob).offset().top,
  });
});
