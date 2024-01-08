function entrar() {
    const usu= document.getElementById('username').value;
    const pass= document.getElementById('password').value;
    console.log(usu, pass);

    if (usu == 'david' && pass == '123'){
        window.location.href = './../index.html';
        
    }
    else{
        alert("Datos erronios");
    }
}