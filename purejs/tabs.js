window.removeClass = function(el, name) {
    if (el.classList) {
        el.classList.remove(name);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

window.tabsHideAll = function(tabs) {
    let tabsElement = document.querySelector(".c-tabs[data-tabs="+tabs+"]");
    let tabsElements = tabsElement.querySelectorAll(".tab");
    Array.prototype.forEach.call(tabsElements, function(el, i){
        removeClass(el, "active");
        el.style.opacity = 0;
        setTimeout(function () {
            el.style.display = "none";
        }, 300);
    });
};

window.tabsShowOne = function(tabs, tab) {
    let tabsElement = document.querySelector(".c-tabs[data-tabs="+tabs+"]");
    let tabNumber = tabsElement.querySelector(".tab:nth-of-type("+tab+")");
    tabNumber.style.display = "block";
    setTimeout(function () {
        tabNumber.style.opacity = 1;
    }, 1);
};

window.showTab = function(tabs, tab) {
    tabsHideAll(tabs);
    setTimeout(function () {
        tabsShowOne(tabs, tab);
    }, 301);
};

if (document.querySelector("[data-tab][data-tabs]") !== null) {
    let tabsComponents = document.querySelectorAll("[data-tab][data-tabs]");
    Array.prototype.forEach.call(tabsComponents, function(el){
        el.addEventListener("click", function(){
            let tabs = el.getAttribute("data-tabs");
            let tab = el.getAttribute("data-tab");
            showTab(tabs,tab);
        });
    });
}