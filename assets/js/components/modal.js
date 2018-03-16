(function ($) {

    //modal open/close function
    $.fn.modal = function(action,modal) {

        var modalId = $("#"+modal);

        if (action === "open") {
            $(".c-overlay").css("display","block");
            modalId.css("display","block");
            setTimeout(function () {
               modalId.css("opacity","1");
               $(".c-overlay").css("opacity","1");
            }, 1);
        }

        if (action === "close") {
            $(".c-overlay").css("opacity","0");
            modalId.css("opacity","0");
            setTimeout(function () {
                modalId.css("display","none");
                $(".c-overlay").css("display","none");
            }, 300);
        }

    };

    //open modal on click
    $("[data-modal]").click(function() {
        var modalId = $(this).attr("data-modal");
        $(this).modal("open",modalId);
    });

    //close modal on click
    $("[data-close]").click(function() {
        var modalId = $(this).attr("data-close");
        $(this).modal("close",modalId);
    });

}(jQuery));