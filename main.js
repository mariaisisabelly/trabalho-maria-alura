const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");

function atualizaRelogio() {
    const fusoHorarioGMT3 = -3; // GMT -3
    const agora = new Date();
    const tempoAtualizado = new Date(agora.getTime() + fusoHorarioGMT3 * 60 * 60 * 1000); // Aplicando o fuso horário

    const dia = tempoAtualizado.getDate();
    const horas = tempoAtualizado.getUTCHours().toString().padStart(2, '0');
    const minutos = tempoAtualizado.getMinutes().toString().padStart(2, '0');
    const segundos = tempoAtualizado.getSeconds().toString().padStart(2, '0');

    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias" + i).textContent = dia;
        document.getElementById("horas" + i).textContent = horas;
        document.getElementById("min" + i).textContent = minutos;
        document.getElementById("seg" + i).textContent = segundos;
    }
}

function comecaRelogio() {
    atualizaRelogio();
    setInterval(atualizaRelogio, 1000);
}

comecaRelogio();
