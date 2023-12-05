import { adicionaNaLista, getLista, limpaLista, removeDaLista } from "./lista.js";

const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#itens');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');
const btnRemover = document.querySelector('#remover');

btnLimpar.addEventListener('click', limparElementosDaLista);
btnAdicionar.addEventListener('click', criaElementoNaLista);
btnRemover.addEventListener('click', removeItemDaLista);

function criaElementoNaLista(){
    const texto = pEntrada.textContent;
    adicionaNaLista(texto);
    atualizarItensDeLista();
    pEntrada.textContent="";
    pEntrada.focus();
}
