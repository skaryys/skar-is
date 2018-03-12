//function for closing/open menu
(function ($) {

    $("[data-start-menu]").click(function() {
        var data = $(this).attr("data-start-menu");
        $(".c-menu[data-menu="+data+"]").toggleClass("opened");
    });

}(jQuery));