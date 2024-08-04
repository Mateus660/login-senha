function enviar() {
    var logusuario = document.getElementById('logusuario')
    var labelnome = document.getElementById('labelsenha')

    var logsenha = document.getElementById('logsenha')
    var labelsenha = document.getElementById('labelsenha')

    var error = document.getElementById('msgerror')
    var listauser = []

    var uservalid = {
        nome: '',
        user: '',
        senha: '',
    }

    listauser = JSON.parse(localStorage.getItem('listauser'))

    listauser.array.forEach((item) => {
        if(usuario.value == item.usercad && senha.value == item.aenhacad) {
            usevalid = {
                nome: item.nomecad,
                user: item.usercad,
                senha: item.senhacad
            } 
             
        }  
    })
    
    console.log(uservalid)  
 }