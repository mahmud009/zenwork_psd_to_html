$(window).on("load", function() {
  $("#preloader").fadeOut();

  $(function() {
    $(".nv-toggle").on("click", function() {
      $(".navbar-cs-collapse").toggleClass("nav-opened");
      $("header").toggleClass("tg-open");

      // if ($("header").hasClass("tg-open")) {
      //   scrollLock.disablePageScroll();
      // } else {
      //   setTimeout(function() {
      //     scrollLock.enablePageScroll();
      //   }, 400);
      // }
    });
  });
});
