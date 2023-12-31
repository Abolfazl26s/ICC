$(document).ready(function () {
  $('.list').click(function () {
    $('.list').removeClass('active'), $(this).addClass('active');
  });

  const t = document.querySelectorAll('.list');
  function e() {
    t.forEach((t) => t.classList.remove('active')),
      this.classList.add('active');
  }
  t.forEach((t) => t.addEventListener('click', e));
  const i = document.querySelector('.nav').querySelectorAll('li'),
    o = i.length,
    s = document.querySelectorAll('.section'),
    c = s.length;
  for (let t = 0; t < o; t++) {
    i[t].querySelector('a').addEventListener('click', function () {
      n();
      for (let t = 0; t < o; t++)
        i[t].querySelector('a').classList.contains('active') && a(t),
          i[t].classList.contains('active') && a(t),
          i[t].querySelector('a').classList.remove('active'),
          i[t].classList.remove('active');
      this.classList.add('active'), r(this);
    });
  }
  function n() {
    for (let t = 0; t < c; t++) s[t].classList.remove('back-section');
  }
  function a(t) {
    s[t].classList.add('back-section');
  }
  function r(t) {
    for (let t = 0; t < c; t++) s[t].classList.remove('active');
    const e = t.getAttribute('href').split('#')[1];
    document.querySelector('#' + e).classList.add('active');
  }
  function l(t) {
    for (let e = 0; e < o; e++) {
      i[e].querySelector('a').classList.remove('active'),
        i[e].classList.remove('active');
      const o = t.getAttribute('href').split('#')[1];
      o === i[e].querySelector('a').getAttribute('href').split('#')[1] &&
        i[e].querySelector('a').classList.add('active'),
        o === i[e].querySelector('a').getAttribute('href').split('#')[1] &&
          i[e].classList.add('active');
    }
  }
  if (
    (document.querySelector('.hire-me').addEventListener('click', function () {
      const t = this.getAttribute('data-section-index');
      r(this), l(this), n(), a(t);
    }),
    document.querySelector('.about-us').addEventListener('click', function () {
      const t = this.getAttribute('data-section-index');
      r(this), l(this), n(), a(t);
    }),
    jQuery('.mouse-cursor').length && $('body'))
  ) {
    const t = document.querySelector('.cursor-inner'),
      e = document.querySelector('.cursor-outer');
    let i,
      o = 0,
      s = !1;
    (window.onmousemove = function (c) {
      s ||
        (e.style.transform =
          'translate(' + c.clientX + 'px, ' + c.clientY + 'px)'),
        (t.style.transform =
          'translate(' + c.clientX + 'px, ' + c.clientY + 'px)'),
        (i = c.clientY),
        (o = c.clientX);
    }),
      $('body').on('mouseenter', 'a,.trigger, .cursor-pointer', function () {
        t.classList.add('cursor-hover'), e.classList.add('cursor-hover');
      }),
      $('body').on('mouseleave', 'a,.trigger, .cursor-pointer', function () {
        ($(this).is('a') && $(this).closest('.cursor-pointer').length) ||
          (t.classList.remove('cursor-hover'),
          e.classList.remove('cursor-hover'));
      }),
      (t.style.visibility = 'visible'),
      (e.style.visibility = 'visible');
  }

  // ========== honors ======
  $('#honors').owlCarousel({
    loop: !0,
    margin: 20,
    dots: !0,
    nav: !1,
    rtl: true,
    autoplay: !0,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !0,
    responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
  });
});

// ====== fancybox gallery =========
let mixer = mixitup('.portfolio-list', {
  load: {
    filter: '.webdesign',
  },
});
$('.gallery a').attr('data-fancybox', 'mygallery'),
  $('.gallery a').each(function () {
    $(this).attr('data-caption', $(this).find('img').attr('alt')),
      $(this).attr('title', $(this).find('img').attr('alt'));
  }),
  $('.gallery a').fancybox(),
  $('[data-fancybox]').fancybox({
    selector: '.mix:visible a',
    loop: !0,
    hash: !0,
    transitionEffect: 'slide',
    clickContent: function (t, e) {
      return 'image' === t.type && 'next';
    },
  }),
  $('.funfacts-box').each(function () {
    let t = $(this).offset().top - window.innerHeight,
      e = $(this).find('.counter'),
      i = e.attr('data-to'),
      o = parseInt(e.attr('data-time'));
    t < $(window).scrollTop() &&
      $({ countNum: e.text() }).animate(
        { countNum: i },
        {
          duration: o,
          easing: 'swing',
          step: function () {
            e.text(Math.floor(this.countNum));
          },
          complete: function () {
            e.text(this.countNum);
          },
        },
      );
  });
