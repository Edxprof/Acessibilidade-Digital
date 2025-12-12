// questions.js

const quizData = {
    'baixa-tecnologia': {
        nome: 'Baixa Tecnologia',
        descricao: 'Tecnologias simples, sustentáveis e de baixo custo',
        perguntas: [
            {
                id: 1,
                texto: 'Qual das seguintes opções é um exemplo de baixa tecnologia?',
                opcoes: [
                    { letra: 'A', texto: 'Smartphone com inteligência artificial' },
                    { letra: 'B', texto: 'Bicicleta tradicional' },
                    { letra: 'C', texto: 'Computador quântico' },
                    { letra: 'D', texto: 'Drone autônomo' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 2,
                texto: 'Qual característica define melhor a baixa tecnologia?',
                opcoes: [
                    { letra: 'A', texto: 'Alta complexidade e dependência de especialistas' },
                    { letra: 'B', texto: 'Simplicidade, sustentabilidade e facilidade de manutenção' },
                    { letra: 'C', texto: 'Uso intensivo de energia e recursos' },
                    { letra: 'D', texto: 'Necessidade de infraestrutura avançada' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 3,
                texto: 'Qual ferramenta representa melhor o conceito de baixa tecnologia?',
                opcoes: [
                    { letra: 'A', texto: 'Martelo de madeira' },
                    { letra: 'B', texto: 'Impressora 3D' },
                    { letra: 'C', texto: 'Robô industrial' },
                    { letra: 'D', texto: 'Sistema de GPS' }
                ],
                resposta_correta: 'A'
            },
            {
                id: 4,
                texto: 'Qual vantagem da baixa tecnologia é mais relevante para comunidades rurais?',
                opcoes: [
                    { letra: 'A', texto: 'Alta velocidade de processamento' },
                    { letra: 'B', texto: 'Conectividade global instantânea' },
                    { letra: 'C', texto: 'Facilidade de reparo com materiais locais' },
                    { letra: 'D', texto: 'Capacidade de armazenamento de dados' }
                ],
                resposta_correta: 'C'
            },
            {
                id: 5,
                texto: 'Qual método de aquecimento de água é considerado baixa tecnologia?',
                opcoes: [
                    { letra: 'A', texto: 'Aquecedor solar com painéis fotovoltaicos' },
                    { letra: 'B', texto: 'Aquecedor elétrico inteligente' },
                    { letra: 'C', texto: 'Fogão a lenha tradicional' },
                    { letra: 'D', texto: 'Bomba de calor geotérmica' }
                ],
                resposta_correta: 'C'
            },
            {
                id: 6,
                texto: 'A prensa de tipos móveis, inventada por Gutenberg, é considerada uma:',
                opcoes: [
                    { letra: 'A', texto: 'Alta tecnologia da era digital' },
                    { letra: 'B', texto: 'Baixa tecnologia que revolucionou a comunicação' },
                    { letra: 'C', texto: 'Tecnologia exclusivamente eletrônica' },
                    { letra: 'D', texto: 'Tecnologia de realidade virtual' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 7,
                texto: 'Um filtro de água de cerâmica que funciona por gravidade é um exemplo de:',
                opcoes: [
                    { letra: 'A', texto: 'Baixa tecnologia para purificação de água' },
                    { letra: 'B', texto: 'Sistema de osmose reversa' },
                    { letra: 'C', texto: 'Alta tecnologia de filtragem molecular' },
                    { letra: 'D', texto: 'Dispositivo conectado à Internet das Coisas (IoT)' }
                ],
                resposta_correta: 'A'
            },
            {
                id: 8,
                texto: 'Qual das seguintes técnicas agrícolas é um exemplo de baixa tecnologia?',
                opcoes: [
                    { letra: 'A', texto: 'Uso de drones para monitorar a lavoura' },
                    { letra: 'B', texto: 'Engenharia genética de sementes' },
                    { letra: 'C', texto: 'Sistema de irrigação por gotejamento' },
                    { letra: 'D', texto: 'Rotação de culturas para manter a saúde do solo' }
                ],
                resposta_correta: 'D'
            }
        ]
    },
    'alta-tecnologia': {
        nome: 'Alta Tecnologia',
        descricao: 'Tecnologias avançadas que envolvem sistemas complexos e inovação',
        perguntas: [
            {
                id: 1,
                texto: 'Qual das seguintes tecnologias é considerada alta tecnologia?',
                opcoes: [
                    { letra: 'A', texto: 'Roda d\'água' },
                    { letra: 'B', texto: 'Inteligência Artificial' },
                    { letra: 'C', texto: 'Arado manual' },
                    { letra: 'D', texto: 'Moinho de vento tradicional' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 2,
                texto: 'Qual característica é típica da alta tecnologia?',
                opcoes: [
                    { letra: 'A', texto: 'Simplicidade de uso e manutenção' },
                    { letra: 'B', texto: 'Baixo custo de produção' },
                    { letra: 'C', texto: 'Complexidade e necessidade de especialização' },
                    { letra: 'D', texto: 'Independência de infraestrutura' }
                ],
                resposta_correta: 'C'
            },
            {
                id: 3,
                texto: 'Qual setor é mais representativo da alta tecnologia?',
                opcoes: [
                    { letra: 'A', texto: 'Agricultura tradicional' },
                    { letra: 'B', texto: 'Artesanato manual' },
                    { letra: 'C', texto: 'Biotecnologia e engenharia genética' },
                    { letra: 'D', texto: 'Construção com materiais naturais' }
                ],
                resposta_correta: 'C'
            },
            {
                id: 4,
                texto: 'Qual é uma desvantagem comum da alta tecnologia?',
                opcoes: [
                    { letra: 'A', texto: 'Baixa eficiência' },
                    { letra: 'B', texto: 'Dependência de infraestrutura complexa' },
                    { letra: 'C', texto: 'Facilidade de reparo' },
                    { letra: 'D', texto: 'Baixo custo de manutenção' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 5,
                texto: 'Qual exemplo melhor representa a convergência de alta tecnologia?',
                opcoes: [
                    { letra: 'A', texto: 'Telefone fixo analógico' },
                    { letra: 'B', texto: 'Smartphone com 5G, IA e realidade aumentada' },
                    { letra: 'C', texto: 'Rádio AM/FM básico' },
                    { letra: 'D', texto: 'Máquina de escrever mecânica' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 6,
                texto: 'O que é a "Internet das Coisas" (IoT)?',
                opcoes: [
                    { letra: 'A', texto: 'Uma rede social para objetos' },
                    { letra: 'B', texto: 'A rede de dispositivos físicos (como eletrodomésticos e veículos) conectados à internet' },
                    { letra: 'C', texto: 'Um novo tipo de cabo de fibra óptica' },
                    { letra: 'D', texto: 'Um sistema operacional para computadores quânticos' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 7,
                texto: 'A tecnologia CRISPR-Cas9 é uma inovação revolucionária em qual campo?',
                opcoes: [
                    { letra: 'A', texto: 'Armazenamento de dados em nuvem' },
                    { letra: 'B', texto: 'Edição de genes' },
                    { letra: 'C', texto: 'Redes de comunicação 5G' },
                    { letra: 'D', texto: 'Impressão 3D de metais' }
                ],
                resposta_correta: 'B'
            },
            {
                id: 8,
                texto: 'Blockchain é a tecnologia fundamental por trás de qual inovação?',
                opcoes: [
                    { letra: 'A', texto: 'Assistentes de voz como a Alexa' },
                    { letra: 'B', texto: 'Carros autônomos' },
                    { letra: 'C', texto: 'Criptomoedas como o Bitcoin' },
                    { letra: 'D', texto: 'Plataformas de streaming de vídeo' }
                ],
                resposta_correta: 'C'
            }
        ]
    }
};