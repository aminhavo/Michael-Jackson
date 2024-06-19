const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você acha que em algum momento a I.A pode fazer uma dominância mundial?",
        alternativas: [
            {
                texto: "no way",
                afirmacao: "afirmação"
            },
            {
                texto: "acho que sim",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "você acha que em algum momento a I.A pode se rebelar contra a humanidade?",
        alternativas: [
            {
                texto: "nah",
                afirmacao: "afirmação"
            },
            {
                texto: "sim"
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "você acha que as imagens feitas por I.A deveriam ser vendidas?",
        alternativas: [
            {
                texto: "não",
                afirmacao: "afirmação"
            },
            {
                texto: "sim",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "sabendo do avanço das I.A você acha que elas podem substituiro trabalho humano?",
        alternativas: [
            {
                texto: "nem que a vaca da sogra de alguem tusa",
                afirmacao: "afirmação"
            },
            {
                texto: "afiemativo",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "voce acha que as I.A podem ser um potencial perigo ao mundo? ",
        alternativas: [
            {     
                texto: "não, se pah ela é uma solução",
                afirmacao: "afirmação"
            },
            {
                texto: "sim, podendo ser uma ferramenta de caos mundial",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
