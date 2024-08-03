$(document).ready(function () {
    // let e = document.querySelector(".cursor");
    // document.addEventListener("mousemove", s => {
    //     e.style.left = s.clientX + "px", e.style.top = s.clientY + "px"
    // });
    let s = document.querySelector(".side-bar");
    document.querySelector(".side-bar-button").addEventListener("click", function () {
        s.classList.contains("closed") ? s.classList.remove("closed") : s.classList.add("closed")
    }), $(window).scroll(function () {
        $(this).scrollTop() > 100 ? ($(".header").addClass("fixed-header"), $("fixed-header").fadeIn) : ($(".header").removeClass("fixed-header"), $("fixed-header").fadeOut)
    }), $(".close").click(function () {
        $(".modal-one").hide()
    }), $(".popup-btn").click(function () {
        $(".modal-one").show()
    }), setTimeout(function () {
        $(".modal-one").show()
    }, 8000);
    var i, o, t, n = "script";

    function a() {
        $zopim.livechat.window.toggle()
    }
    window.$zopim || (i = document, t = (o = $zopim = function (e) {
        o._.push(e)
    }).s = i.createElement(n), i = i.getElementsByTagName(n)[0], o.set = function (e) {
        o.set._.push(e)
    }, o._ = [], o.set._ = [], t.async = !0, t.setAttribute("charset", "utf-8"), t.src = "", o.t = +new Date, t.type = "text/javascript", i.parentNode.insertBefore(t, i)), $zopim(function () {
        $zopim.livechat.setOnUnreadMsgs(function e(s) {
            1 <= s && $zopim.livechat.window.show()
        })
    }), $(".chat").click(function () {
        $zopim.livechat.window.toggle()
    }), setTimeout(function () {
        loadZendeskWidget()
    }, 5e3);
    let l = $(".banner_item");
    l.slick({
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1e3,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dotsClass: "slick-dots",
        easing: "linear",
        cssEase: "linear",
        draggable: !0,
        swipe: !0
    });
    let c = $(".sec2_item");
    c.slick({
        dots: !1,
        arrows: !1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        infinite: !1,
        speed: 1e3,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: !0,
        easing: "linear",
        cssEase: "linear",
        draggable: !0,
        vertical: !0,
        verticalSwiping: !0,
        swipe: !0
    }), c.on("wheel", function (e) {
        e.preventDefault(), e.originalEvent.deltaY > 1 ? $(this).slick("slickNext") : $(this).slick("slickPrev")
    }), $(".sec3_box").slick({
        dots: !1,
        arrows: !1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        centerMode: !0,
        infinite: !0,
        speed: 1e3,
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnHover: !0,
        easing: "linear",
        cssEase: "linear",
        draggable: !0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    }), $(".sec4_right").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: !0,
        speed: 1e3,
        autoplay: !0,
        autoplaySpeed: 2e3,
        autoplay: !0,
        arrows: !1,
        dots: !1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 476,
            settings: {
                slidesToShow: 2
            }
        }]
    }), $(".sec5_box1").slick({
        dots: !1,
        arrows: !1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        infinite: !0,
        speed: 2e3,
        slidesToShow: 2,
        slidesToScroll: 2,
        pauseOnHover: !0,
        easing: "linear",
        cssEase: "linear",
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    }), $(".sec5_box2").slick({
        dots: !1,
        arrows: !1,
        autoplay: !0,
        autoplaySpeed: 4e3,
        infinite: !0,
        speed: 2e3,
        slidesToShow: 2,
        slidesToScroll: 2,
        pauseOnHover: !0,
        easing: "linear",
        cssEase: "linear",
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    }), $("#pills-website-tab").click(function () {
        $(".sec5_box1").slick("refresh")
    }), $("#pills-ecommerce-tab").click(function () {
        $(".sec5_box1").slick("refresh")
    }), $("#pills-logo-tab").click(function () {
        $(".sec5_box1").slick("refresh")
    }), $("#pills-branding-tab").click(function () {
        $(".sec5_box1").slick("refresh")
    }), $(document).ready(function () {
        $(".logo_slide_item").hover(function () {
            $(".logo_slide_item").removeClass("active"), $(this).addClass("active")
        })
    })
}), $(window).ready(function () {
    $(".loading").addClass("spin"), setTimeout(function () {
        var e = $(".loading").css("transform");
        console.log(e), $(".loading").addClass("class").css("transform", e).css("transform", "none"), $(".loading").animate({}, 500, function () {
            $(".loading").animate({
                width: "+=100%"
            }, 1500, function () {
                $(".up").show(), $(".up").animate({
                    top: "-=50%"
                }, 1500, function () {
                    $(this).hide()
                }), $(".down").show(), $(".down").animate({
                    bottom: "-=50%"
                }, 1500, function () {
                    $(this).hide()
                }), $(".loading").animate({
                    width: "0%"
                }, 1500, function () {}), moveTextRight(), moveTextLeft()
            })
        })
    }, 1985)
}), setTimeout(function () {
    $(".wrapper").remove()
}, 6e3), $(document).ready(function () {
    var e = $("meta[name=ip2loc]").attr("content");
    $("meta[name=page_url]").attr("content"), $.ajax({
        method: "get",
        url: "//pro.ip-api.com/json/" + e,
        data: {
            key: "5XpThOAEkfgOvEJ"
        },
        success: function (e) {
            e && ($("input[name=ip2loc_ip]").val(e.query), $("input[name=ip2loc_isp]").val(e.isp), $("input[name=ip2loc_org]").val(e.org), $("input[name=ip2loc_country]").val(e.country), $("input[name=ip2loc_region]").val(e.regionName), $("input[name=ip2loc_city]").val(e.city))
        }
    })
});