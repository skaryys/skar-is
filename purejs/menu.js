if (document.querySelector("[data-start-menu]") !== null) {
    let menus = document.querySelectorAll("[data-start-menu]");
    Array.prototype.forEach.call(menus, function(el){
        el.addEventListener("click", function(){
            let data = el.getAttribute("data-start-menu");
            if (document.querySelector(".c-menu[data-menu="+data+"]").classList) {
                document.querySelector(".c-menu[data-menu="+data+"]").classList.toggle("opened");
            } else {
                let classes = document.querySelector(".c-menu[data-menu=" + data + "]").className.split(' ');
                let existingIndex = classes.indexOf("opened");
                if (existingIndex >= 0) {
                    classes.splice(existingIndex, 1);
                } else {
                    classes.push("opened");
                    document.querySelector(".c-menu[data-menu="+data+"]").className = classes.join(' ');
                }
            }
        });
    });
}
