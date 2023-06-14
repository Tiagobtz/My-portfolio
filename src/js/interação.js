const botao = document.querySelector("#botao-sobre-mim")
const apresentacao = document.querySelector("#apresentacao")

botao.addEventListener("click", function(){
    apresentacao.classList.add("ativo")
    botao.classList.add("desativado")
})