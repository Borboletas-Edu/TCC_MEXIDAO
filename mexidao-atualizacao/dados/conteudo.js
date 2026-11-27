// TODOS OS TEXTOS E DADOS DE EXEMPLO DO APP (copiados do Figma, seção "Cópia · B · Telas").
// Para mudar um texto, mude aqui. As telas não têm texto fixo.

export const app = { nome: 'Mexidão', splashNome: 'Mexidão', carregando: 'Carregando...' };

export const login = {
  inicial: { titulo: 'Boas-vindas!', temConta: 'Já possui uma conta?', entrar: 'Entrar', naoTemConta: 'Ainda não tem uma conta?', criar: 'Criar conta' },
  cadastro: {
    titulo: 'Crie sua conta', subtitulo: 'Defina os dados que você usará para entrar.',
    email: 'E-mail', emailPh: 'voce@exemplo.com', senha: 'Senha', senhaPh: 'Crie uma senha', senhaAjuda: 'Use pelo menos 8 caracteres.',
    confirmar: 'Confirmar senha', confirmarPh: 'Repita sua senha', mostrar: 'Mostrar', ocultar: 'Ocultar',
    nota: 'Você poderá preencher seus dados e preferências na próxima etapa.', botao: 'Criar conta', jaTenho: 'Já tenho conta. Entrar',
  },
  entrar: {
    titulo: 'Entre na sua conta', subtitulo: 'Use seu e-mail e sua senha para continuar.', email: 'E-mail', emailPh: 'voce@exemplo.com',
    senha: 'Senha', senhaPh: 'Digite sua senha', esqueci: 'Esqueci minha senha', botao: 'Entrar', naoTem: 'Ainda não tem uma conta?', criar: 'Criar conta',
  },
  recuperar: { titulo: 'Esqueceu sua senha?', subtitulo: 'Informe o e-mail da sua conta. Enviaremos as instruções para recuperar o acesso.', rotulo: 'E-mail cadastrado', ph: 'voce@exemplo.com', botao: 'Enviar instruções', voltar: 'Voltar ao login' },
  instrucoes: {
    titulo: 'Confira seu e-mail', subtitulo: 'Se este e-mail estiver cadastrado, você receberá as instruções para redefinir sua senha.',
    emailExemplo: 'voce@exemplo.com', texto: 'Siga as instruções recebidas e depois volte ao login. Confira também a pasta de spam.',
    reenviar: 'Reenviar instruções', reenviado: 'Instruções reenviadas', alterar: 'Alterar e-mail', voltar: 'Voltar ao login',
  },
};

export const onboarding = {
  intro: {
    titulo: 'Boas-vindas!', subtitulo: 'Vamos preparar seu acesso em poucos passos.', botao: 'Continuar',
    passos: [
      { n: 1, titulo: 'Seus dados', texto: 'Informe como deseja ser chamado.' },
      { n: 2, titulo: 'Suas preferências', texto: 'Escolha as configurações iniciais' },
      { n: 3, titulo: 'Suas conexões', texto: 'Conecte-se a uma rede social' },
    ],
  },
  sobre: { etapa: 'CONFIGURAÇÃO · 1 DE 3', titulo: 'Sobre você', subtitulo: 'Nos deixe conhecer você!', nome: 'Como quer ser chamado?', nomePh: 'Seu nome', idade: 'Qual sua idade?', idadePh: 'Sua idade', botao: 'Salvar e continuar' },
  dados: {
    etapa: 'CONFIGURAÇÃO · 2 DE 3', titulo: 'Prazer, {nome}!', tituloSemNome: 'Prazer!', subtitulo: 'Diga mais sobre sua experiência!',
    nivelRotulo: 'Qual seu nível na cozinha atualmente?', nivelPadrao: 'Básico',
    restricaoRotulo: 'Tem alguma restrição alimentar?',
    restricoesRapidas: ['Ovos', 'Soja', 'Peixes', 'Lactose', 'Amendoim', 'Outros'],
    nota: 'Isso vale para preferências pessoais, alergias\ne outras demais condições alimentares.',
    nota2: 'Você pode alterá-las mais tarde',
    botao: 'Salvar e continuar',
    painelNivel: { titulo: 'Qual seu nível na cozinha?', opcoes: ['Iniciante', 'Básico', 'Intermediário', 'Experiente'], botao: 'Confirmar' },
    painelRestricoes: {
      busca: 'Pesquise aqui', botao: 'Salvar',
      todas: ['Lactose', 'Glúten', 'Ovos', 'Soja', 'Peixes', 'Amendoim', 'Leguminosas', 'Trigo', 'Frutos do mar', 'Castanhas', 'Carne vermelha', 'Carne suína'],
    },
  },
  redes: {
    etapa: 'CONFIGURAÇÃO · 3 DE 3', titulo: 'Quer conectar uma rede social?', subtitulo: 'Sabe suas receitas salvas? Vamos te lembrar delas. Esta etapa é opcional.',
    opcoes: ['TikTok', 'Instagram', 'Pinterest', 'Youtube', 'Whatsapp'], selecionadaExemplo: 'Instagram',
    nota: 'Você revisará as permissões antes de autorizar.\nSeus dados pessoais não são informados ao app.',
    botao: 'Conectar rede selecionada', pular: 'Agora não. Pular esta etapa',
  },
  autorizar: {
    vetor: 'vetor aqui', faixa: '{rede} · autorização externa', titulo: 'Permitir conexão?', texto: 'Mexidão está solicitando acesso à conta da rede selecionada.',
    cartaoTitulo: 'Revisar permissões', cartaoTexto: 'As permissões solicitadas serão exibidas pelo serviço escolhido antes da confirmação.',
    autorizar: 'Autorizar conexão', naoAutorizar: 'Não autorizar', cancelar: 'Cancelar e voltar',
  },
  conectado: { vetor: 'vetor aqui', titulo: 'Tudo conectado!', texto: 'A autorização foi concluída. Agora suas receitas salvas são recomendas com base nos seus gostos!', cartaoTitulo: '{rede} conectado', cartaoTexto: 'Sua conta foi conectada ao {rede} com sucesso.', botao: 'Continuar para o início' },
};

// Receitas de exemplo. Os atributos alimentam a busca e os filtros.
export const receitas = [
  // Resultados da busca com batata e cenoura (Figma 872:5299) · corTempo segue a tag do Figma
  { id: 'croquetes', nome: 'Croquetes de batata e cenoura', midia: 'croquetes', tempo: '40–50 min', corTempo: 'medio', faixaTempo: '30 min a 1 h', custo: '$', categorias: ['Em dupla', 'Cozido e frito'], tipos: [], ingredientes: ['Batata', 'Cenoura', 'Ovo'], preparo: ['Cozido', 'Frito'], sabor: ['Salgado'] },
  { id: 'panquecas-salgadas', nome: 'Panquecas salgadas de batata e cenoura', midia: 'panquecasSalgadas', tempo: '40–50 min', corTempo: 'medio', faixaTempo: '30 min a 1 h', custo: '$$', categorias: ['Em dupla', 'Frito'], tipos: [], ingredientes: ['Batata', 'Cenoura', 'Leite', 'Ovo'], preparo: ['Frito'], sabor: ['Salgado'] },
  { id: 'fritadinhos', nome: 'Fritadinhos de batata e cenoura', midia: 'fritadinhos', tempo: '30–40 min', corTempo: 'medio', faixaTempo: '30 min a 1 h', custo: '$', categorias: ['Em dupla', 'Frito'], tipos: [], ingredientes: ['Batata', 'Cenoura'], preparo: ['Frito'], sabor: ['Salgado'] },
  { id: 'ensopado', nome: 'Ensopado de legumes com batata e cenoura', midia: 'ensopado', tempo: '1h–1h30', corTempo: 'longo', faixaTempo: '1 a 2 h', custo: '$$', categorias: ['Em dupla', 'Cozido'], tipos: [], ingredientes: ['Batata', 'Cenoura', 'Cebola'], preparo: ['Cozido'], sabor: ['Salgado'] },
  { id: 'nhoque-cenoura', nome: 'Nhoque de batata com molho de cenoura', midia: 'nhoqueCenoura', tempo: '1h20–2h', corTempo: 'longo', faixaTempo: '1 a 2 h', custo: '$$', categorias: ['Em dupla', 'Cozido'], tipos: [], ingredientes: ['Batata', 'Cenoura', 'Farinha'], preparo: ['Cozido'], sabor: ['Salgado'] },
  { id: 'arroz', nome: 'Arroz de forno com legumes', midia: 'arrozDeForno', tempo: '20 min', faixaTempo: '10 a 20 min', custo: '$', categorias: ['Acessível'], tipos: [], ingredientes: ['Arroz', 'Cenoura', 'Abobrinha', 'Tomate', 'Queijo', 'Milho'], preparo: ['Assado'], sabor: ['Salgado'] },
  { id: 'escondidinho', nome: 'Escondidinho de carne seca de frigideira', midia: 'escondidinho', tempo: '20 min', faixaTempo: '10 a 20 min', custo: '$$', categorias: ['Acessível'], tipos: [], ingredientes: ['Mandioca', 'Carne bovina', 'Queijo', 'Cebola'], preparo: ['Frito'], sabor: ['Salgado', 'Umami'] },
  { id: 'creme', nome: 'Creme de abóbora', midia: 'cremeAbobora', tempo: '50 min', faixaTempo: '30 min a 1 h', custo: '$', categorias: ['Em dupla'], tipos: ['Vegano', 'Vegetariano'], ingredientes: ['Cebola', 'Alho', 'Cenoura'], preparo: ['Cozido'], sabor: ['Salgado'] },
  { id: 'torta', nome: 'Torta salgada', midia: 'tortaSalgada', tempo: '35 min', faixaTempo: '30 min a 1 h', custo: '$$', categorias: ['Em família'], tipos: ['Vegetariano'], ingredientes: ['Ovo', 'Leite', 'Milho', 'Queijo', 'Tomate'], preparo: ['Assado'], sabor: ['Salgado'] },
  { id: 'pimentoes', nome: 'Pimentões recheados', midia: 'pimentoes', tempo: '20 min', faixaTempo: '10 a 20 min', custo: '$', categorias: ['Acessível'], tipos: [], ingredientes: ['Carne bovina', 'Arroz', 'Tomate', 'Cebola'], preparo: ['Assado'], sabor: ['Salgado', 'Picante'] },
  { id: 'arroz-jogos', nome: 'Arroz de forno com legumes', midia: 'arrozDeForno', tempo: '35 min', faixaTempo: '30 min a 1 h', custo: '$$$', categorias: ['Noite de jogos'], tipos: ['Vegetariano'], ingredientes: ['Arroz', 'Milho', 'Queijo'], preparo: ['Assado'], sabor: ['Salgado'] },
  // Receitas recomendadas novas (Figma 872:6231)
  { id: 'marido', nome: 'Marido gelado', midia: 'maridoGelado', tempo: '20 min', faixaTempo: '10 a 20 min', custo: '$$', categorias: ['Acessível'], tipos: [], ingredientes: ['Leite', 'Chocolate', 'Limão'], preparo: ['Gelado'], sabor: ['Doce'] },
  { id: 'nhoque', nome: 'Nhoque de batata', midia: 'nhoque', tempo: '40 min', faixaTempo: '30 min a 1 h', custo: '$$', categorias: ['Em família'], tipos: [], ingredientes: ['Batata', 'Farinha', 'Carne bovina', 'Tomate', 'Queijo'], preparo: ['Cozido'], sabor: ['Salgado'] },
  { id: 'pudim', nome: 'Pudim', midia: 'pudim', tempo: '50 min', faixaTempo: '30 min a 1 h', custo: '$', categorias: ['Em família'], tipos: ['Vegetariano'], ingredientes: ['Ovo', 'Leite', 'Açúcar'], preparo: ['Assado'], sabor: ['Doce'] },
  { id: 'empadinha', nome: 'Empadinha de palmito', midia: 'empadinha', tempo: '35 min', faixaTempo: '30 min a 1 h', custo: '$$', categorias: ['Noite de jogos'], tipos: ['Vegetariano'], ingredientes: ['Farinha', 'Palmito', 'Ovo'], preparo: ['Assado'], sabor: ['Salgado'] },
  { id: 'panqueca', nome: 'Panqueca de carne', midia: 'panqueca', tempo: '15 min', faixaTempo: '10 a 20 min', custo: '$', categorias: ['Acessível'], tipos: [], ingredientes: ['Farinha', 'Ovo', 'Leite', 'Carne bovina', 'Tomate', 'Queijo'], preparo: ['Frito'], sabor: ['Salgado'] },
];
export const home = {
  titulo: 'Início', subtitulo: 'O que vamos cozinhar hoje?', busca: 'Busque por receitas', buscarTitulo: 'Buscar receitas', banner: 'Comece por aqui', bannerTitulo: 'Sua Trilha',
  recomendadas: 'Receitas recomendadas', verMais: 'Ver mais',
  listaHome: ['arroz', 'marido', 'creme'], // Figma 872:5262
  listaRecomendadas: ['marido', 'creme', 'nhoque', 'pudim', 'empadinha', 'panqueca'], // Figma 872:6231
  sugestoesBusca: ['Fricassê de Frango', 'Baião de Dois', 'Picadinho', 'Bolo de Milho', 'Bolo'],
  semResultado: 'Nenhuma receita encontrada',
  semResultadoTexto: 'Tente outros filtros ou limpe a seleção.',
};
export const filtros = {
  abas: [
    { id: 'tipos', nome: 'Tipo', opcoes: ['Vegano', 'Vegetariano'], figma: '872:5942' },
    { id: 'ingredientes', nome: 'Ingredientes', opcoes: ['Abobrinha', 'Alho', 'Arroz', 'Batata', 'Brócolis', 'Camarão', 'Carne bovina', 'Carne suína', 'Cebola', 'Cenoura', 'Feijão', 'Frango', 'Leite', 'Macarrão', 'Mandioca', 'Milho', 'Ovo', 'Peixe', 'Queijo', 'Tomate'], figma: '872:5356' },
    { id: 'preparo', nome: 'Preparo', opcoes: ['Assado', 'Cozido', 'Defumado', 'Frito', 'Outros'], figma: '872:5393' },
    { id: 'categorias', nome: 'Categoria', opcoes: ['Acessível', 'Em dupla', 'Em família', 'Noite de jogos'], figma: '872:5961' },
    { id: 'sabor', nome: 'Sabor', opcoes: ['Agridoce', 'Amargo', 'Azedo', 'Cítrico', 'Doce', 'Picante', 'Salgado', 'Umami'], figma: '872:5438' },
    { id: 'faixaTempo', nome: 'Tempo', opcoes: ['Até 10 min', '10 a 20 min', '20 a 30 min', '30 min a 1 h', '1 a 2 h', '2 a 3 h', '3 h ou mais'], figma: '872:5414' },
    { id: 'custo', nome: 'Custo', opcoes: ['$', '$$', '$$$'], rotulos: { '$': '$ · Baixo', '$$': '$$ · Médio', '$$$': '$$$ · Alto' }, figma: '872:6118' },
  ],
  // Nenhum filtro vem pré-selecionado: a seleção começa vazia.
  aplicar: 'Aplicar filtros ({n})', limpar: 'Limpar filtros',
};

export const detalhes = {
  cabecalho: 'Detalhes da receita', nome: 'Arroz de forno com legumes', resumo: 'Custo baixo · Sem glúten · Sem ovos', porcoes: 2,
  abas: ['Ingredientes', 'Equipamentos', 'Informações'],
  ingredientes: [['Arroz branco', '1 xícara'], ['Cenoura', '½ unidade'], ['Abobrinha', '½ unidade'], ['Tomate', '1 unidade'], ['Azeite', '1 colher'], ['Muçarela', '50 g'], ['Sal e pimenta', 'A gosto']],
  equipamentos: [['Refratário', 'Pequeno'], ['Frigideira', 'Média'], ['Forno', '200 °C'], ['Faca e Tábua', 'Para cortar'], ['Colher e Chícara', 'Para medir']],
  descricao: 'Arroz já cozido, legumes refogados e cobertura gratinada. Uma ótima opção para aproveitar sobras.',
  nutricaoTitulo: 'Nutrição por porção',
  nutricao: [['Calorias', '~93,76 kcal'], ['Carboidratos', '~15,73 g'], ['Proteínas', '~3,19 g'], ['Gorduras Totais', '~2,54 g'], ['Gorduras Saturadas', '~0,38 g'], ['Gordura Trans', '~0,00 g'], ['Fibras', '~4,04 g'], ['Sódio', '~44,82 mg']],
  nota: '4.6', avaliacoesRotulo: 'Avaliações', verTodas: 'Ver todas',
  botao: 'Vamos iniciar', verCompleta: 'Ver receita completa',
};
export const avaliacoes = {
  titulo: 'Avaliações da receita', nota: '4.6 de 5', total: '15 Avaliações', verMais: 'Ver mais', adicionar: 'Adicione sua avaliação',
  lista: [
    { estrelas: 5, quando: 'Há 2 semanas', texto: '"Receita muito prática e econômica. Como não tinha abobrinha em casa, substitui por brócolis picadinho e coloquei bastante queijo muçarela por cima. Evitou de eu pedir comida por aplicativo hoje."', fotos: ['anexoIago1'], avatar: 'iago', nome: 'Iago', regiao: 'Sul', curtidas: 5 },
    { estrelas: 5, quando: 'Há 4 semanas', texto: '"Eu estava com visita e não fazia ideia do que fazer, essa receita me salvou!"', fotos: 0, avatar: 'lorena', nome: 'Lorena', regiao: 'Sudeste', curtidas: 20 },
    { estrelas: 4, quando: 'Há 2 semanas', texto: '"Ficou uma delícia e super fácil de fazer, mas deixo uma dica para quem for testar: não economizem na mussarela. Da primeira vez que fiz coloquei pouco e achei que o arroz ressecou um pouco no forno."', fotos: ['anexoAlissa1', 'anexoAlissa2'], avatar: 'alissa', nome: 'Alissa', regiao: 'Nordeste', curtidas: 55 },
  ],
  adicionarTela: { cabecalho: 'Seu resultado', titulo: 'Adicionar avaliação', sua: 'Sua avaliação', notaTexto: ['', '1 de 5 · Não gostei', '2 de 5 · Poderia ser melhor', '3 de 5 · Foi ok', '4 de 5 · Gostei da receita', '5 de 5 · Amei a receita'], registro: 'Registro do preparo', registroPh: 'Adicione seu relato aqui.', foto: 'Foto do resultado · opcional', anexe: 'Anexe sua foto aqui', publicar: 'Publicar avaliação', depois: 'Avaliar mais tarde', publicada: 'Avaliação publicada' },
};
export const receitaCompleta = {
  cabecalho: 'Receita completa', nome: 'Arroz de forno com legumes', botao: 'Iniciar passo a passo', voltar: 'Voltar ao preparo',
  etapas: [
    ['Prepare os ingredientes', 'Preaqueça o forno a 200 °C. Corte a cenoura, a abobrinha e o tomate em cubos.'],
    ['Refogue os legumes', 'Aqueça o azeite. Refogue a cenoura e a abobrinha por 5 minutos.'],
    ['Monte o refratário', 'Misture o arroz cozido, os legumes e o tomate. Tempere com sal e pimenta.'],
    ['Leve ao forno', 'Cubra com a muçarela ou a substituição escolhida. Gratine a 200 °C por 15 minutos.'],
    ['Finalize e sirva', 'Retire com cuidado. Deixe repousar por 2 minutos antes de servir.'],
  ],
};
export const adaptacao = {
  escolha: { cabecalho: 'Antes de começar', titulo: 'Deseja adaptar\na receita?', texto: 'Mantenha a receita original ou informe suas preferências e substituições.', nao: 'Não, iniciar preparo', sim: 'Sim, adaptar receita' },
  ajuste: {
    cabecalho: 'Adaptar receita', titulo: 'Do seu jeito', subtitulo: 'Escolha um ou mais ingredientes para trocar.',
    ingredientes: ['Arroz branco', 'Cenoura', 'Abobrinha', 'Tomate', 'Muçarela'],
    substituicoes: {
      // 6 opções por ingrediente (grade 3×2 do Figma, chips de 106 px: use nomes curtos)
      'Arroz branco': ['Integral', 'Quinoa', 'Couve-flor', 'Cevadinha', 'Lentilha', 'Batata'],
      'Cenoura': ['Abóbora', 'Beterraba', 'Chuchu', 'Batata-doce', 'Inhame', 'Nabo'],
      'Abobrinha': ['Brócolis', 'Chuchu', 'Beringela', 'Alho-poró', 'Pimentão', 'Vagem'],
      'Tomate': ['Abóbora', 'Beterraba', 'Chuchu', 'Pimentão', 'Quiabo', 'Vagem'],
      'Muçarela': ['Minas', 'Prato', 'Vegano', 'Parmesão', 'Ricota', 'Coalho'],
    },
    escolha: 'Escolha uma substituição', iniciar: 'Iniciar preparo', aplicar: 'Aplicar e iniciar preparo', aplicarVarias: 'Aplicar {n} trocas e iniciar preparo', semAdaptacao: 'Continuar sem adaptação',
  },
  carregamento: { topo: 'tela de carregamento', ilustracao: 'Ilustração dos mascotes lavando as mãos', texto: 'Lembre-se de lavar as mãos com detergente' },
};

export const preparo = {
  cabecalho: 'Passo a passo', receita: 'Arroz de forno com legumes', porcoes: '2 porções',
  balao: { titulo: 'Bateu uma dúvida no preparo?', texto: 'Seus assistentes respondem por aqui, sem sair da receita.', ok: 'Ok, entendi' },
  avancar: 'Marcar etapa e avançar', finalizar: 'Finalizar receita', verCompleta: 'Ver receita completa', iniciarTimer: 'Iniciar timer',
  etapas: [
    { titulo: 'Prepare os\ningredientes', texto: 'Preaqueça o forno a 200 °C. Corte a cenoura,\no brócolis e o tomate em cubos.', proxima: 'Próxima: refogue a cenoura e a abobrinha.' },
    { titulo: 'Refogue\nos legumes', texto: 'Aqueça o azeite. Refogue a cenoura e o brócolis na frigideira por 5 minutos.', proxima: 'Próxima: monte o refratário com o arroz e os legumes.', timerMin: 5 },
    { titulo: 'Monte\no refratário', texto: 'Misture o arroz cozido, os legumes e o tomate no refratário. Tempere com sal e pimenta.', proxima: 'Próxima: cubra com queijo e leve ao forno.' },
    { titulo: 'Leve\nao forno', texto: 'Cubra com a muçarela ou a substituição escolhida. Gratine a 200 °C por 15 minutos.', proxima: 'Próxima: deixe repousar antes de servir.', timerMin: 5 },
    { titulo: 'Finalize\ne sirva', texto: 'Retire com cuidado. Deixe repousar por 2 minutos antes de servir.', proxima: 'Última etapa: após o repouso, é só servir.' },
  ],
  timerFim: 'Tempo esgotado!',
};
export const concluida = { titulo: 'Receita concluída!', subtitulo: 'Parabéns pela conquista, continue assim!', pontos: 20, pontosRotulo: '+{n} pontos', experiencia: 'Experiência adquirida nesta atividade', percentual: 10, trilha: 'Visualizar minha trilha', continuar: 'Continuar' };
export const comoFicou = {
  cabecalho: 'Seu resultado', titulo: 'Como ficou?', sua: 'Sua avaliação', receita: 'Arroz de forno com legumes', estrelas: 5,
  usuario: { nome: 'Mariana Costa', iniciais: 'MC' }, publicarComunidade: 'Publicar na comunidade',
  foto: 'Adicionar foto do prato', fotoTexto: 'Toque para tirar ou escolher uma foto', trocar: 'Trocar foto',
  registro: 'Registro do preparo', legenda: 'Legenda', ph: 'Conte como ficou o seu prato…',
  legendaExemplo: 'Ficou um pouco seco, mas acho que foi a mussarela, de resto ficou muito gostoso!!!',
  ajudaSemFoto: 'Até 500 caracteres · Adicione uma foto para publicar', ajudaComFoto: 'Até 500 caracteres · Foto e legenda adicionadas',
  publicar: 'Publicar resultado', depois: 'Avaliar mais tarde', salva: 'Avaliação salva',
};

export const chat = {
  receita: {
    cabecalho: 'Chat com IA', nome: 'Assistentes', status: 'Online', imagem: 'Imagem da IA', vazioTitulo: 'Comece uma conversa', vazioTexto: 'Pergunte sobre esta receita',
    placeholder: 'Digite sua mensagem…',
    sugestoes: ['Me ensine o corte de cada ingrediente', 'Por quantos minutos deixo o forno pré-aquecendo?', 'Como reaproveito as sobras dos vegetais?', 'Como substituir um ingrediente?'],
    respostas: {
      'Me ensine o corte de cada ingrediente': { texto: 'Claro! Nos vídeos a seguir é possível ver o corte da <b>cenoura</b>, do <b>brócolis</b> e da <b>abóbora</b>, respectivamente:', videos: ['corteCenoura', 'corteBrocolis', 'corteAbobora'] },
      'Por quantos minutos deixo o forno pré-aquecendo?': { texto: 'Uns <b>10 minutos</b> a <b>200 °C</b> já bastam. Enquanto isso, adiante o refogado dos legumes.' },
      'Como reaproveito as sobras dos vegetais?': { texto: 'Cascas e talos viram um ótimo <b>caldo</b>: cozinhe em 1 litro de água por 20 minutos e coe. Dá para usar no próprio arroz!' },
      'Como substituir um ingrediente?': { texto: 'Antes de começar, toque em <b>Sim, adaptar receita</b>. Para a abobrinha, por exemplo, <b>brócolis</b> ou <b>chuchu</b> funcionam muito bem.' },
    },
    generica: 'Boa pergunta! Nesta simulação eu respondo melhor às sugestões abaixo, mas a ideia é: siga o passo a passo e ajuste o sal no final. 😊',
    audio: 'Mensagem de voz', audioResposta: 'Ouvi seu áudio! Pode seguir para a próxima etapa: os legumes devem ficar macios, mas ainda firmes.',
    deslize: '‹ Deslize para cancelar', videoOk: 'Ok, entendi',
  },
  app: {
    cabecalho: 'Ajuda com IA', nome: 'Assistente do App', status: 'Online', placeholder: 'Digite sua dúvida…',
    historico: [
      ['eu', 'Como mudo o tema do aplicativo?', '14:02'],
      ['ia', 'Abra o <b>Perfil</b>, toque em <b>Editar perfil</b> e escolha a aparência Clara ou Escura. Depois, é só tocar em <b>Salvar alterações</b>.'],
      ['eu', 'Se eu limpar o cache, perco minhas receitas?', '14:03'],
      ['ia', 'Não! <b>Limpar cache</b> remove só arquivos temporários deste celular. Suas receitas, postagens e preferências <b>continuam salvas</b> na sua conta.'],
    ],
    sugestoes: ['Como vincular o Instagram?', 'Como desativar notificações?', 'Onde vejo os termos?'],
    respostas: {
      'Como vincular o Instagram?': { texto: 'Vá em <b>Configurações › Contas vinculadas</b> e toque no ícone do Instagram em <b>Conecte outras redes</b>.' },
      'Como desativar notificações?': { texto: 'Em <b>Configurações › Notificações</b>, desligue os avisos que não quer receber.' },
      'Onde vejo os termos?': { texto: 'Em <b>Configurações › Termos de uso</b>, ou pela tela <b>Sobre o aplicativo</b>.' },
    },
    generica: 'Posso ajudar com conta, comunidade, trilha e configurações. Experimente uma das sugestões abaixo!',
  },
};

export const trilha = {
  cabecalho: 'Trilha', titulo: 'Sua jornada\nna cozinha', subtitulo: 'Um novo aprendizado espera por você em cada etapa.',
  nivel: { n: 2, nome: 'Nível 2 · Aprendiz', xp: '80/150 XP', pct: 53 },
  atividadesTitulo: 'Atividades',
  atividades: [
    // Figma 1141:8692 · ilustracao: imagem (midia.js) ou animação SVG (dados/ilustracoes.js, prefixo "anim:")
    { nome: 'Primeiros passos', status: 'Concluída', pct: 100, concluida: true, ilustracao: 'mascote.gatoTrilha' },
    { nome: 'Aproveite os alimentos', status: '0 de 8 fases', pct: 0, ilustracao: 'anim:cachorro-ingredientes' },
    { nome: 'Planeje sua bancada', status: '0 de 6 fases', pct: 0, bloqueada: true, ilustracao: 'trilha.planejeBancada' },
    { nome: 'Corte com precisão', status: '0 de 5 fases', pct: 0, bloqueada: true, ilustracao: 'trilha.corteCenoura' },
  ],
  conquistasTitulo: 'Conquistas',
  // [nome, ícone de reserva, desbloqueada, ilustração (midia.conquista)] · Figma 872:7987 / 1141:7592–7597
  conquistas: [['Primeiro prato', 'chapeu', true, 'conquista.primeiroPrato'], ['Zero desperdício', 'folha', true, 'conquista.zeroDesperdicio'], ['Bom planejador', 'cadeado', false, 'conquista.bomPlanejador'], ['Mestre\ndo corte', 'cadeado', false, 'conquista.mestreDoCorte']],
};
export const atividade = {
  cabecalho: 'Aproveite os alimentos', proxima: 'Próxima fase', concluir: 'Concluir atividade', cozinhar: 'Cozinhar', tostar: 'Tostar',
  fases: [
    { titulo: 'Conheça os ingredientes', texto: 'Nesta receita nada vai para o lixo: da abóbora usamos polpa, casca e sementes; do brócolis, floretes e talos; da cenoura, raiz e folhas.', lista: [['Abóbora', 'polpa, casca e sementes'], ['Brócolis', 'floretes e talos'], ['Cenoura', 'raiz e folhas']], figma: '872:7644' },
    { titulo: 'Higienize tudo', texto: 'Lave a abóbora, o brócolis e as cenouras com bucha e água corrente. As cascas também vão para a panela, então capriche.', dica: 'Deixe de molho por 10 min em água com vinagre antes de enxaguar.', figma: '872:7693' },
    { titulo: 'Separe as partes', texto: 'Corte a abóbora ao meio, retire as sementes e reserve. Descasque e guarde as cascas da abóbora e da cenoura para o caldo.', dica: 'Separe tudo em potinhos: fica mais fácil seguir as próximas fases.', figma: '872:7727' },
    { titulo: 'Corte os talos', texto: 'Separe os floretes do brócolis e corte os talos em cubos pequenos. Eles têm o mesmo sabor e deixam a sopa mais nutritiva.', dica: 'Descasque só a parte mais dura do talo com um descascador.', figma: '872:7761' },
    { titulo: 'Caldo de cascas', texto: 'Cozinhe as cascas da abóbora e da cenoura em 1 litro de água. Coe e reserve: esse caldo é a base da sopa.', timer: ['Cozinhar', 20], figma: '872:7795' },
    { titulo: 'Cozinhe a sopa', texto: 'Refogue cebola e alho, junte a polpa da abóbora, os talos e o caldo. Cozinhe até amolecer e bata até ficar cremoso.', timer: ['Cozinhar', 25], figma: '872:7827' },
    { titulo: 'Sementes crocantes', texto: 'Lave as sementes, seque bem e toste com um fio de azeite e sal até ficarem douradas e crocantes.', timer: ['Tostar', 10], figma: '872:7859' },
    { titulo: 'Monte e sirva', texto: 'Sirva a sopa com os floretes, as sementes crocantes e as folhas da cenoura picadas por cima. Missão cumprida: zero desperdício!', dica: 'Sobrou sopa? Congele em porções por até 3 meses.', figma: '872:7891' },
  ],
  concluida: { titulo: 'Atividade concluída!', subtitulo: 'Você aproveitou cada parte dos alimentos.', xp: 80, nivel: 'Você subiu para o Nível 3!', conquista: 'Conquista desbloqueada', conquistaNome: 'Zero desperdício', proxima: 'Próxima atividade desbloqueada', proximaNome: 'Teste seus conhecimentos', trilha: 'Visualizar trilha', revisar: 'Revisar atividade' },
};

export const pessoas = {
  mariana: { nome: 'Mariana Costa', iniciais: 'MC', usuario: '@mariana.costa' },
  juliane: { id: 'juliane', nome: 'Juliane Souza', usuario: '@juliane.cozinha', midia: 'juliane' },
  julianeMartins: { id: 'julianeMartins', nome: 'Juliane Martins', usuario: '@juliane.martins', midia: 'julianeMartins' },
  thiago: { id: 'thiago', nome: 'Thiago Lima', usuario: '@thiago.lima', midia: 'thiago' },
  erika: { id: 'erika', nome: 'Erika Dias', usuario: '@erika.dias', midia: 'erika' },
};
export const comunidade = {
  titulo: 'Comunidade', buscar: 'Buscar usuários', verPerfil: 'Ver perfil', publicada: 'Postagem publicada',
  feed: [
    // Depois de publicar (Figma 872:6647) o post da Juliane aparece com outra foto e outro texto: midiaApos / textoApos
    { autor: 'juliane', quando: 'Há 2 h', midia: 'moquecaJuliane', texto: 'Ficou uma delícia, essas batatas na air friyer nunca ficaram tão crocantes depois dessa receita.', midiaApos: 'frangoComPure', textoApos: 'Uma ideia simples para usar abobrinha, queijo e temperos da geladeira.', curtidas: 128, comentarios: 18 },
    { autor: 'thiago', quando: 'Há 5 h', midia: 'frangoEmpanado', texto: 'Nunca tinha feito frango com essa farinha, mudou tudo!!! Usem farinha panko, fica demaiss!', curtidas: 128, comentarios: 18 },
  ],
  minhaPostagem: { nome: 'Mariana Costa', iniciais: 'MC', quando: 'Agora · Você', midia: 'moqueca', titulo: 'Moqueca capixaba', texto: 'Fiz uma receita em família de moqueca capixaba, Não vou negar, o sabor da panela de barro muda tudo! Recomendo demais.', curtidas: 0, comentarios: 0 },
  nova: { cabecalho: 'Nova postagem', titulo: 'Compartilhe\nseu prato', legendaExemplo: 'Fiz uma receita em família de moqueca capixaba, Não vou negar, o sabor da panela de barro muda tudo! Recomendo demais.', foto: 'moqueca' },
  feedPessoa: {
    cabecalho: 'Feed de Erika',
    posts: [
      { nome: 'Erika Dias', midiaAutor: 'erika', semFoto: true, quando: 'Agora · Comunidade', midia: 'parmigiana', titulo: 'Frango à Parmigiana', texto: 'Simplesmente o melhor prato que eu já fiz, uma a parmegiana de frango' },
      { nome: 'Erika Dias', iniciais: 'MC', quando: 'Há 3 dias · Comunidade', midia: 'boloCenoura', titulo: 'Arroz de forno com legumes', texto: 'Meu arroz de forno com legumes ficou pronto! Usei o que já tinha na geladeira.' },
    ],
  },
  comentarios: [
    { iniciais: 'CD', nome: 'Carla Dias', quando: 'Há 1 h', texto: 'Fiz com queijo minas e ficou ótimo! Quanto tempo de forno você deixou?', resposta: { nome: 'Erika Dias', quando: 'Há 50 min', texto: 'Uns 25 min a 200 °C, até dourar por cima.' } },
    { iniciais: 'BL', nome: 'Bruno Lima', quando: 'Há 30 min', texto: 'Dá para trocar a abobrinha por berinjela?' },
    { iniciais: 'CD', nome: 'Rita Costa', quando: 'Há 1 h', texto: 'Será que posso substituir a abobrinha por cenoura ralada? Adorei a ideia dessa receita!', resposta: { nome: 'Erika Dias', quando: 'Há 50 min', texto: 'Pode sim! Fica deliciosa com cenoura também, e você pode combinar os dois legumes. 😊' } },
  ],
  responder: 'Responder', autora: 'Autora', comentarPh: 'Escreva um comentário…',
  perfilErika: {
    cabecalho: 'Perfil de Erika', nivel: 3, nivelTexto: 'Nível 3 · Cozinheira curiosa', xp: '120/200 XP', pct: 60, bio: 'Receitas simples e aproveitamento de ingredientes no dia a dia.',
    seguir: 'Seguir', seguindo: 'Seguindo', abas: ['Publicações', 'Atividade'],
    numeros: [['12', 'pratos'], ['5', 'desafios'], ['2', 'conquistas']],
    // Figma 872:7528 (vale para a Erika e para o Meu perfil): [nome, ícone de reserva, desbloqueada, ilustração]
    conquistas: [['Primeiro prato', 'chapeu', true, 'conquista.primeiroPrato'], ['Zero desperdício', 'folha', true, 'conquista.zeroDesperdicio'], ['Bom planejador', 'cadeado', false, 'conquista.bomPlanejador'], ['Mestre\ndo corte', 'cadeado', false, 'conquista.mestreDoCorte']],
    semana: 'Esta semana',
    atividades: [['Fez Bolo de cenoura', 'Há 3 dias', '+20 XP', 'foto', 'boloCenoura'], ['Desbloqueou “Zero desperdício”', 'Há 5 dias', '', 'folha'], ['Concluiu o desafio Aproveite os alimentos', 'Há 4 dias', '+50 XP', 'trofeu']],
  },
};
export const conexoes = {
  cabecalho: 'Comunidade', titulo: 'Buscar pessoas', rotulo: 'Nome ou @usuário', buscar: 'Buscar', pesquisarNovamente: 'Pesquisar novamente',
  convite: { titulo: 'Cozinhar é melhor em companhia', texto: 'Convide amigos para trocar receitas e acompanhar suas postagens.', botao: 'Convidar um amigo' },
  sugeridas: 'Pessoas sugeridas · 2', listaSugeridas: ['thiago', 'juliane'],
  buscaveis: ['julianeMartins', 'juliane', 'thiago', 'erika'],
  encontrados: '{n} perfis encontrados', encontrado1: '1 perfil encontrado',
  nenhum: { ilustracao: 'Gato com chapéu de chef procurando com uma lupa', titulo: 'Nenhum usuário encontrado', texto: 'Não encontramos ninguém com “{q}”.\nConfira a escrita ou tente buscar pelo @usuário.', amigoTitulo: 'Seu amigo ainda não está aqui?', amigoTexto: 'Envie um convite para ele fazer parte da comunidade.' },
  convidar: { ilustracao: 'espaço para ilustração vetorizada', titulo: 'Convide seus amigos', texto: 'Compartilhe seu link para se conectar com quem gosta de cozinhar.', rotulo: 'Seu link de convite', link: 'receitas.app/convite/mariana', copiar: 'Copiar link', copiarNovamente: 'Copiar link novamente', copiadoTitulo: 'Link copiado', copiadoTexto: 'Agora é só escolher onde compartilhar.', compartilhar: 'Compartilhar link', canais: [['WhatsApp', 'whatsapp'], ['Mensagens', 'mensagem'], ['E-mail', 'email']], mais: 'Mais opções de compartilhamento', simulado: 'Compartilhamento simulado' },
  lista: {
    cabecalho: 'Conexões', abas: ['Seguidores · 24', 'Seguindo · 18'], busca: 'Buscar nome ou @usuário',
    seguidores: [['AS', 'Ana Souza', '@ana.cozinha', true], ['BL', 'Bruno Lima', '@bruno.lima', true], ['CD', 'Carla Dias', '@carla.dias', true], ['DS', 'Diego Santos', '@diego.santos', false], ['AM', 'Ana Martins', '@ana.martins', false], ['FA', 'Fernanda Alves', '@fernanda.alves', true], ['GR', 'Gabriel Rocha', '@gabriel.rocha', false]],
    seguindo: [['AS', 'Ana Souza', '@ana.cozinha', true], ['BL', 'Bruno Lima', '@bruno.lima', true], ['CD', 'Carla Dias', '@carla.dias', true], ['ER', 'Elena Ribeiro', '@elena.ribeiro', true], ['FA', 'Fernanda Alves', '@fernanda.alves', true], ['PO', 'Pedro Oliveira', '@pedro.oliveira', true], ['LF', 'Luiza Ferreira', '@luiza.ferreira', true]],
  },
};

export const perfil = {
  cabecalho: 'Meu perfil', atividades: [['Fez Arroz de forno com legumes', 'Há 2 dias', '+20 XP', 'foto', 'arrozDeForno'], ['Desbloqueou “Zero desperdício”', 'Há 5 dias', '', 'folha'], ['Concluiu o desafio Aproveite os alimentos', 'Há 4 dias', '+50 XP', 'trofeu']], numeros: [['12', 'pratos'], ['5', 'desafios'], ['2', 'conquistas']], nome: 'Mariana', iniciais: 'MC', usuario: '@ms.costa', editar: 'Editar Perfil', nivel: 'Nível 3 · Cozinheira curiosa', xp: '120/200 XP', pct: 60,
  bio: 'Receitas simples e aproveitamento de ingredientes no dia a dia.', seguidores: '24', seguindo: '18', abas: ['Publicações', 'Atividade'],
  // Feed das próprias publicações (abre ao tocar numa foto da galeria do Meu perfil, na mesma ordem da galeria)
  feed: {
    cabecalho: 'Minhas publicações', nomeCompleto: 'Mariana Costa',
    textos: [
      ['Agora', 'Fiz uma receita em família de moqueca capixaba, Não vou negar, o sabor da panela de barro muda tudo! Recomendo demais.', 0, 0],
      ['Há 2 dias', 'Arroz de forno com os legumes que sobraram da semana. Rendeu o almoço de domingo!', 18, 4],
    ],
  },
  editarTela: { cabecalho: 'Editar perfil', titulo: 'Seus dados', alterarFoto: 'Alterar foto', removerFoto: 'Remover foto', campos: [['Nome', 'Mariana Costa'], ['Nome de usuário', '@mariana.costa'], ['E-mail', 'mariana@exemplo.com']], aparencia: 'Aparência', claro: 'Claro', escuro: 'Escuro', salvar: 'Salvar alterações', salvo: 'Alterações salvas' },
};
export const configuracoes = {
  cabecalho: 'Configurações',
  grupos: [
    ['Conta', [['Contas vinculadas', 'corrente', 'contas-vinculadas'], ['Restrições alimentares', 'restricao', 'restricoes'], ['Notificações', 'sino', 'notificacoes']]],
    ['Suporte', [['Central de ajuda', 'ajuda', 'central-ajuda']]],
    ['Sobre', [['Sobre o aplicativo', 'info', 'sobre'], ['Termos de uso', 'documento', 'termos'], ['Política de privacidade', 'escudo', 'politica']]],
    ['Sessão', [['Limpar cache', 'lixeira', 'limpar-cache'], ['Sair', 'sair', 'sair']]],
  ],
  cache: { titulo: 'Limpar cache?', texto: 'Isso remove arquivos temporários deste dispositivo para liberar espaço. Seus dados da conta, preferências e postagens não serão removidos.', confirmar: 'Limpar cache', cancelar: 'Cancelar', feito: 'Cache limpo. Seus dados continuam salvos.' },
  sair: { titulo: 'Sair da sua conta?', texto: 'Você precisará entrar novamente para acessar seu perfil. Seus dados e postagens continuarão na sua conta.', confirmar: 'Sair', cancelar: 'Cancelar' },
  contas: {
    cabecalho: 'Contas vinculadas', texto: 'Consulte suas conexões e gerencie as contas que deseja manter no App.',
    lista: [['Google', 'google', 'mariana@exemplo.com'], ['Instagram', 'instagram', 'mariana@exemplo.com']], conectada: 'Conectada', remover: 'Remover conta', removida: 'Conta removida (simulação)',
    outras: 'Conecte outras redes', outrasTexto: 'Compartilhe seus pratos onde você já está.', ilustracao: 'Ilustração', redes: ['tiktok', 'pinterest', 'youtube', 'whatsapp'],
    nota: 'Remover um vínculo não exclui sua conta no provedor.',
  },
  restricoes: { cabecalho: 'Restrições alimentares', titulo: 'Suas restrições', texto: 'Marque o que você não come ou não pode comer. Vale para alergias e preferências.', salvar: 'Salvar', salvo: 'Restrições salvas', emCriacao: 'Tela em criação · cópia do painel do cadastro' },
  notificacoes: {
    cabecalho: 'Notificações', titulo: 'O que quer receber?', texto: 'Escolha quais avisos do App aparecem no seu dispositivo.',
    itens: [['Receitas recomendadas', 'Sugestões para o seu dia a dia.', 'chapeu', true], ['Comunidade', 'Curtidas, comentários e novos seguidores.', 'pessoas', true], ['Trilha e desafios', 'Novos quizzes e lembretes da trilha.', 'trofeu', true], ['Novidades do App', 'Atualizações e dicas do aplicativo.', 'brilho', false]],
    permissoes: 'Permissões do dispositivo', permissoesTexto: 'Se não receber avisos, confira a permissão de notificações nas configurações do celular.',
  },
  ajuda: {
    cabecalho: 'Central de ajuda', titulo: 'Como podemos\najudar?', texto: 'Escolha a melhor forma de tirar suas dúvidas sobre o App.',
    ia: 'Tire dúvidas com a IA', iaTexto: 'Encontre orientações rápidas para usar os recursos do App, a qualquer hora.', iaBotao: 'Conversar com a IA',
    equipe: 'Fale com a equipe', equipeTexto: 'Envie uma dúvida, sugestão ou relate um problema no aplicativo.', equipeBotao: 'Enviar mensagem',
    nota: 'Não compartilhe senhas ou informações sensíveis nas mensagens.',
  },
  contato: {
    cabecalho: 'Contato', titulo: 'Fale com a equipe', texto: 'Conte como podemos ajudar. A resposta será enviada ao e-mail informado.',
    nome: 'Nome', nomeValor: 'Mariana Costa', email: 'E-mail para resposta', emailValor: 'mariana@exemplo.com', assunto: 'Assunto', assuntoValor: 'Dúvida sobre o aplicativo',
    mensagem: 'Mensagem', mensagemPh: 'Escreva sua mensagem', mensagemAjuda: 'Não inclua senhas ou dados sensíveis.', enviar: 'Enviar mensagem', enviada: 'Mensagem enviada (simulação)',
    painelTitulo: 'Escolha o assunto', opcoes: ['Comunidade e postagens', 'Conta e privacidade', 'Dúvida sobre o aplicativo', 'Problema técnico', 'Receitas e preparo', 'Sugestão de melhoria', 'Trilha e conquistas', 'Outros'], confirmar: 'Confirmar',
  },
  sobre: { cabecalho: 'Sobre o aplicativo', titulo: 'Sobre o App', app: 'Mexidão', versao: 'Versão 1.0.0', cartaoTitulo: 'Seu caderno de cozinha', cartaoTexto: 'Para aprender técnicas, aproveitar o que tem em casa e cozinhar junto com a sua comunidade.' },
  aviso: 'Conteúdo ilustrativo de wireframe. Não é um documento jurídico pronto para uso.',
  termos: { cabecalho: 'Termos de uso', itens: [['Uso do aplicativo', 'O App reúne receitas, preparo guiado, comunidade e desafios de aprendizagem. Use os recursos de forma respeitosa.'], ['Sua conta', 'Mantenha seus dados atualizados e suas credenciais protegidas. Não compartilhe sua senha com outras pessoas.'], ['Conteúdo na comunidade', 'Publique conteúdo que você possa compartilhar. Respeite outras pessoas e evite informações ofensivas ou enganosas.'], ['Receitas e orientações', 'Confira ingredientes e restrições antes de cozinhar. As sugestões não substituem orientações profissionais.'], ['Dúvidas e atualizações', 'Consulte a Central de ajuda para falar sobre o uso do App. Este texto representa a estrutura de futuras condições de uso.']] },
  politica: { cabecalho: 'Política de privacidade', itens: [['Informações da conta', 'Nome, e-mail e preferências são exemplos de informações usadas para compor o perfil e personalizar a experiência.'], ['Conteúdo compartilhado', 'Postagens, comentários e informações do perfil podem aparecer para outras pessoas na comunidade.'], ['Contas vinculadas', 'As integrações dependem das permissões escolhidas. Você pode consultar e remover os vínculos em Contas vinculadas.'], ['Preferências e dados locais', 'As notificações podem ser ajustadas. A limpeza de cache remove arquivos temporários, não os dados da conta.'], ['Dúvidas sobre privacidade', 'Use a opção Contato na Central de ajuda para encaminhar dúvidas sobre o uso das suas informações.']] },
};

// Painel lateral
export const painel = {
  titulo: 'Mexidão', subtitulo: 'Simulação navegável do TCC', fluxos: 'Fluxos', ondeEstou: 'Você está em',
  reiniciar: 'Reiniciar simulação', acelerar: 'Acelerar timer', silenciar: 'Silenciar sons',
  ds: 'Ver o design system do app',
  nota: 'Simulação visual: nada é enviado. Só o nome informado fica guardado enquanto a página estiver aberta. Vídeos são temporários.',
};

// Perfil próprio de cada pessoa da comunidade (Figma: Erika 872:7476 · Juliane Martins 1025:6327 · Juliane Souza 1025:6401).
// A quantidade de postagens mostrada na busca é sempre o total da lista "posts" (a galeria e o feed usam a mesma lista).
// posts: [foto (midia.receita), quando, título, texto, curtidas, comentários]
export const perfis = {
  erika: { primeiroNome: 'Erika', nivel: 3, nivelTexto: 'Nível 3 · Cozinheira curiosa', xp: '120/200 XP', pct: 60, bio: 'Receitas simples e aproveitamento de ingredientes no dia a dia.', figma: '872:7476',
    posts: [ // Figma 872:7476 (ordem da grade)
      ['erikaParmegiana', 'Agora', 'Frango à Parmigiana', 'Simplesmente o melhor prato que eu já fiz, uma a parmegiana de frango', 45, 15],
      ['erikaBolo', 'Há 3 dias', 'Bolo de cenoura', 'Bolo de cenoura com cobertura de chocolate.', 30, 4],
      ['erikaStrogonoff', 'Há 4 dias', 'Strogonoff', 'Strogonoff de frango com arroz e batata palha.', 40, 8],
      ['erikaFarofa', 'Há 5 dias', 'Farofa', 'Farofa com o que sobrou da geladeira.', 15, 2],
      ['erikaBolinho', 'Há 1 semana', 'Bolinho de chuva', 'Bolinho de chuva para a tarde fria.', 27, 4],
      ['erikaFeijoada', 'Há 1 semana', 'Feijoada', 'Feijoada completa com couve e laranja.', 19, 3],
      ['erikaPudim', 'Há 2 semanas', 'Pudim', 'Pudim de leite sem furinhos!', 23, 5],
      ['erikaLasanha', 'Há 2 semanas', 'Lasanha', 'Lasanha de carne para o almoço de domingo.', 21, 3],
      ['erikaMassa', 'Há 3 semanas', 'Massa com carne', 'Tagliatelle com tiras de carne no molho cremoso.', 34, 6],
    ] },
  julianeMartins: { postagens: 6 }, // perfil não disponível na simulação (só a contagem de postagens da busca)
  juliane: { postagens: 12 }, // perfil não disponível na simulação (só a contagem de postagens da busca)
  thiago: { postagens: 8 }, // perfil não disponível na simulação (só a contagem de postagens da busca)
};
