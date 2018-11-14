window.removeClass = function(el, name) {
    if (el.classList) {
        el.classList.remove(name);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

window.addClass = function(el, name) {
    if (el.classList) {
        el.classList.add(name);
    } else {
        el.className += ' ' + name;
    }
};

window.currentSlides = [];

window.slide = function(action, carousel, number) {

    let crs = document.querySelector(".c-carousel[data-carousel="+carousel+"]");
    let slides = crs.querySelectorAll(".slide").length;

    const nextAction = function () {
        let firstChild = crs.querySelector(".slide:first-child");
        let marginLeft = - firstChild.offsetWidth;
        firstChild.setAttribute("style", "margin-left:"+marginLeft+"px;");
        setTimeout(function () {
            firstChild.removeAttribute("style");
            crs.appendChild(firstChild);
        },600);
    };

    const previousAction = function() {
        let lastChild = crs.querySelector(".slide:last-child");
        let marginPreviousLeft = - lastChild.offsetWidth;
        firstChild.setAttribute("style", "margin-left:"+marginPreviousLeft+"px;");
        crs.insertBefore(lastChild, crs.querySelector(".slide:first-child"));
        setTimeout(function () {
            lastChild.removeAttribute("style");
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
        let difference = number - currentSlides[carousel];
        if (difference > 0) {
            let time = 700;
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

if (document.querySelector(".c-carousel[data-carousel]") !== null) {
    Array.prototype.forEach.call(document.querySelectorAll(".c-carousel[data-carousel]"), function (el, i) {
        let crs = el.getAttribute("data-carousel");
        currentSlides[crs] = 1;
    });
}

if (document.querySelector(".c-carousel[data-autoslide]") !== null) {
    Array.prototype.forEach.call(document.querySelectorAll(".c-carousel[data-autoslide]"), function (el, i) {
        let crs  = el.getAttribute("data-carousel");
        let time = el.getAttribute("data-autoslide");
        setInterval(function(){
            slide("next",crs);
        }, time);
    });
}

if (document.querySelector("[data-next-carousel]") !== null) {
    Array.prototype.forEach.call(document.querySelectorAll("[data-next-carousel]"), function (el, i) {
        el.addEventListener("click", function(){
            let data = el.getAttribute("data-next-carousel");
            slide("next", data);
        });
    });
}

if (document.querySelector("[data-previous-carousel]") !== null) {
    Array.prototype.forEach.call(document.querySelectorAll("[data-previous-carousel]"), function (el, i) {
        el.addEventListener("click", function(){
            let data = el.getAttribute("data-previous-carousel");
            slide("previous", data);
        });
    });
}

if (document.querySelector("[data-numbers-carousel]") !== null) {
    Array.prototype.forEach.call(document.querySelectorAll("[data-numbers-carousel]"), function (el, i) {
        el.addEventListener("click", function(){
            let data = el.getAttribute("data-numbers-carousel");
            let number = el.getAttribute("data-number");
            slide("slide", data, number);
        });
    });
}