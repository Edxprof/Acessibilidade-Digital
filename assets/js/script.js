// questions.js

const quizData = {
    'baixa-tecnologia': {
        nome: 'Baixa Tecnologia Assistiva',
        descricao: 'Recursos simples, de baixo custo e fácil confecção para promover acessibilidade.',
        perguntas: [
            {
                id: 1,
                texto: 'O que caracteriza a Baixa Tecnologia Assistiva?',
                opcoes: [
                    { letra: 'A', texto: 'Uso de sistemas eletrônicos complexos' },
                    { letra: 'B', texto: 'Recursos simples, de baixo custo e fácil obtenção' },
                    { letra: 'C', texto: 'Necessidade de programação de software' },
                    { letra: 'D', texto: 'Equipamentos dependentes de energia elétrica' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 2,
                texto: 'Qual destes é um exemplo clássico de recurso de baixa tecnologia para deficiência física?',
                opcoes: [
                    { letra: 'A', texto: 'Cadeira de rodas motorizada com IA' },
                    { letra: 'B', texto: 'Engrossador de lápis ou talheres feito de EVA' },
                    { letra: 'C', texto: 'Mouse ocular' },
                    { letra: 'D', texto: 'Software de voz' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 3,
                texto: 'Para um aluno com baixa visão, qual recurso de baixa tecnologia é adequado?',
                opcoes: [
                    { letra: 'A', texto: 'Ampliação de fontes (Macrotipos) e alto contraste' },
                    { letra: 'B', texto: 'Leitor de tela NVDA' },
                    { letra: 'C', texto: 'Implante coclear' },
                    { letra: 'D', texto: 'Tablet braille' }
                ],
                resposta_correta: 'A'
            },
            {
                id: 4,
                texto: 'A Comunicação Suplementar e Alternativa (CSA) de baixa tecnologia pode utilizar:',
                opcoes: [
                    { letra: 'A', texto: 'Tablets com sintetizadores de voz' },
                    { letra: 'B', texto: 'Pranchas de comunicação com figuras impressas' },
                    { letra: 'C', texto: 'Aplicativos de celular' },
                    { letra: 'D', texto: 'Rastreadores oculares digitais' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 5,
                texto: 'O plano inclinado sobre a mesa escolar serve para:',
                opcoes: [
                    { letra: 'A', texto: 'Carregar dispositivos eletrônicos' },
                    { letra: 'B', texto: 'Facilitar a leitura e escrita, melhorando a postura visual e motora' },
                    { letra: 'C', texto: 'Isolar o aluno dos demais' },
                    { letra: 'D', texto: 'Substituir o uso do caderno' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 6,
                texto: 'A reglete e o punção são instrumentos utilizados para:',
                opcoes: [
                    { letra: 'A', texto: 'Escrita manual no Sistema Braille' },
                    { letra: 'B', texto: 'Tradução de LIBRAS' },
                    { letra: 'C', texto: 'Ampliação de som' },
                    { letra: 'D', texto: 'Digitalização de textos' }
                ],
                resposta_correta: 'A'
            },
            {
                id: 7,
                texto: 'Qual é a principal vantagem da baixa tecnologia em contextos escolares?',
                opcoes: [
                    { letra: 'A', texto: 'Permite conexão com a internet' },
                    { letra: 'B', texto: 'Disponibilidade imediata e facilidade de reposição' },
                    { letra: 'C', texto: 'Realiza cálculos complexos' },
                    { letra: 'D', texto: 'Substitui o professor de apoio' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 8,
                texto: 'Um tapete antiderrapante colocado sob o prato de comida é um recurso para:',
                opcoes: [
                    { letra: 'A', texto: 'Manter a comida quente' },
                    { letra: 'B', texto: 'Estabilizar o objeto para pessoas com descoordenação motora' },
                    { letra: 'C', texto: 'Decorar o ambiente' },
                    { letra: 'D', texto: 'Pesar o alimento' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 9,
                texto: 'O Soroban é uma ferramenta de baixa tecnologia essencial para:',
                opcoes: [
                    { letra: 'A', texto: 'Pessoas com deficiência auditiva ouvirem música' },
                    { letra: 'B', texto: 'Pessoas cegas realizarem cálculos matemáticos' },
                    { letra: 'C', texto: 'Pessoas com deficiência física desenharem' },
                    { letra: 'D', texto: 'Pessoas mudas falarem' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 10,
                texto: 'Órteses simples feitas de termoplástico ou velcro são consideradas:',
                opcoes: [
                    { letra: 'A', texto: 'Alta tecnologia médica' },
                    { letra: 'B', texto: 'Baixa tecnologia assistiva' },
                    { letra: 'C', texto: 'Recursos de realidade virtual' },
                    { letra: 'D', texto: 'Equipamentos de robótica' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 11,
                texto: 'Para facilitar virar páginas de um livro, uma adaptação simples é:',
                opcoes: [
                    { letra: 'A', texto: 'Digitalizar o livro em PDF' },
                    { letra: 'B', texto: 'Colocar clips, espessadores ou abas nas folhas' },
                    { letra: 'C', texto: 'Usar um virador de páginas elétrico' },
                    { letra: 'D', texto: 'Comprar um Kindle' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 12,
                texto: 'O uso de pulseiras lastradas (com peso) pode auxiliar:',
                opcoes: [
                    { letra: 'A', texto: 'Na redução de tremores durante a escrita' },
                    { letra: 'B', texto: 'Na audição de sons agudos' },
                    { letra: 'C', texto: 'Na visualização de cores' },
                    { letra: 'D', texto: 'Na memorização de textos' }
                ],
                resposta_correta: 'A'
            },
            {
                id: 13,
                texto: 'Adaptações arquitetônicas como rampas e corrimãos são:',
                opcoes: [
                    { letra: 'A', texto: 'Barreiras atitudinais' },
                    { letra: 'B', texto: 'Recursos de acessibilidade física (estruturais)' },
                    { letra: 'C', texto: 'Alta tecnologia digital' },
                    { letra: 'D', texto: 'Desnecessárias segundo a LBI' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 14,
                texto: 'Qual recurso auxilia na organização da rotina de autistas (TEA)?',
                opcoes: [
                    { letra: 'A', texto: 'Quadros de rotina visual com velcro ou imã' },
                    { letra: 'B', texto: 'Óculos de realidade aumentada' },
                    { letra: 'C', texto: 'Implante cerebral' },
                    { letra: 'D', texto: 'Cadeira de rodas' }
                ],
                resposta_correta: 'A'
            },
            {
                id: 15,
                texto: 'O que é uma "colmeia" em teclados (adaptação física acrílica)?',
                opcoes: [
                    { letra: 'A', texto: 'Um software antivírus' },
                    { letra: 'B', texto: 'Uma placa com furos que evita digitação de teclas indesejadas' },
                    { letra: 'C', texto: 'Um tipo de mouse sem fio' },
                    { letra: 'D', texto: 'Um monitor de alto contraste' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 16,
                texto: 'Mapas táteis para orientação em prédios são exemplos de:',
                opcoes: [
                    { letra: 'A', texto: 'Acessibilidade espacial e comunicacional (Baixa Tech)' },
                    { letra: 'B', texto: 'GPS via satélite' },
                    { letra: 'C', texto: 'Aplicativos de navegação' },
                    { letra: 'D', texto: 'Sensores de presença' }
                ],
                resposta_correta: 'A'
            },
            {
                id: 17,
                texto: 'A "janela de leitura" (fenda em papel cartão) ajuda a:',
                opcoes: [
                    { letra: 'A', texto: 'Aumentar o volume da leitura' },
                    { letra: 'B', texto: 'Isolar a linha sendo lida, melhorando o foco' },
                    { letra: 'C', texto: 'Traduzir o texto para inglês' },
                    { letra: 'D', texto: 'Iluminar o texto no escuro' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 18,
                texto: 'O desenho universal na aprendizagem visa:',
                opcoes: [
                    { letra: 'A', texto: 'Criar produtos específicos apenas para deficientes' },
                    { letra: 'B', texto: 'Projetar ambientes e materiais utilizáveis por todos, sem necessidade de adaptação' },
                    { letra: 'C', texto: 'Focar apenas em alta tecnologia' },
                    { letra: 'D', texto: 'Segregar alunos com dificuldades' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 19,
                texto: 'Cadarços elásticos ou com fecho prático promovem:',
                opcoes: [
                    { letra: 'A', texto: 'Dependência de cuidadores' },
                    { letra: 'B', texto: 'Autonomia no vestir-se (AVD)' },
                    { letra: 'C', texto: 'Melhora na audição' },
                    { letra: 'D', texto: 'Acesso à internet' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 20,
                texto: 'Papéis com pauta ampliada e reforçada servem para:',
                opcoes: [
                    { letra: 'A', texto: 'Alunos com baixa visão ou disgrafia organizarem a escrita' },
                    { letra: 'B', texto: 'Economizar tinta de caneta' },
                    { letra: 'C', texto: 'Imprimir em 3D' },
                    { letra: 'D', texto: 'Alunos cegos que usam Braille' }
                ],
                resposta_correta: 'A'
            }
        ]
    },
    'alta-tecnologia': {
        nome: 'Alta Tecnologia Assistiva',
        descricao: 'Recursos avançados, eletrônicos e digitais para acessibilidade e inclusão.',
        perguntas: [
            {
                id: 1,
                texto: 'O que caracteriza a Alta Tecnologia Assistiva?',
                opcoes: [
                    { letra: 'A', texto: 'Materiais feitos de madeira e papel' },
                    { letra: 'B', texto: 'Recursos eletrônicos, digitais e softwares complexos' },
                    { letra: 'C', texto: 'Adaptações de baixo custo feitas à mão' },
                    { letra: 'D', texto: 'Apenas equipamentos hospitalares' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 2,
                texto: 'O que é um Leitor de Tela (ex: NVDA, JAWS)?',
                opcoes: [
                    { letra: 'A', texto: 'Um pano para limpar o monitor' },
                    { letra: 'B', texto: 'Software que transforma texto e elementos da tela em áudio sintetizado' },
                    { letra: 'C', texto: 'Um óculos que lê livros' },
                    { letra: 'D', texto: 'Um ampliador de imagens' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 3,
                texto: 'O sistema FM na escola é crucial para:',
                opcoes: [
                    { letra: 'A', texto: 'Transmitir rádio estudantil' },
                    { letra: 'B', texto: 'Melhorar a relação sinal/ruído para alunos com deficiência auditiva' },
                    { letra: 'C', texto: 'Gravar as aulas em vídeo' },
                    { letra: 'D', texto: 'Traduzir textos automaticamente' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 4,
                texto: 'O rastreamento ocular (Eye Tracking) permite que:',
                opcoes: [
                    { letra: 'A', texto: 'Pessoas sem movimento nos membros controlem o computador com os olhos' },
                    { letra: 'B', texto: 'Cegos enxerguem a tela' },
                    { letra: 'C', texto: 'O computador ligue sozinho' },
                    { letra: 'D', texto: 'Seja feito exame de vista online' }
                ],
                resposta_correta: 'A'
            },
            {
                id: 5,
                texto: 'A Linha Braille (Display Braille) é um dispositivo que:',
                opcoes: [
                    { letra: 'A', texto: 'Imprime folhas em Braille' },
                    { letra: 'B', texto: 'Exibe dinamicamente em celas táteis o conteúdo da tela do computador' },
                    { letra: 'C', texto: 'Lê em voz alta o texto' },
                    { letra: 'D', texto: 'Corrige a ortografia do aluno' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 6,
                texto: 'Softwares OCR (Reconhecimento Óptico de Caracteres) servem para:',
                opcoes: [
                    { letra: 'A', texto: 'Converter imagens de texto (scaneadas) em texto editável e acessível' },
                    { letra: 'B', texto: 'Melhorar a resolução de vídeos' },
                    { letra: 'C', texto: 'Criar desenhos 3D' },
                    { letra: 'D', texto: 'Bloquear sites perigosos' }
                ],
                resposta_correta: 'A'
            },
            {
                id: 7,
                texto: 'Teclados virtuais com varredura são indicados para:',
                opcoes: [
                    { letra: 'A', texto: 'Pessoas que digitam muito rápido' },
                    { letra: 'B', texto: 'Pessoas com mobilidade reduzida que usam acionadores' },
                    { letra: 'C', texto: 'Programadores de software' },
                    { letra: 'D', texto: 'Gamers profissionais' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 8,
                texto: 'O que é um acionador (switch) na informática acessível?',
                opcoes: [
                    { letra: 'A', texto: 'Um botão para ligar o PC' },
                    { letra: 'B', texto: 'Dispositivo que substitui o clique do mouse/teclado, ativado por qualquer movimento voluntário' },
                    { letra: 'C', texto: 'Uma chave de fenda elétrica' },
                    { letra: 'D', texto: 'Um software de jogos' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 9,
                texto: 'A Audiodescrição é um recurso de acessibilidade que:',
                opcoes: [
                    { letra: 'A', texto: 'Coloca legendas em filmes' },
                    { letra: 'B', texto: 'Descreve verbalmente imagens, cenas e expressões para pessoas cegas' },
                    { letra: 'C', texto: 'Traduz o áudio para LIBRAS' },
                    { letra: 'D', texto: 'Aumenta o volume do vídeo' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 10,
                texto: 'Mouses adaptados do tipo "Trackball" facilitam o uso pois:',
                opcoes: [
                    { letra: 'A', texto: 'Não exigem arrastar o mouse sobre a mesa, apenas girar a esfera' },
                    { letra: 'B', texto: 'São invisíveis' },
                    { letra: 'C', texto: 'Funcionam com comando de voz' },
                    { letra: 'D', texto: 'São feitos de papelão' }
                ],
                resposta_correta: 'A'
            },
            {
                id: 11,
                texto: 'Softwares de predição de palavras auxiliam:',
                opcoes: [
                    { letra: 'A', texto: 'Adivinhando o futuro' },
                    { letra: 'B', texto: 'Reduzindo o esforço de digitação e apoiando a ortografia' },
                    { letra: 'C', texto: 'Traduzindo idiomas automaticamente' },
                    { letra: 'D', texto: 'Formatando o computador' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 12,
                texto: 'O formato digital EPUB 3 é preferível ao PDF para acessibilidade pois:',
                opcoes: [
                    { letra: 'A', texto: 'É mais colorido' },
                    { letra: 'B', texto: 'Permite refluir o texto, mudar fontes e interagir melhor com leitores de tela' },
                    { letra: 'C', texto: 'Não pode ser copiado' },
                    { letra: 'D', texto: 'Só funciona na Apple' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 13,
                texto: 'A Tecnologia Assistiva em LIBRAS (como o Hand Talk) utiliza:',
                opcoes: [
                    { letra: 'A', texto: 'Avatares virtuais 3D para traduzir texto/áudio para Língua de Sinais' },
                    { letra: 'B', texto: 'Intérpretes humanos via webcam apenas' },
                    { letra: 'C', texto: 'Legendas automáticas em português' },
                    { letra: 'D', texto: 'Braille na tela' }
                ],
                resposta_correta: 'A'
            },
            {
                id: 14,
                texto: 'Impressoras 3D na educação inclusiva permitem:',
                opcoes: [
                    { letra: 'A', texto: 'Imprimir provas em papel' },
                    { letra: 'B', texto: 'Materializar objetos táteis pedagógicos para alunos cegos' },
                    { letra: 'C', texto: 'Imprimir fotos coloridas' },
                    { letra: 'D', texto: 'Substituir a internet' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 15,
                texto: 'O que garante a acessibilidade na Web (WCAG)?',
                opcoes: [
                    { letra: 'A', texto: 'Uso de cores neon' },
                    { letra: 'B', texto: 'Conjunto de diretrizes (como texto alternativo em imagens) para tornar sites acessíveis' },
                    { letra: 'C', texto: 'Ter um site muito rápido' },
                    { letra: 'D', texto: 'Usar apenas vídeos sem som' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 16,
                texto: 'Lupas eletrônicas ou vídeo-ampliadores oferecem:',
                opcoes: [
                    { letra: 'A', texto: 'Menos contraste que lupas manuais' },
                    { letra: 'B', texto: 'Alto contraste, inversão de cores e grande ampliação para baixa visão' },
                    { letra: 'C', texto: 'Apenas luz ambiente' },
                    { letra: 'D', texto: 'Impressão de documentos' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 17,
                texto: 'Softwares de Comunicação Alternativa (ex: Livox) em tablets:',
                opcoes: [
                    { letra: 'A', texto: 'São apenas jogos' },
                    { letra: 'B', texto: 'Permitem que pessoas não verbais se comuniquem tocando em símbolos' },
                    { letra: 'C', texto: 'Substituem a terapia fonoaudiológica' },
                    { letra: 'D', texto: 'Servem para assistir YouTube' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 18,
                texto: 'O controle por voz (Ditado) permite:',
                opcoes: [
                    { letra: 'A', texto: 'Que o computador fale com o usuário' },
                    { letra: 'B', texto: 'Que o usuário escreva textos e comande o PC usando a fala' },
                    { letra: 'C', texto: 'Melhorar a qualidade do microfone' },
                    { letra: 'D', texto: 'Ouvir música' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 19,
                texto: 'Óculos inteligentes com IA para cegos (ex: OrCam) podem:',
                opcoes: [
                    { letra: 'A', texto: 'Curar a cegueira' },
                    { letra: 'B', texto: 'Ler textos instantaneamente, reconhecer rostos e produtos' },
                    { letra: 'C', texto: 'Servir apenas como óculos escuros' },
                    { letra: 'D', texto: 'Gravar filmes de cinema' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 20,
                texto: 'A automação residencial (Smart Home) favorece a acessibilidade ao:',
                opcoes: [
                    { letra: 'A', texto: 'Aumentar a conta de luz' },
                    { letra: 'B', texto: 'Permitir controle de luzes e portas por voz ou app para quem tem mobilidade reduzida' },
                    { letra: 'C', texto: 'Ser uma tecnologia apenas de luxo' },
                    { letra: 'D', texto: 'Eliminar a necessidade de internet' }
                ],
                resposta_correta: 'B'
            }
        ]
    }
};