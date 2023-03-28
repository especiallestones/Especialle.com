let setas = document.querySelectorAll(".seta");
let item = document.querySelectorAll(".item");
let maxItems = item.length;
let itemAtual = 0;
setas.forEach((seta) => {
    seta.addEventListener("click", () => {
        const isLeft = seta.classList.contains("left");
        if (isLeft) {
            itemAtual -= 1;
        }else {
            itemAtual += 1;
        }
        if (itemAtual >= maxItems) {
            itemAtual = 0;
        }
        if (itemAtual < 0 ) {
            itemAtual = maxItems - 1;
        }
        item.forEach (i => 
            i.classList.remove ("atual"))
        item [itemAtual].scrollIntoView ({
            inline:"center",
            block:"nearest"
        });
        item [itemAtual].classList.add("atual")
    })
});

const hamburguer = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".navMenu")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active')
    navMenu.classList.toggle('active')
})