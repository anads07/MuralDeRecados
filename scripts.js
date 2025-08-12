const apiUrl = 'https://api-mural.onrender.com/recados';

const corModalMap = {
    'src/recadoroxo.png': {
        fundo: '#d2c7ff',
        botao: '#6b1fad'
    },
    'src/recadoazul.png': {
        fundo: '#bdd7ff',
        botao: '#264fa6'
    },
    'src/recadoverde.png': {
        fundo: '#b1cbb4',
        botao: '#5e714b'
    },
    'src/recadorosa.png': {
        fundo: '#f7cdd0',
        botao: '#e61f93'
    }
};

const coresPostIt = [
    'src/recadoroxo.png',
    'src/recadoazul.png',
    'src/recadoverde.png',
    'src/recadorosa.png'
];

const muralContainer = document.getElementById('mural-container');
const btnAdicionar = document.getElementById('btn-adicionar');
const modalAdicionar = document.getElementById('modal-adicionar');
const fecharModalBtn = document.querySelector('.fechar-modal');
const formRecado = document.getElementById('form-recado');
const btnOrdenar = document.getElementById('btn-ordenar');

let recados = [];
let coresUsadas = [];
let isOrdenado = false;

const formatarData = (dataString) => {
    const data = new Date(dataString);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return data.toLocaleDateString('pt-BR', options);
};

const getCorAleatoria = () => {
    if (coresUsadas.length === coresPostIt.length) {
        coresUsadas = [];
    }
    let cor;
    do {
        const index = Math.floor(Math.random() * coresPostIt.length);
        cor = coresPostIt[index];
    } while (coresUsadas.includes(cor));
    coresUsadas.push(cor);
    return cor;
};

const getRotacaoAleatoria = () => {
    const angulo = Math.floor(Math.random() * 10) - 5;
    return `rotate(${angulo}deg)`;
};

const criarPostItHTML = (recado) => {
    const cor = getCorAleatoria();
    const rotacao = getRotacaoAleatoria();
    const dataFormatada = formatarData(recado.data_criacao);

    return `
        <div class="post-it-card" style="background-image: url('${cor}'); transform: ${rotacao};">
            <h3>${recado.autor}</h3>
            <div class="recado">
                <p>${recado.mensagem}</p>
            </div>
            <div class="data-card">${dataFormatada}</div>
        </div>
    `;
};

const renderizarMural = (listaRecados) => {
    muralContainer.innerHTML = '';
    
    let recadosParaRenderizar = [...listaRecados];

    if (isOrdenado) {
        recadosParaRenderizar.sort((a, b) => a.autor.localeCompare(b.autor));
    }

    recadosParaRenderizar.forEach(recado => {
        const postItHTML = criarPostItHTML(recado);
        muralContainer.insertAdjacentHTML('beforeend', postItHTML);
    });
};

const buscarEExibirRecados = async () => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        recados = await response.json();
        renderizarMural(recados);

    } catch (error) {
        console.error('Ocorreu um erro ao buscar os recados:', error);
        muralContainer.innerHTML = '<p>Não foi possível carregar os recados. Tente novamente mais tarde.</p>';
    }
};

const mostrarModal = () => {
    const corPostItSelecionada = getCorAleatoria();
    const coresDoModal = corModalMap[corPostItSelecionada];
    const modalContent = document.querySelector('.modal-content');
    const modalBotao = document.querySelector('#form-recado button');

    modalContent.style.backgroundColor = coresDoModal.fundo;
    modalBotao.style.backgroundColor = coresDoModal.botao;

    modalAdicionar.classList.remove('modal-oculto');
    document.body.classList.add('desfocado');

    modalContent.classList.remove('modal-abrir');  
    void modalContent.offsetWidth;               
    modalContent.classList.add('modal-abrir'); 
};

const esconderModal = () => {
    modalAdicionar.classList.add('modal-oculto');
    document.body.classList.remove('desfocado');

    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.remove('modal-abrir');

    formRecado.reset();
};

const ordenarAutores = () => {
    isOrdenado = !isOrdenado;
    renderizarMural(recados);
    btnOrdenar.textContent = isOrdenado ? "Desordenar" : "Ordenar Autores";
};

const enviarRecado = async (novoRecado) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoRecado)
        });

        if (!response.ok) {
            throw new Error(`Erro ao enviar o recado: ${response.status}`);
        }

        alert('Recado adicionado com sucesso!');
        esconderModal();
        buscarEExibirRecados();

    } catch (error) {
        console.error('Erro ao enviar o recado:', error);
        alert('Ocorreu um erro ao adicionar o recado. Tente novamente.');
    }
};

btnAdicionar.addEventListener('click', mostrarModal);
fecharModalBtn.addEventListener('click', esconderModal);

modalAdicionar.addEventListener('click', (event) => {
    if (event.target === modalAdicionar) {
        esconderModal();
    }
});

btnOrdenar.addEventListener('click', ordenarAutores);

formRecado.addEventListener('submit', (event) => {
    event.preventDefault();
    const novoRecado = {
        autor: formRecado.autor.value,
        mensagem: formRecado.mensagem.value
    };
    enviarRecado(novoRecado);
});

document.addEventListener('DOMContentLoaded', buscarEExibirRecados);