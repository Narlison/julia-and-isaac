var dataInicio = new Date('2022-08-17T00:00:00-03:00');

function atualizarContador() {
    var dataAtual = new Date();
    var diferencaTempo = dataAtual.getTime() - dataInicio.getTime();
    var diferencaDias = Math.floor(diferencaTempo / (1000 * 3600 * 24));

    var contadorElemento = document.getElementById('contador-dias');
    contadorElemento.textContent = diferencaDias;

    var diferencaSegundos = Math.floor(diferencaTempo / 1000);
    var segundos = diferencaSegundos % 60;
    var minutos = Math.floor((diferencaSegundos / 60) % 60);
    var horas = Math.floor(diferencaSegundos / 3600);

    var contadorElementoTempo = document.getElementById('hora');
    contadorElementoTempo.textContent = horas;
    
    contadorElementoTempo = document.getElementById('minuto'); // Corrigido aqui
    contadorElementoTempo.textContent = minutos;
    
    contadorElementoTempo = document.getElementById('segundo'); // Corrigido aqui
    contadorElementoTempo.textContent = segundos;
}

atualizarContador();
setInterval(atualizarContador, 1000);

/* DESENVOLVIDO POR @NARLISONXL */
