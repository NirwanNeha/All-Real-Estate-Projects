$(document).ready(function() { 
  var swiper = new Swiper(".swiper1", {
    loop: true,
    spaceBetween: 0,
    effect: "fade",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  new Swiper(".swiper2", {
    loop: true,
    spaceBetween: 30,
    // effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2"
    },
    breakpoints: {  
      '480': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '480': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '992': {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      '1200': {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    }
  });
  new Swiper(".swiper3", {  
    loop: true,
    spaceBetween: 30,
    // effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2"
    },
    breakpoints: {  
      '480': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '480': {
        slidesPerView: 2,
        spaceBetween: 25,
      }, 
      '992': {
        slidesPerView: 3,
        spaceBetween: 30,    
      },
    }
  });
  $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
        $('#dynamic').addClass('newClass');
      } else {
        $('#dynamic').removeClass('newClass');
      }
  });
  // $('.collapse.show').each(function(){
  //   $(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
  // }),  
	// $('.collapse').on('shown.bs.collapse', function(){
	// 	$(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
	// }).on('hidden.bs.collapse', function(){
	// 	$(this).parent().find(".fa").removeClass("fa-minus").addClass("fa-plus");
	// }),
  // $('.rera-close').click(function() {
  //   $('.rera-div .overview-itm-bg').removeClass('active');
  // }),
  // $('.rera-div .overview-itm-bg').click(function() {
  //   $(this).toggleClass('active');
  // }),
  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  }),
  $(".menu ul li a").click(function() {
    $('#toggle').removeClass('active');
    $('#overlay').removeClass('open');
  }),  
  $('.menu ul li a[href^="#"]').on("click", function(t) {
    t.preventDefault();
    var i = this.hash,
        e = $(i);
    $("html, body").stop().animate({
        scrollTop: e.offset().top - 83 
    }, 1000, "swing", function() {})
  }),
  $('.banner-arrow[href^="#"]').on("click", function(t) {
    t.preventDefault(); 
    var i = this.hash,
        e = $(i);
    $("html, body").stop().animate({
        scrollTop: e.offset().top - 80
    }, 1000, "swing", function() {})
  }),
  function(e) {
      e.fn.loadScroll = function(t) {
          var n, i, o = e(window),
              r = this;
          r.one("loadScroll", function() {
              if (this.getAttribute("data-src")) {
                  if (this.setAttribute("src", this.getAttribute("data-src")), this.removeAttribute("data-src"), !t) return !1;
                  e(this).hide().fadeIn(t).add("img").removeAttr("style")
              }
          }), o.scroll(function() {
              n = r.filter(function() {
                  var t = o.scrollTop(),
                      n = o.height(),
                      i = e(this).offset().top;
                  return i + e(this).height() >= t && i <= t + n
              }), i = n.trigger("loadScroll"), r = r.not(i)
          })
      }
  }(jQuery), $(function() {
      $("img").loadScroll(500)
  }),
  $(document).ready(function () {
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .addClass("fa-minus")
        .removeClass("fa-plus");
    });
  
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse")
      .on("show.bs.collapse", function () {
        $(this)
          .prev(".card-header")
          .find(".fa")
          .removeClass("fa-plus")
          .addClass("fa-minus");
      })
      .on("hide.bs.collapse", function () {
        $(this)
          .prev(".card-header")
          .find(".fa")
          .removeClass("fa-minus")
          .addClass("fa-plus");
      });
  });
});  
$(document).ready(function() { 
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    }, 
  });
  $(window).on('load', function() { 
    setTimeout(function(){  
      $('#auto-popup').modal('show');
    }, 500); 
  });
});