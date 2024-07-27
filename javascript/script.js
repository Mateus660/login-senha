    var nome = document.getElementById('nome')
    var labelnome = document.getElementById('labelnome')

    var usuario = document.getElementById('usuario')
    var labelusuario = document.getElementById('labelusuario')

    var senha = document.getElementById('senha')
    var labelsenha = document.getElementById('labelsenha')

    var consenha = document.getElementById('consenha')
    var labelconsenha = document.getElementById('labelcosenha')
     

    function nomecorr() {
       if (nome.value.length <=2) {
        labelnome.setAttribute('style', 'color: red')
        labelnome.innerHTML = 'Minimo 3 carateres'
       
       } else {
        labelnome.setAttribute('style', 'color: #07F285')
        labelnome.innerHTML = 'Nome'
       }
    }

    function usuariocorr() {
        if (usuario.value.length <=2) {
        labelusuario.setAttribute('style', 'color: red')
        labelusuario.innerHTML = 'Minimo 3 carateres'
        
        } else {
        labelusuario.setAttribute('style', 'color: #07F285')
        labelusuario.innerHTML = 'Usuario'
        }

    }

    function senhacorr () {
        if (senha.value.length <=2) {
         labelsenha.setAttribute('style', 'color: red')
         labelsenha.innerHTML = 'Minimo 3 carateres'
         
        } else {
         labelsenha.setAttribute('style', 'color: #07F285')
         labelsenha.innerHTML = 'Senha'

        }
    }

    function corrigsenha () {
        if (consenha.value.length <2) {
        labelconsenha.setAttribute('style, color: #07F285')
        labelconsenha.innerHTML = 'Minimo 3 carateres'
        
        } else {
        labelconsenha.setAttribute('style', 'color: #07F285')
        labelconsenha.innerHTML = 'Minimo 3 carateres'
        }   
    }



    function cadastrar () {
     

    }

    function enviar() {
        var logusuario = document.getElementById('logusuario')
        var logsenha = document.getElementById('logsenha')

    if (logusuario == "pessoa" & logsenha == "122") {
        location.href = "https://www.linkedin.com/in/mateus-emanuel-4570201a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

    } else {
        alert('Usuário ou senha errados');
    }
 
}
