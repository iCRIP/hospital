import '../styles/main.scss'
import 'bootstrap'
import jQuery from 'jquery'
import 'slick-carousel'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}

jQuery(document).ready(function ($) {
  // eslint-disable-next-line no-console
  $('.navbar-menu-button, .mobile-menu-close').click(function () {
    $('#mobile-menu').toggleClass('active')
  })

  $('.news-slider').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
  $('.media-slider').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  })
  $('.slider-main').slick({
    fade: true,
    asNavFor: '.slider-texts',
    arrows: false,
    autoplay: true
  })
  $('.slider-main').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $(this).parent().find('.slider-counter .slider-counter-current').text(currentSlide + 1)
  })
  $('.slider-texts').slick({
    fade: true,
    asNavFor: '.slider-main',
    arrows: false
  })
  $('.slider-texts').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    // eslint-disable-next-line no-console
    console.log($(this).parent().find('.slider-dots .slider-dot').eq(currentSlide))
    $(this).parent().find('.slider-dots .slider-dot').eq(currentSlide).addClass('active').siblings().removeClass('active')
  })
})
