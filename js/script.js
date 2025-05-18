const itens = document.querySelectorAll("ul li");
const minhaFoto = document.querySelector("#img-pessoal");

itens.forEach(function (item, index) {
    item.addEventListener("click", function () {
        if (index === 1) {
            minhaFoto.classList.add("ativo"); // ação para o primeiro item
        } else if (index === 2) {

        } else {
            alert("Outro item clicado!");
        }
    });
});