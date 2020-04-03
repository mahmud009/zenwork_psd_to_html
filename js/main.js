$(window).on("load", function () {
  // Document ready function

  $("#preloader").fadeOut();

  $(function () {
    // Nav toggler class enable
    $(".nv-toggle").on("click", function () {
      $(".navbar-cs-collapse").toggleClass("nav-opened");
      $("header").toggleClass("tg-open");
    });
  });

  //Nicescroll initialize
  $("body").niceScroll({
    cursorcolor: "#fa7875",
    cursoropacitymin: 0.5,
    cursorborder: "none",
    scrollspeed: 100,
    mousescrollstep: 50,
  });

  //Scrolltop button fix
  $(".scr-top").on("click", (e) => {
    $("body").getNiceScroll(0).doScrollTop(0, 10);
  });

  //Scrolly js initialize
  scrolly();

  //AOS js initialize
  AOS.init();
});
