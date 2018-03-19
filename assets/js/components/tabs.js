(function ($) {

    //show tab
    $.fn.showTab = function(tabs,tab) {

        var hideAll = function () {
            var tabsElement = $(".c-tabs[data-tabs="+tabs+"]");
            tabsElement.children(".tab").each(function() {
                $(this).removeClass("active");
                $(this).css("opacity","0");
                var that = this;
                setTimeout(function () {
                    $(that).css("display","none");
                }, 300);
            });
        };

        var showOne = function () {
            var tabsElement = $(".c-tabs[data-tabs="+tabs+"]");
            var tabNumber = tabsElement.children(".tab:nth-of-type("+tab+")");
            tabNumber.css("display","block");
            setTimeout(function () {
                tabNumber.css("opacity","1");
            }, 1);
        };

        hideAll();
        setTimeout(function () {
            showOne();
        }, 301);
1
    };

    //call showTab function on click
    $("[data-tab][data-tabs]").click(function() {
        var tabs = $(this).attr("data-tabs");
        var tab = $(this).attr("data-tab");
        $(this).showTab(tabs,tab);
    });

}(jQuery));