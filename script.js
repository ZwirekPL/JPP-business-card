    $('.nav .menu li a').on('click', function () {
        const goToSection = "#" + $(this).attr('class');
       
        $('body, html').animate({
            scrollTop: $(goToSection).offset().top - $("div.nav").height()
        })
   })


//    $('.nav .menu li a').on('click', function () {
//     const goToSection = "#" + $(this).attr('class');
//     $('body, html').animate({
//         scrollTop: $(goToSection).offset().top
//     })
// })


$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    console.log(windowHeight);
  
  
    //Pierwsza sekcja
    const $meIn = $('.meIn');
    const meInFromTop = $meIn.offset().top;
    const meInHeight = $meIn.outerHeight();

  
    const $eduIn = $('.eduIn');
    const eduInFromTop = $eduIn.offset().top;
    const eduInHeight = $eduIn.outerHeight();
  
    const $evIn = $('.evIn');
    const evInFromTop = $evIn.offset().top;
    const evInHeight = $evIn.outerHeight();
  
    const $evkonIn = $('.evkonIn');
    const evkonInFromTop = $evkonIn.offset().top;
    const evkonInHeight = $evkonIn.outerHeight();
  
  
    if (scrollValue > meInFromTop + meInHeight - windowHeight) {
      console.log("jestem meIn wywietlony w całości");
      $meIn.addClass('active');
    }
  
    if (scrollValue > eduInFromTop + eduInHeight - windowHeight) {
      console.log("jestem eduIn wywietlony w całości");
      $eduIn.addClass('active');
    }

    if (scrollValue > evInFromTop + evInHeight - windowHeight) {
        console.log("jestem evIn wywietlony w całości");
        $evIn.addClass('active');
    }

    if (scrollValue > evkonInFromTop + evkonInHeight - windowHeight) {
        console.log("jestem evkonIn wywietlony w całości");
        $evkonIn.addClass('active');
    }
  
    //Druga sekcja
  
    const $detIn = $('.detIn');
  
    const detInFromTop = $detIn.offset().top;

    const detInHeight = $detIn.height();

    const $achiev = $('.achiev');
  
    const achievFromTop = $achiev.offset().top;

    const achievHeight = $achiev.height();
  
  
    if (scrollValue > detInFromTop + detInHeight / 2 - windowHeight) {
      $detIn.addClass('active');
      console.log('załączeni animacji detIn');
    }
  
    if (scrollValue > achievFromTop + achievHeight / 2 - windowHeight) {
        $achiev.addClass('active');
        console.log('załączeni animacji achiev');
    }
    
  
    //Czyściciel
    if (scrollValue < 100) {
      $('div').removeClass('active');
    }
  })
  // uzupelnanie strony navem 
  const imghead = document.querySelector('.headerjpg');
  const vhValue = window.innerHeight;
  // console.log(vhValue + 'vhvalue');
  const imgValue = imghead.offsetHeight;
  // console.log(imgValue + 'imgvalue');
  const imgHeadWidth = imghead.offsetWidth;
  // console.log(imgHeadWidth + 'imgwidht');

  const menuHeight = (vhValue - imgValue) + 'px';
  // console.log(menuHeight + 'menuheght');
  document.querySelector('.nav').style.height = [(vhValue-imgValue)>= 75 ? `${76}px` : menuHeight];
  document.querySelector('.header').style.height = `${imgValue}px`;
  



  const jpgDark = document.querySelector('.jpgDark');
  document.querySelector('.btnDarkMode').addEventListener('click', (e) => {
    const darkMode = document.body.classList.toggle('darkMode');
    jpgDark.classList.toggle('jpgDark-active');
    e.target.blur();
    localStorage.setItem('dark-mode', darkMode);
    });


  // hamburger
  const menu = document.querySelector('.burg'); 
  const burgerActivation = document.querySelector('.menuHam')

menu.addEventListener('click', () => { 
	menu.classList.toggle('burg--active');
  burgerActivation.classList.toggle('burger--active'); 
});
