//Nivo lightbox initialization and configuration
$(document).ready(function () {
  2;
  $("a").nivoLightbox();
  3;
});

$("a").nivoLightbox({
  // The effect to use when showing the lightbox
  // fade, fadeScale, slideLeft, slideRight, slideUp, slideDown, fall
  effect: "fade",

  // The lightbox theme to use
  theme: "default",

  // Enable/Disable keyboard navigation
  keyboardNav: true,

  // Click image to close
  clickImgToClose: true,

  // Click overlay to close
  clickOverlayToClose: true,

  // Callback functions
  onInit: function () {},
  beforeShowLightbox: function () {},
  afterShowLightbox: function (lightbox) {},
  beforeHideLightbox: function () {},
  afterHideLightbox: function () {},
  beforePrev: function (element) {},
  onPrev: function (element) {},
  beforeNext: function (element) {},
  onNext: function (element) {},

  // Error message
  errorMessage:
    "The requested content cannot be loaded. Please try again later.",
});