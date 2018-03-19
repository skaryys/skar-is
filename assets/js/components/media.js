//IE11 object-fit polyfill for Media components with images
(function ($) {

    //replace image with background in IE
    $.fn.ieMedia = function() {

        if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
            var image = $(this).children("img:first-of-type").attr("src");
            if (typeof image !== "undefined") {
                $(this).children("img").remove();
                $(this).attr("style","background-size:cover;background-position:center;background-image:url("+image+");");
            }
        }

    };

    //initSlides
    $("[class*=c-mediaWrapper-]").each(function() {
        $(this).ieMedia();
    });

}(jQuery));