const menu = document.body.querySelector("button")
const links = document.body.querySelectorAll("a")
let hidden = true
const gallery = document.body.querySelector("section.gallery")

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

let modal = document.createElement("dialog");
modal.innerHTML = "<img></img><button id='closeBtn'>close</button>";
document.body.appendChild(modal);

modal.querySelector("#closeBtn").addEventListener("click", () => {
    modal.close();
});

gallery.addEventListener("click", function(event) {
    let imgpath = event.target.closest("img").src;

    modal.querySelector("img").src = imgpath.split("-")[0]+"-full.jpeg";
    modal.showModal()
    
})