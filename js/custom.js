$(document).ready(function() {
  $('.toogleVid2').hide();
  $('.toogleVid3').hide();

  $('.bannerSlide').slick({
    dots: false,
    fade: true,
    autoplay: true,
    delay: 4,
    speed: 300,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    pauseOnHover: false
  });
  $('.bannerSlide2').slick({
    dots: false,
    fade: true,
    autoplay: true,
    speed: 700,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    pauseOnHover: false
  });

  $('.slider-for').slick({
    autoplay: true,
    speed: 700,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

  setTimeout(() => {
    $('.toogleVid').fadeToggle();
    $('.toogleVid2').fadeToggle();
  }, 25000);

  //   Moment JS
  var now = new Date();
  document.getElementById('CurrentDate').innerHTML = moment(now).format(
    'Do dddd MMM, YYYY'
  );

  //   Time
  var datetime = null,
    date = null;

  var update = function() {
    date = moment(new Date());
    datetime.html(date.format('h:mm:ss a'));
  };

  $(document).ready(function() {
    datetime = $('#time');
    update();
    setInterval(update, 1000);
  });
});
