if(localStorage.getItem("tokem") == null) {
 alert("Vocãe precisa estar logado para acessar a página")
 window.location.href = "./html/index.html"
}

var userlogado = JSON.parse(localStorage.getItem("userlogado"))

var logado = document.getElementById("logado")
logado.innerHTML = 'ola' ${userlogado.nome}

function sair () {
    localStorage.removeItem("itokem")
    localStorage.removeItem("userlogado")
    window.location.href = "index.html"
}