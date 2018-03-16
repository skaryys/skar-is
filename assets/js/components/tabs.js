(function ($) {

    //show tab
    $.fn.showTab = function(tabs,tab) {

        var hideAll = function (callback) {
            var tabsElement = $(".c-tabs[data-tabs="+tabs+"]");
            tabsElement.children(".tab").each(function() {
                $(this).removeClass("active");
                var that = this;
                setTimeout(function () {
                    $(that).removeClass("visible");
                    callback();
                }, 300);
            });
        };

        var showOne = function () {
            var tabsElement = $(".c-tabs[data-tabs="+tabs+"]");
            var tabNumber = tabsElement.children(".tab:nth-of-type("+tab+")");
            tabNumber.addClass("visible");
            setTimeout(function () {
                tabNumber.addClass("active");
            }, 1);
        };

        hideAll(showOne());
1
    };

    //call showTab function on click
    $("[data-tab][data-tabs]").click(function() {
        var tabs = $(this).attr("data-tabs");
        var tab = $(this).attr("data-tab");
        $(this).showTab(tabs,tab);
    });

}(jQuery));