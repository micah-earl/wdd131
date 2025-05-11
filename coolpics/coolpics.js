const menu = document.body.querySelector("button")
const links = document.body.querySelectorAll("a")
let hidden = true

menu.addEventListener("click", function() {
    if (hidden) {
        links.forEach(link=>
            link.classList.remove("hidden"))
            hidden = false
    }
    else {
        links.forEach(link=>
            link.classList.add("hidden"))
            hidden = true
    }
})