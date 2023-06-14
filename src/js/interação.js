const botao = document.querySelector("#botao")
const apresentacao = document.querySelector("#apresentacao")

botao.addEventListener("click", function(){
    apresentacao.classList.add("ativo")
    botao.classList.add("desativado")
})