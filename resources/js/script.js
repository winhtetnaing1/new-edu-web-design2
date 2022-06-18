$(document).ready(() => {
  $(".fa-bars").click(() => {
    $(".fa-bars").toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", () => {
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(document).scrollTop() > 30) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }
  });
});
