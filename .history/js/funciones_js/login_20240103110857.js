function entrar() {
    const usu= document.getElementById('username').value;
    const pass= document.getElementById('password').value;
    console.log(usu, pass);

    if (usu == 'david' && pass == '123'){
        window.location.href = './../index.html';
        localStorage.usuario = usu
        localStorage.rol = 1
    }
    else{
        alert("Datos erronios");
    }
}