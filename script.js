const addInput = document.querySelector('#texto-tarefa');
const addBtn = document.querySelector('#criar-tarefa');

// Requisito 7 - Usei como referência o seguinte vídeo:https://www.youtube.com/watch?v=-BgTrpvOFFc . A monitoria misnistrada pelo Douglas também ajudou na questão de deixar o input vazio após incluir o texto.
 addBtn.addEventListener ('click',() => {
    const li = document.createElement ('li');
    const listaOrdenada = document.querySelector('#lista-tarefas');
    li.innerHTML = addInput.value;
    addInput.value = '';
    listaOrdenada.appendChild (li); 
});
