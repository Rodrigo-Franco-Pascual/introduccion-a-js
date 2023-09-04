const $horas = document.querySelector('#horas');
const $minutos = document.querySelector('#minutos');
const $segundos = document.querySelector('#segundos');
const $calcular = document.querySelector('#calcular');
const $agregar = document.querySelector('#agregar');
const $limpiar = document.querySelector('#limpiar');

const tiempos = [];

$agregar.onclick = function() {

    const horas = parseInt($horas.value) || 0;
    const minutos = parseInt($minutos.value) || 0;
    const segundos = parseInt($segundos.value) || 0;

    tiempos.push({ horas, minutos, segundos });

    document.querySelector('#resultado').value += `${horas}h ${minutos}m ${segundos}s\n`;

    $horas.value = '';
    $minutos.value = '';
    $segundos.value = '';

    return false;
}

$limpiar.onclick = function() {
    tiempos.length = 0;
    document.querySelector('#resultado').value = ''
}

$calcular.onclick = function() {

    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;

    for(let i = 0; i < tiempos.length; i++){
        totalHoras = totalHoras + tiempos[i].horas;
        totalMinutos = totalMinutos + tiempos[i].minutos;
        totalSegundos = totalSegundos + tiempos[i].segundos;
    } 

    document.querySelector('#resultado2').value += `${totalHoras}h ${totalMinutos}m ${totalSegundos}s\n`;

    return false;
}