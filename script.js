$(".nav .menu li a").on("click", function () {
  const goToSection = "#" + $(this).attr("class");

  $("body, html").animate({
    scrollTop: $(goToSection).offset().top - $("div.nav").height(),
  });
});

$(".mobileMenu .menuHam .navHam li a").on("click", function () {
  const goToSection = "#" + $(this).attr("class");
  $("body, html").animate({
    scrollTop: $(goToSection).offset().top,
  });
});

// const screenWidth = $(window).width();
// const meInMob = document.querySelector(".meIn");
// const eduInMob = document.querySelector(".eduIn");
// const evInMob = document.querySelector(".evIn");
// const evkonInMob = document.querySelector(".evkonIn");
// // console.log(screenWidth);
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

  // console.log(scrollValue + 'scrollValue');

  // First Section

  const meInFromTop = meIn.offsetTop;
  const meInHeight = meIn.offsetHeight;
  // console.log(meInFromTop + 'meinfromtop')
  // console.log(meInHeight + 'meinheight')

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
    // console.log("jestem meIn wywietlony w całości");
    meIn.classList.add("active");
  }

  if (scrollValue > eduInFromTop + eduInHeight - windowHeight) {
    // console.log("jestem eduIn wywietlony w całości");
    eduIn.classList.add("active");
  }

  if (scrollValue > evInFromTop + evInHeight - windowHeight) {
    // console.log("jestem evIn wywietlony w całości");
    evIn.classList.add("active");
  }

  if (scrollValue > evkonInFromTop + evkonInHeight - windowHeight) {
    // console.log("jestem evkonIn wywietlony w całości");
    evkonIn.classList.add("active");
  }

  if (scrollValue > detInFromTop + detInHeight / 2 - windowHeight) {
    detIn.classList.add("active");
    // console.log('załączeni animacji detIn');
  }

  if (scrollValue > detInGalFromTop + detInGalHeight / 2 - windowHeight) {
    detInGal.classList.add("active");
    // console.log('załączeni animacji detIn');
  }

  if (scrollValue > achievFromTop + achievHeight / 2 - windowHeight) {
    achiev.classList.add("active");
    // console.log('załączeni animacji achiev');
  }

  //Czyściciel
  if (scrollValue < 50) {
    const remov = document.querySelectorAll("div");
    [].forEach.call(remov, function (el) {
      el.classList.remove("active");
    });
  }
});

if (screenWidth > 770) {
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
// }

//  else{
//   meInMob.classList.addClass('active');
//   eduInMob.classList.addClass('active');
//   evInMob.classList.addClass('active');
//   evkonInMob.classList.addClass('active');
// }

// $(document).on('scroll', function () {

//   const windowHeight = $(window).height();
//   const scrollValue = $(this).scrollTop();
//   console.log(scrollValue);

//   //Pierwsza sekcja
//   const $meIn = $('.meIn');
//   const meInFromTop = $meIn.offset().top;
//   const meInHeight = $meIn.outerHeight();

//   const $eduIn = $('.eduIn');
//   const eduInFromTop = $eduIn.offset().top;
//   const eduInHeight = $eduIn.outerHeight();

//   const $evIn = $('.evIn');
//   const evInFromTop = $evIn.offset().top;
//   const evInHeight = $evIn.outerHeight();

//   const $evkonIn = $('.evkonIn');
//   const evkonInFromTop = $evkonIn.offset().top;
//   const evkonInHeight = $evkonIn.outerHeight();

//   if (scrollValue > meInFromTop + meInHeight - windowHeight) {
//     // console.log("jestem meIn wywietlony w całości");
//     $meIn.addClass('active');
//   }

//   if (scrollValue > eduInFromTop + eduInHeight - windowHeight) {
//     // console.log("jestem eduIn wywietlony w całości");
//     $eduIn.addClass('active');
//   }

//   if (scrollValue > evInFromTop + evInHeight - windowHeight) {
//       // console.log("jestem evIn wywietlony w całości");
//       $evIn.addClass('active');
//   }

//   if (scrollValue > evkonInFromTop + evkonInHeight - windowHeight) {
//       // console.log("jestem evkonIn wywietlony w całości");
//       $evkonIn.addClass('active');
//   }

//   //Druga sekcja

//   const $detIn = $('.detIn');
//   const detInFromTop = $detIn.offset().top;
//   const detInHeight = $detIn.height();

//   const $achiev = $('.achiev');
//   const achievFromTop = $achiev.offset().top;
//   const achievHeight = $achiev.height();

//   if (scrollValue > detInFromTop + detInHeight / 2 - windowHeight) {
//     $detIn.addClass('active');
//     // console.log('załączeni animacji detIn');
//   }

// if (scrollValue > achievFromTop + achievHeight / 2 - windowHeight){
//       $achiev.addClass('active');
//       // console.log('załączeni animacji achiev');
//   }

//   //Czyściciel
//   if (scrollValue < 100) {
//     $('div').removeClass('active');
//   }
// })

// }

// uzupelnanie strony navem

const jpgHeader = document.querySelector(".headerjpg");
// console.log(jpgHeader.style.height + 'tutaj')

const windowHeight = window.innerHeight;
// console.log(windowHeight + ' windowHeight');

const jpgHeaderHeight = jpgHeader.offsetHeight;
// console.log(jpgHeaderHeight + ' jpgHeaderHeight blad');

const jpgHeaderWidth = jpgHeader.offsetWidth;
// console.log(jpgHeaderWidth + ' jpgHeaderWidth');

const menuHeight = windowHeight - jpgHeaderHeight + "px";
// console.log(menuHeight + ' menuHeight');

document.querySelector(".nav").style.height = [
  windowHeight - jpgHeaderHeight >= 75 ? `${76}px` : menuHeight,
];
// document.querySelector('.header').style.height = `${jpgHeaderHeight}px`;

// [jpgHeaderHeight>0 ? `${jpgHeaderHeight}px` : `${90}vh`];

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
