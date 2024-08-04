    var nome = document.getElementById('nome')
    var labelnome = document.getElementById('labelnome')
    var validnome = false

    var usuario = document.getElementById('usuario')
    var labelusuario = document.getElementById('labelusuario')
    var validusuario = false

    var senha = document.getElementById('senha')
    var labelsenha = document.getElementById('labelsenha')
    var validsenha = false

    var consenha = document.getElementById('consenha')
    var labelconsenha = document.getElementById('labelconsenha')
    var validcosenha = false

    var error = document.getElementById('error')
    var succes = document.getElementById('succes')

    function nomecorr() { 
       if (nome.value.length <=2) {
        labelnome.setAttribute('style', 'color: red')
        labelnome.innerHTML = 'Minimo 3 carateres'
        validnome = false
       
       } else {
        labelnome.setAttribute('style', 'color: #07F285')
        labelnome.innerHTML = 'Nome'
        validnome = true
        }
    }

    function usuariocorr() {
        if (usuario.value.length <=2) {
        labelusuario.setAttribute('style', 'color: red')
        labelusuario.innerHTML = 'Minimo 3 carateres'
        validusuario = false

        } else {
        labelusuario.setAttribute('style', 'color: #07F285')
        labelusuario.innerHTML = 'Usuario'
        validusuario = true
        }

    }

    function senhacorr () {
        if (senha.value.length <=2) {
        labelsenha.setAttribute('style', 'color: red')
        labelsenha.innerHTML = 'Minimo 3 carateres'
        validsenha = false
        
        } else {
        labelsenha.setAttribute('style', 'color: #07F285')
        labelsenha.innerHTML = 'Senha'
        validsenha = true
        }
    }

    function corrigsenha () {
        if (consenha.value.length <=2) {
        labelconsenha.setAttribute('style', 'color: red')
        labelconsenha.innerHTML = 'Minimo 3 carateres'
        validcosenha = false

        } else {
        labelconsenha.setAttribute('style', 'color: #07F285')
        labelconsenha.innerHTML = 'Senha'
        validcosenha = true
        }   
    }

    function cadastrar () {
        if(validnome && validusuario && validsenha && validcosenha) {
            var listauser = JSON.parse(localStorage.getItem('listauser') || '[]')

            listauser.push(
            {
                nomecad: nome.value,
                usercad: usuario.value,
                senhacad: senha.value
            }
            ) 
           
          localStorage.setItem('listauser', JSON.stringify(listauser))
           
          succes.setAttribute('style', 'display: block')
          succes.innerHTML = 'Cadastro com sucesso'
          error.setAttribute('style', 'display: none')
          error.innerHTML = ''

          setTimeout(() => {
            "../html/index.html"
          }, 3000);
        
        } else {
          error.setAttribute('style', 'display: block')
          error.innerHTML = 'cadastro inválido'
          succes.setAttribute('style', 'display: none')
          succes.innerHTML = ''  
        }      
    
    }
