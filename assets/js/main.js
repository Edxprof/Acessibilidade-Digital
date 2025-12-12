// main.js - Lógica do Quiz

// Variáveis globais
let categoriaAtual = null;
let respostasUsuario = {};

// Função para inicializar a página
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();

    // Normalize current page for local file/open and server root
    const normalizedPage = (function() {
        const p = currentPage || '';
        // When served at '/', map to index.html; when file://, we already have the filename
        if (p === '' || p === '/') return 'index.html';
        return p;
    })();

    // Mark the current page link in the header and footer as active: set aria-current and .active
    try {
        const headerLinks = document.querySelectorAll('header .navbar-nav a[href]');
        const footerLinks = document.querySelectorAll('footer .nav a[href]');
        
        // Clear any pre-set active/aria-current to avoid Home always bold
        [...headerLinks, ...footerLinks].forEach((link) => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });

        // Map hrefs to filenames to handle both relative and root hrefs
        [...headerLinks, ...footerLinks].forEach((link) => {
            const href = link.getAttribute('href') || '';
            // Derive filename from href
            const linkFile = (function() {
                if (href === '/' || href === './' || href === '') return 'index.html';
                const parts = href.split('/');
                return parts[parts.length - 1];
            })();

            if (linkFile === normalizedPage) {
                link.setAttribute('aria-current', 'page');
                link.classList.add('active');
            }
        });
    } catch (e) {
        // Fail silently if header/nav not present
    }
    
    if (currentPage === 'quiz.html') {
        inicializarQuiz();
    }
    
    // Adicionar eventos para seleção de categoria
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            selecionarCategoria(this.getAttribute('data-categoria'));
        });
        
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selecionarCategoria(this.getAttribute('data-categoria'));
            }
        });
    });
    
    // Botão voltar para categorias
    const voltarBtn = document.getElementById('voltar-categorias');
    if (voltarBtn) {
        voltarBtn.addEventListener('click', voltarParaCategorias);
    }
    
    // Botão tentar novamente
    const tentarBtn = document.getElementById('tentar-novamente');
    if (tentarBtn) {
        tentarBtn.addEventListener('click', voltarParaCategorias);
    }
    
    // Adicionar efeito de hover para opções de resposta
    document.addEventListener('change', function(e) {
        if (e.target.type === 'radio') {
            const fieldset = e.target.closest('fieldset');
            if (fieldset) {
                const opcoes = fieldset.querySelectorAll('.opcao');
                opcoes.forEach(opcao => {
                    opcao.classList.remove('selecionada');
                });
                
                if (e.target.closest('.opcao')) {
                    e.target.closest('.opcao').classList.add('selecionada');
                }
            }
        }
    });
});

// Função para inicializar o quiz
function inicializarQuiz() {
    // Verificar se há categoria salva
    const categoriaSalva = localStorage.getItem('categoriaEscolhida');
    if (categoriaSalva && quizData && quizData[categoriaSalva]) {
        selecionarCategoria(categoriaSalva);
    }
}

// Função para selecionar categoria
function selecionarCategoria(categoria) {
    localStorage.setItem('categoriaEscolhida', categoria);
    categoriaAtual = categoria;
    
    // Esconder seleção e mostrar quiz
    const selecao = document.querySelector('.quiz-selection');
    const container = document.querySelector('.quiz-container');
    
    if (selecao) selecao.style.display = 'none';
    if (container) container.style.display = 'block';
    
    // Carregar perguntas
    carregarQuiz();
}

// Função para voltar para categorias
function voltarParaCategorias() {
    const selecao = document.querySelector('.quiz-selection');
    const container = document.querySelector('.quiz-container');
    const resultado = document.querySelector('.resultado-container');
    
    if (selecao) selecao.style.display = 'block';
    if (container) container.style.display = 'none';
    if (resultado) resultado.style.display = 'none';
    
    // Limpar localStorage
    localStorage.removeItem('categoriaEscolhida');
    localStorage.removeItem('resultadoQuiz');
    localStorage.removeItem('respostasUsuario');
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para carregar o quiz
function carregarQuiz() {
    if (!categoriaAtual || !quizData || !quizData[categoriaAtual]) {
        voltarParaCategorias();
        return;
    }
    
    const dadosCategoria = quizData[categoriaAtual];
    
    // Atualizar título e descrição
    const titulo = document.getElementById('quiz-titulo');
    const descricao = document.getElementById('quiz-descricao');
    
    if (titulo) titulo.textContent = `Quiz: ${dadosCategoria.nome}`;
    if (descricao) descricao.textContent = dadosCategoria.descricao;
    
    // Gerar perguntas
    gerarPerguntas(dadosCategoria.perguntas);
    
    // Configurar envio do formulário
    const form = document.getElementById('quiz-form');
    if (form) {
        // Remover listeners anteriores
        const newForm = form.cloneNode(true);
        form.parentNode.replaceChild(newForm, form);
        
        newForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processarRespostas();
        });
    }
}

// Função para gerar as perguntas no HTML
function gerarPerguntas(perguntas) {
    const container = document.getElementById('perguntas-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    perguntas.forEach((pergunta, index) => {
        const fieldset = document.createElement('fieldset');
        
        const legend = document.createElement('legend');
        legend.textContent = `${index + 1}. ${pergunta.texto}`;
        fieldset.appendChild(legend);
        
        pergunta.opcoes.forEach(opcao => {
            const div = document.createElement('div');
            div.className = 'opcao';
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `pergunta_${pergunta.id}_${opcao.letra}`;
            input.name = `pergunta_${pergunta.id}`;
            input.value = opcao.letra;
            input.required = true;
            
            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.textContent = `${opcao.letra}) ${opcao.texto}`;
            
            div.addEventListener('click', function() {
                input.checked = true;
                input.dispatchEvent(new Event('change', { bubbles: true }));
            });
            
            div.appendChild(input);
            div.appendChild(label);
            fieldset.appendChild(div);
        });
        
        container.appendChild(fieldset);
    });
}

// Função para processar as respostas
function processarRespostas() {
    const dadosCategoria = quizData[categoriaAtual];
    respostasUsuario = {};
    
    // Coletar respostas
    dadosCategoria.perguntas.forEach(pergunta => {
        const resposta = document.querySelector(`input[name="pergunta_${pergunta.id}"]:checked`);
        if (resposta) {
            respostasUsuario[pergunta.id] = resposta.value;
        }
    });
    
    // Verificar se todas as perguntas foram respondidas
    if (Object.keys(respostasUsuario).length !== dadosCategoria.perguntas.length) {
        alert('Por favor, responda todas as perguntas antes de enviar.');
        return;
    }
    
    // Calcular resultado
    const resultado = calcularResultado(dadosCategoria.perguntas, respostasUsuario);
    
    // Salvar resultado no localStorage
    localStorage.setItem('resultadoQuiz', JSON.stringify(resultado));
    localStorage.setItem('respostasUsuario', JSON.stringify(respostasUsuario));
    
    // Mostrar resultado na mesma página
    mostrarResultado(resultado);
}

// Função para calcular o resultado
function calcularResultado(perguntas, respostas) {
    let acertos = 0;
    const detalhes = [];
    
    perguntas.forEach(pergunta => {
        const respostaUsuario = respostas[pergunta.id];
        const acertou = respostaUsuario === pergunta.resposta_correta;
        
        if (acertou) {
            acertos++;
        }
        
        // Encontrar texto da resposta do usuário
        const opcaoUsuario = pergunta.opcoes.find(op => op.letra === respostaUsuario);
        const opcaoCorreta = pergunta.opcoes.find(op => op.letra === pergunta.resposta_correta);
        
        detalhes.push({
            pergunta: pergunta.texto,
            resposta_usuario: opcaoUsuario ? `${opcaoUsuario.letra}) ${opcaoUsuario.texto}` : 'Não respondida',
            resposta_correta: `${opcaoCorreta.letra}) ${opcaoCorreta.texto}`,
            acertou: acertou
        });
    });
    
    const total = perguntas.length;
    const porcentagem = Math.round((acertos / total) * 100);
    
    return {
        acertos: acertos,
        total: total,
        porcentagem: porcentagem,
        detalhes: detalhes
    };
}

// Função para mostrar resultado
function mostrarResultado(resultado) {
    const quizContainer = document.querySelector('.quiz-container');
    const resultadoContainer = document.querySelector('.resultado-container');
    
    if (quizContainer) quizContainer.style.display = 'none';
    if (resultadoContainer) resultadoContainer.style.display = 'block';
    
    const dadosCategoria = quizData[categoriaAtual];
    
    // Atualizar título
    const titulo = document.getElementById('resultado-titulo');
    if (titulo) titulo.textContent = `Resultado: ${dadosCategoria.nome}`;
    
    // Exibir pontuação
    const acertosEl = document.getElementById('acertos');
    const totalEl = document.getElementById('total');
    const porcentagemEl = document.getElementById('porcentagem');
    
    if (acertosEl) acertosEl.textContent = resultado.acertos;
    if (totalEl) totalEl.textContent = resultado.total;
    if (porcentagemEl) porcentagemEl.textContent = `${resultado.porcentagem}% de acerto`;
    
    // Aplicar cor baseada na porcentagem
    if (porcentagemEl) {
        if (resultado.porcentagem >= 80) {
            porcentagemEl.style.background = 'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)';
        } else if (resultado.porcentagem >= 50) {
            porcentagemEl.style.background = 'linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)';
        } else {
            porcentagemEl.style.background = 'linear-gradient(135deg, #C62828 0%, #EF5350 100%)';
        }
    }
    
    // Exibir detalhes
    exibirDetalhes(resultado.detalhes);
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para exibir detalhes das respostas
function exibirDetalhes(detalhes) {
    const container = document.getElementById('detalhes-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    detalhes.forEach(detalhe => {
        const div = document.createElement('div');
        div.className = `pergunta ${detalhe.acertou ? 'acerto' : 'erro'}`;
        
        const perguntaP = document.createElement('p');
        perguntaP.innerHTML = `<strong>Pergunta:</strong> ${detalhe.pergunta}`;
        
        const respostaP = document.createElement('p');
        respostaP.innerHTML = `<strong>Sua resposta:</strong> ${detalhe.resposta_usuario}`;
        
        div.appendChild(perguntaP);
        div.appendChild(respostaP);
        
        if (!detalhe.acertou) {
            const corretaP = document.createElement('p');
            corretaP.innerHTML = `<strong>Resposta correta:</strong> ${detalhe.resposta_correta}`;
            div.appendChild(corretaP);
        }
        
        container.appendChild(div);
    });
}
