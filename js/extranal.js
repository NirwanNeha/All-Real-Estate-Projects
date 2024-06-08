
$(document).ready(function() { 
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open'); 
    });
    $('.overlay ul li a').click(function() {
        $('#toggle').removeClass('active');
        $('#overlay').removeClass('open');
    });
    new Swiper(".swiper1", {
        speed: 1000,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }, 
    }),
    $(".swiper1").each(function(elem, target){
        var swp = target.swiper;
        $(this).hover(function() {
            swp.autoplay.stop();
        }, function() {
            swp.autoplay.start();
        });
    }),
    new Swiper(".swiper2", {
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2"
        }
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
    })
});  