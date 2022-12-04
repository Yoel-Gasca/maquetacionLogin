//Ejecutando funciones establecidas
document.getElementById("iniciar_Sesion").addEventListener("click", iniciarSesion);
document.getElementById("register").addEventListener("click", registerUser);
window.addEventListener("resize", anchoPage);


// Variables de funcionalidad
var formLogin = document.querySelector(".formLogin");
var formRegister = document.querySelector(".formRegister");
var containerLogin = document.querySelector(".containerLogin");
var userRegister = document.querySelector(".userRegister");
var loginUser = document.querySelector(".loginUser");


function anchoPage(){
    if(window.innerWidth > 850){
        loginUser.style.display = "block";
        userRegister.style.display = "block";
    } else{
        loginUser.style.display = "block";
        loginUser.style.opacity = "1";
        userRegister.style.display = "none";
        formLogin.style.display = "block";
        containerLogin.style.left = "0px";
        formRegister.style.display = "none";

    }
}

anchoPage();

    function iniciarSesion(){
        if (window.innerWidth > 850){
            formLogin.style.display = "block";
            containerLogin.style.left = "10px";
            formRegister.style.display = "none";
            loginUser.style.opacity = "1";
            userRegister.style.opacity = "0";
        } else{
            formLogin.style.display = "block";
            containerLogin.style.left = "0px";
            formRegister.style.display = "none";
            loginUser.style.display = "block";
            userRegister.style.display = "none";
        }
    }
    
    function registerUser(){
        if (window.innerWidth > 850) {
            formRegister.style.display = "block";
            containerLogin.style.left = "410px";
            formLogin.style.display = "none"
            loginUser.style.opacity = "0";
            userRegister.style.opacity = "1";
        } else{
            formRegister.style.display = "block";
            containerLogin.style.left = "0px";
            formLogin.style.display = "none"
            loginUser.style.display = "none";
            userRegister.style.display = "block";
            userRegister.style.opacity = "1";
        }
    }