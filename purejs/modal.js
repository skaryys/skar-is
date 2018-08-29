window.modal = function(action,modal) {
    let modalId = document.querySelector("#"+modal);

    if (action === "open") {
        document.querySelector("html").style.overflow = "hidden";
        document.querySelector("body").style.overflow = "hidden";
        document.ontouchmove = function (e) {
            if (!modalId.has(e.target).length) {
                e.preventDefault();
            }
        };
        document.querySelector(".c-overlay").style.display = "block";
        modalId.style.display = "block";
        setTimeout(function () {
            modalId.style.opacity = "1";
            document.querySelector(".c-overlay").style.opacity = "1";
        }, 1);
    }

    if (action === "close") {
        document.querySelector("html").style.overflow = "auto";
        document.querySelector("body").style.overflow = "auto";
        document.ontouchmove = function () {
            return true;
        };
        document.querySelector(".c-overlay").style.opacity = "0";
        modalId.style.opacity = "0";
        setTimeout(function () {
            modalId.style.display = "none";
            document.querySelector(".c-overlay").style.display = "none";
        }, 300);
    }
};

if (document.querySelector("[data-modal]") !== null) {
    let modals = document.querySelectorAll("[data-modal]");
    Array.prototype.forEach.call(modals, function(el){
        el.addEventListener("click", function(){
            let modalId = el.getAttribute("data-modal");
            modal("open",modalId);
        });
    });
}

if (document.querySelector("[data-close]") !== null) {
    let closes = document.querySelectorAll("[data-close]");
    Array.prototype.forEach.call(closes, function(el){
        el.addEventListener("click", function(){
            let modalId = el.getAttribute("data-close");
            modal("close",modalId);
        });
    });
}

if (document.querySelector(".c-overlay") !== null) {
    document.querySelector(".c-overlay").addEventListener("click", function(){
        let modals = document.querySelectorAll(".c-modal");
        Array.prototype.forEach.call(modals, function(el){
            let modalId = el.getAttribute("id");
            modal("close",modalId);
        });
    });
}

