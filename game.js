let pontuacaoJogador = 0
let pontuacaoPc = 0

const possiveisResultados = [
    {
        1: [1, 0, 2],
        2: [2, 1, 0],
        3: [0, 2, 1],
    }
]

function resultadoDoJogo(jogadaPlayer) {
    let jogadaPc = parseInt(Math.random() * 3 + 1)
    let jogadorElement = document.querySelector(".player").getElementsByTagName("img")[jogadaPlayer - 1]
    let pcElement = document.querySelector(".pc").getElementsByTagName("img")[jogadaPc - 1]

    jogadorElement.classList.add("ativa")
    pcElement.classList.add("ativa")

    possiveisResultados[0][jogadaPlayer][jogadaPc - 1] === 1 ? ganhador("Empatou", jogadorElement, pcElement)
        : possiveisResultados[0][jogadaPlayer][jogadaPc - 1] === 0 ? ganhador("Computador Ganhou", jogadorElement, pcElement) + (pontuacaoPc += 1)
            : ganhador("Jogador Ganhou", jogadorElement, pcElement) + (pontuacaoJogador += 1)
}

function ganhador(ganhador, jogadorElement, pcElement) {
    let dashboardGanhador = document.getElementById("console").querySelector("h1")
    let jogadorPontuacaoElement = document.querySelector(".player").querySelector(".cabecalho").querySelector("p")
    let pcPontuacaoElement = document.querySelector(".pc").querySelector(".cabecalho").querySelector("p")
    dashboardGanhador.innerHTML = ganhador

    setTimeout(() => {
        jogadorElement.classList.remove("ativa")
        pcElement.classList.remove("ativa")
        dashboardGanhador.innerHTML = "..."
        jogadorPontuacaoElement.innerHTML = pontuacaoJogador
        pcPontuacaoElement.innerHTML = pontuacaoPc
    }, 2000)
}
