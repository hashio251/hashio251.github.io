$('.autoplay').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1800,
  dots: true,

  // responsive
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});