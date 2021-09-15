var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var sonidoBotonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        SonidoLicu();
        licuadora.classList.add("active");
        console.log("me prendiste");
       
    } else {
        estadoLicuadora = "apagada";
        SonidoLicu();
        licuadora.classList.remove("active");
        console.log("me apagaste");
    }

}

function SonidoLicu(){
    if(sonidoLicuadora.paused){
        sonidoBotonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        sonidoBotonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}