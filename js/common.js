/**
 * common.js
 */

$(function () {
    $('#container').fullpage({
        navigation: true,
        navigationPosition: 'left',
        scrollBar: true,
        verticalCentered: false,
        keyboardScrolling: true,
        normalScrollElements: '#content_2, #content_3, #content_4'
    });

    // #logo
    $("#logo a").click(function () {
        var top = $("body").offset().top;
        $("html, body").stop();
        $("html, body").animate({
            scrollTop: top
        }, 500)

        return false;
    });

    // #gnb
    $("#gnb a").each(function (i, element) {
        $(this).addClass("select");
        $(this).click(function () {
            $(this).addClass("on");
            $("#gnb a").not($(this)).addClass("select");
            $(this).removeClass("select");
            $("#gnb a").not($(this)).removeClass("on");
            var pageArr = [$("#content_1").offset().top, $("#content_2").offset().top,
                $("#content_3").offset().top,
                $("#content_4").offset().top, $("#content_5").offset().top
            ];
            $("html, body").stop();
            $("html, body").animate({
                scrollTop: pageArr[i]
            }, 500)
            
            return false;
        })
    })

    $(document).on("mouseover", ".select", function () {
        $(this).addClass("on");

    })
    $(document).on("mouseout", ".select", function () {
        $(this).removeClass("on");

    })

    // #content_2
    function swing() {
        $('#farm .position').animate({
            'top': '+=2%'
        }, 500).animate({
            'top': '-=2%'
        }, 500, swing);
    }
    swing();

    var arr1 = ["img/main/nutrilite.jpg", "img/main/flower.jpg", "img/main/road.jpg", "img/main/apple.jpg"];
    var arr2 = ["img/main/text_1.png", "img/main/text_2.png", "img/main/text_3.png", "img/main/text_4.png"];

    $(".position").each(function (i, obj) {
        $(".position").eq(i).click(function () {
            $(this).removeClass("c1");
            $(".position").not($(this)).addClass("c1");
            $(".c1").attr("src", "img/main/position.png");
            $(this).attr("src", "img/main/position_hover.png");

            $("#title_img").attr("src", arr1[i]);
            $("#text_img").attr("src", arr2[i]);

            return false;

        });
    });

    $(document).on("mouseover", ".c1", function () {
        $(this).attr("src", "img/main/position_hover.png");
    })

    $(document).on("mouseout", ".c1", function () {
        $(this).attr("src", "img/main/position.png");
    })


    $("#img_wrap").hide();
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        var video = $("#content_1").offset().top;
        var content_2 = $("#content_2").offset().top;

        if (scrollTop >= video - 1) {
            $("#header").addClass("page_header");
        } else {
            $("#header").removeClass("page_header");
        }

        if (scrollTop >= content_2 - 1) {
            $("#img_wrap").fadeIn(500);
        }
    });

});