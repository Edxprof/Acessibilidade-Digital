// Mapeamento de páginas e seus títulos para breadcrumb
const pageMap = {
    'dispositivos-de-acessibilidade.html': 'Dispositivos de Acessibilidade',
    'links-uteis.html': 'Links Úteis',
    'perguntas-frequentes.html': 'Perguntas Frequentes',
    'sobre-nos.html': 'Sobre Nós',
    'solucoes-e-ferramentas.html': 'Soluções e Ferramentas',
    'start.html': 'Jogo da Memória',
    'tipos-de-deficiencia-e-seus-desafios.html': 'Tipos de Deficiência'
};

const breadcrumbHTML = (title) => `
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Página Inicial</a></li>
                <li class="breadcrumb-item active" aria-current="page">${title}</li>
            </ol>
        </nav>
    </div>
`;

console.log('Breadcrumbs para adicionar:');
Object.entries(pageMap).forEach(([file, title]) => {
    console.log(`\n${file}:`);
    console.log(breadcrumbHTML(title));
});