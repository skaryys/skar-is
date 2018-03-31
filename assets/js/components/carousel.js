//function for carousel
(function ($) {

    window.currentSlides = [];

    //slide function
    $.fn.slide = function(action,carousel,number) {

        var crs = $(".c-carousel[data-carousel="+carousel+"]");
        var slides = crs.children(".slide").length;

        var nextAction = function() {
            var firstChild = crs.children(".slide:first");
            var marginLeft =  - firstChild.outerWidth();
            firstChild.css("marginLeft",marginLeft);
            setTimeout(function () {
                firstChild.removeAttr("style");
                crs.append(firstChild);
                $(".c-carousel[data-carousel="+carousel+"] .indicators li").removeClass("active");
                $(".c-carousel[data-carousel="+carousel+"] .indicators li[data-number="+currentSlides[carousel]+"]").addClass("active");
            },600);
        };

        var previousAction = function() {
            var lastChild = crs.children(".slide:last");
            var marginPreviousLeft = - lastChild.outerWidth();
            lastChild.css("marginLeft",marginPreviousLeft);
            crs.prepend(lastChild);
            setTimeout(function () {
                lastChild.removeAttr("style");
                $(".c-carousel[data-carousel="+carousel+"] .indicators li").removeClass("active");
                $(".c-carousel[data-carousel="+carousel+"] .indicators li[data-number="+currentSlides[carousel]+"]").addClass("active");
            },1);
        };

        if (action === "next") {
            if (currentSlides[carousel] < slides) {
                currentSlides[carousel]++;
            } else {
                currentSlides[carousel] = 1;
            }
            nextAction();
        }

        if (action === "previous") {
            if (currentSlides[carousel] > 1) {
                currentSlides[carousel]--;
            } else {
                currentSlides[carousel] = slides;
            }
           previousAction();
        }

        if (action === "slide") {
            var difference = number - currentSlides[carousel];
            if (difference > 0) {
                var time = 700;
                for (i = 0; i < difference; i++) {
                    setTimeout(function () {
                        if (currentSlides[carousel] < slides) {
                            currentSlides[carousel]++;
                        } else {
                            currentSlides[carousel] = 1;
                        }
                        nextAction();
                    },time);
                    time = time + 700;
                }
            }
            if (difference < 0) {
                difference = Math.abs(difference);
                for (i = difference; i > 0; i--) {
                    if (currentSlides[carousel] > 1) {
                        currentSlides[carousel]--;
                    } else {
                        currentSlides[carousel] = slides;
                    }
                    previousAction();
                }
            }
        }

    };

    //initSlides
    $(".c-carousel[data-carousel]").each(function() {
        var crs  = $(this).attr("data-carousel");
        currentSlides[crs] = 1;
    });

    //autosliding
    $(".c-carousel[data-autoslide]").each(function() {
        var crs  = $(this).attr("data-carousel");
        var time = $(this).attr("data-autoslide");
        setInterval(function(){
            $(this).slide("next",crs);
        }, time);
    });

    //next slide controls
    $("[data-next-carousel]").click(function() {
        var data = $(this).attr("data-next-carousel");
        $(this).slide("next",data);
    });

    //previous slide controls
    $("[data-previous-carousel]").click(function() {
        var data = $(this).attr("data-previous-carousel");
        $(this).slide("previous",data);
    });

    //previous slide controls
    $("[data-numbers-carousel]").click(function() {
        var data = $(this).attr("data-numbers-carousel");
        var number = $(this).attr("data-number");
        $(this).slide("slide",data,number);
    });


}(jQuery));