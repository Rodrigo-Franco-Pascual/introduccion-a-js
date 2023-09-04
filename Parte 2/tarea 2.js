const $mostrar = document.querySelector('#mostrar');

$mostrar.onclick = function(){
    let $titulo = document.querySelector('h1');
    const $nombre1 = document.querySelector('#nombre1').value;
    const $nombre2 = document.querySelector('#nombre2').value;
    const $apellido = document.querySelector('#apellido').value;
    const $edad = document.querySelector('#edad').value;
    let textoResultado;
    textoResultado = "Tu información es la siguiente: " + $nombre1 + " " + $nombre2 + " " + $apellido + " " + $edad ;
    $titulo.textContent = "¡Bienvenido " + $nombre1 + "!";
    document.querySelector('.resultado').textContent = textoResultado;
    return false;
}
