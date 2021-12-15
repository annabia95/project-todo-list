const addInput = document.querySelector('#texto-tarefa');
const addBtn = document.querySelector('#criar-tarefa');
const listaOrdenada = document.querySelector('#lista-tarefas');

// Requisito 5 e 6 - Usei como referência o seguinte vídeo:https://www.youtube.com/watch?v=-BgTrpvOFFc . A monitoria misnistrada pelo Douglas também ajudou na questão de deixar o input vazio após incluir o texto. Usei uma arrow functions para refatorar o código. link: https://www.w3schools.com/js/js_arrow_function.asp
 addBtn.addEventListener ('click',() => {
    const li = document.createElement ('li');
    li.classList = "lista";
// Atribui a cada elemento da minha lista o valor que foi inserido no input!
    li.innerHTML = addInput.value;
// "Limpa" o input após o clique!
    addInput.value = '';
    listaOrdenada.appendChild (li); 
});

// Requisito 7 - Função para criar a cor de fundo de cada item da lista. Tive como referência o Exercício da Agenda Tryber!
listaOrdenada.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
});