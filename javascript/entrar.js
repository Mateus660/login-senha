function enviar() {
    var logusuario = document.getElementById('logusuario')
    var labelnome = document.getElementById('labelsenha')

    var logsenha = document.getElementById('logsenha')
    var labelsenha = document.getElementById('labelsenha')

    var msgerror = document.getElementById('msgerror')
    var listauser = []

    var uservalid = {
        nome: null,
        user: null,
        senha: null
    }

    listauser = JSON.parse(localStorage.getItem('listauser'))

    listauser?.forEach((item) => {
        if(usuario.value == item.usercad && senha.value == item.senhacad) {
            uservalid = {
                nome: item.nomecad,
                user: item.usercad,
                senha: item.senhacad
            } 
             
        }  
    })
    
   if(usuario.value == uservalid.user && senha.value == uservalid.senha){
   window.location.href = '../html/logado.html'

   var mathRandom = Math.random().toString(16).substr(2)
   var tokem = mathRandom + mathRandom

   localStorage.setItem('tokem', tokem)
   localStorage.setItem('userlogado', JSON.stringify(uservalid))

  } else {
   labelnome.setAttribute('style', 'color, red')
   usuario.setAttribute('style', 'border-color: red')
   labelsenha.setAttribute('style', 'color: red')
   senha.setAttribute('style', 'border-color: red')
   msggerror.setAttribute('style', 'display: block')
   msgerror.innerHTML = 'Usário ou senha incorretos'
   usuario.focus()

  } 

 }