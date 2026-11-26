// LISTA ÚNICA DE MÍDIA DO APP
// As fotos e ilustrações foram exportadas do próprio Figma (telas da seção B).
// Os vídeos são temporários (gerados a partir das fotos, com áudio) e tocam no elemento nativo <video>.
// Para trocar qualquer item:
//   1) coloque o arquivo novo na pasta midia/ com o MESMO nome (pronto, nada mais muda), ou
//   2) troque o caminho aqui.
// Vídeos: "arquivo" = .mp4 em midia/videos/ · "poster" = imagem mostrada antes de tocar · "duracao" em segundos
//         (só é usada enquanto o vídeo carrega). Com arquivo: null, o app mostra o poster e simula a reprodução.
// Sons: "synth:..." é um som gerado pelo próprio navegador. Troque por um arquivo (ex.: "midia/sons/fim.mp3").

export const usarYoutube = false; // sem YouTube: os vídeos mostram as imagens do Figma (arquivos locais em midia/videos/)

export const midia = {
  receita: {
    arrozDeForno: { src: 'midia/receitas/arroz-de-forno.jpg',   descricao: 'Arroz de forno com legumes', figma: '1123:6435' }, // foto nova (Home e Detalhes)
    escondidinho: { src: 'midia/receitas/escondidinho.jpg',     descricao: 'Escondidinho de carne seca', figma: '872:5262' },
    cremeAbobora: { src: 'midia/receitas/creme-de-abobora.jpg', descricao: 'Creme de abóbora', figma: '872:5262' },
    tortaSalgada: { src: 'midia/receitas/arroz-de-forno.jpg',   descricao: 'Torta salgada (foto provisória)', figma: '872:6231' },
    pimentoes:    { src: 'midia/receitas/escondidinho.jpg',     descricao: 'Pimentões recheados (foto provisória)', figma: '872:6231' },
    risoto:       { src: 'midia/receitas/risoto.jpg',           descricao: 'Risoto (postagem do Thiago)', figma: '872:6386' },
    brocolis:     { src: 'midia/receitas/brocolis.jpg',         descricao: 'Brócolis', figma: '872:7476' },
    sopa:         { src: 'midia/receitas/sopa.jpg',             descricao: 'Sopa de abóbora', figma: '872:7476' },
    abobrinha:    { src: 'midia/receitas/abobrinha.jpg',        descricao: 'Abobrinha recheada', figma: '872:7476' },
    arrozBanner:  { src: 'midia/receitas/arroz-de-forno-banner.jpg', descricao: 'Arroz de forno com legumes', figma: '872:5468' }, // recorte exato do banner de Detalhes
    // Resultados da busca (Figma 872:5299)
    croquetes:   { src: 'midia/receitas/croquetes.jpg', descricao: 'Croquetes de batata e cenoura', figma: '1024:8051' },
    panquecasSalgadas: { src: 'midia/receitas/panquecas-salgadas.jpg', descricao: 'Panquecas salgadas de batata e cenoura', figma: '1024:8057' },
    fritadinhos: { src: 'midia/receitas/fritadinhos.jpg', descricao: 'Fritadinhos de batata e cenoura', figma: '1024:8063' },
    ensopado:    { src: 'midia/receitas/ensopado.jpg', descricao: 'Ensopado de legumes com batata e cenoura', figma: '1024:8066' },
    nhoqueCenoura: { src: 'midia/receitas/nhoque-cenoura.jpg', descricao: 'Nhoque de batata com molho de cenoura', figma: '1024:8075' },
    // Receitas recomendadas (Figma 872:6231)
    maridoGelado: { src: 'midia/receitas/marido-gelado.jpg', descricao: 'Marido gelado', figma: 'I872:6239' },
    nhoque:       { src: 'midia/receitas/nhoque.jpg',        descricao: 'Nhoque de batata', figma: 'I872:5285' },
    pudim:        { src: 'midia/receitas/pudim.jpg',         descricao: 'Pudim', figma: 'I872:6238' },
    empadinha:    { src: 'midia/receitas/empadinha.jpg',     descricao: 'Empadinha de palmito', figma: '872:6242' },
    panqueca:     { src: 'midia/receitas/panqueca.jpg',      descricao: 'Panqueca de carne', figma: '872:6253' },
    // Anexos das avaliações (Figma 872:6015)
    anexoIago1:   { src: 'midia/receitas/anexo-iago-1.jpg',   descricao: 'Foto do Iago', figma: 'I872:6034;871:4944' },
    anexoAlissa1: { src: 'midia/receitas/anexo-alissa-1.jpg', descricao: 'Foto da Alissa', figma: 'I872:6035;871:4944' },
    anexoAlissa2: { src: 'midia/receitas/anexo-alissa-2.jpg', descricao: 'Foto da Alissa', figma: 'I872:6035;871:4949' },
    // Comunidade
    moquecaJuliane: { src: 'midia/receitas/moqueca-juliane.jpg', descricao: 'Postagem da Juliane', figma: '872:6403' },
    frangoEmpanado: { src: 'midia/receitas/frango-empanado.jpg', descricao: 'Frango empanado com panko', figma: '872:6423' },
    frangoComPure:  { src: 'midia/receitas/frango-com-pure.jpg', descricao: 'Frango com purê e salada', figma: '872:6690' },
    moqueca:        { src: 'midia/receitas/moqueca.jpg',         descricao: 'Moqueca capixaba', figma: '1113:6817' },
    arrozResultado: { src: 'midia/receitas/arroz-resultado.jpg', descricao: 'Arroz de forno com legumes', figma: '872:6322' },
    parmigiana:     { src: 'midia/receitas/parmigiana.jpg',      descricao: 'Frango à Parmigiana', figma: '1115:6509' },
    boloCenoura:    { src: 'midia/receitas/bolo-de-cenoura.jpg', descricao: 'Bolo de cenoura', figma: '1115:6530' },
    // Galeria da Erika (Figma 872:7476)
    erikaMassa:      { src: 'midia/receitas/galeria/erika-massa-com-carne.jpg', descricao: 'Massa com carne', figma: '872:7514' },
    erikaLasanha:    { src: 'midia/receitas/galeria/erika-lasanha.jpg',         descricao: 'Lasanha', figma: '872:7515' },
    erikaStrogonoff: { src: 'midia/receitas/galeria/erika-strogonoff.jpg',      descricao: 'Strogonoff', figma: '872:7516' },
    erikaFarofa:     { src: 'midia/receitas/galeria/erika-farofa.jpg',          descricao: 'Farofa', figma: '872:7518' },
    erikaBolinho:    { src: 'midia/receitas/galeria/erika-bolinho-de-chuva.jpg', descricao: 'Bolinho de chuva', figma: '872:7519' },
    erikaFeijoada:   { src: 'midia/receitas/galeria/erika-feijoada.jpg',        descricao: 'Feijoada', figma: '872:7520' },
    erikaPudim:      { src: 'midia/receitas/galeria/erika-pudim.jpg',           descricao: 'Pudim', figma: '872:7522' },
    erikaParmegiana: { src: 'midia/receitas/galeria/erika-parmegiana.jpg',      descricao: 'Parmegiana', figma: '872:7523' },
    erikaBolo:       { src: 'midia/receitas/galeria/erika-bolo-de-cenoura.jpg', descricao: 'Bolo de cenoura', figma: '872:7524' },
    // Galeria da Juliane Souza (Figma 1025:6401)
    julianeTorta:     { src: 'midia/receitas/galeria/juliane-torta-de-ovos.jpg',      descricao: 'Torta de ovos', figma: '1025:6439' },
    julianeAbobrinha: { src: 'midia/receitas/galeria/juliane-abobrinha-recheada.jpg', descricao: 'Abobrinha recheada', figma: '1025:6440' },
    julianePudim:     { src: 'midia/receitas/galeria/juliane-pudim.jpg',              descricao: 'Pudim', figma: '1025:6441' },
    julianePanqueca:  { src: 'midia/receitas/galeria/juliane-panqueca-gratinada.jpg', descricao: 'Panqueca gratinada', figma: '1113:6940' },
    julianeMousse:    { src: 'midia/receitas/galeria/juliane-mousse-de-maracuja.jpg', descricao: 'Mousse de maracujá', figma: '1025:6444' },
    julianeSalada:    { src: 'midia/receitas/galeria/juliane-salada-de-batata.jpg',   descricao: 'Salada de batata', figma: '1025:6445' },
  },
  pessoa: {
    juliane:        { src: 'midia/pessoas/juliane-souza.png',   descricao: 'Juliane Souza' },
    julianeMartins: { src: 'midia/pessoas/juliane-martins.png', descricao: 'Juliane Martins' },
    thiago:         { src: 'midia/pessoas/thiago-lima.png',     descricao: 'Thiago Lima' },
    erika:          { src: 'midia/pessoas/erika-dias.png',      descricao: 'Erika Dias' },
    iago:           { src: 'midia/pessoas/iago.png',            descricao: 'Iago' },
    lorena:         { src: 'midia/pessoas/lorena.png',          descricao: 'Lorena' },
    alissa:         { src: 'midia/pessoas/alissa.png',          descricao: 'Alissa' },
  },
  // Conquistas da Trilha (Figma 1141:7592–7597)
  conquista: {
    primeiroPrato:   { src: 'midia/conquistas/primeiro-prato.png',   descricao: 'Primeiro prato', figma: '1141:7597' },
    zeroDesperdicio: { src: 'midia/conquistas/zero-desperdicio.png', descricao: 'Zero desperdício', figma: '1141:7594' },
    bomPlanejador:   { src: 'midia/conquistas/bom-planejador.png',   descricao: 'Bom planejador', figma: '1141:7592' },
    mestreDoCorte:   { src: 'midia/conquistas/mestre-do-corte.png',  descricao: 'Mestre do corte', figma: '1141:7593' },
  },
  // Ilustrações dos cartões da Trilha (Figma 1141:8692)
  trilha: {
    planejeBancada: { src: 'midia/trilha/planeje-sua-bancada.png', descricao: 'Gato organizando a bancada', figma: '1141:8181' },
    corteCenoura:   { src: 'midia/trilha/corte-com-precisao.png',  descricao: 'Cachorro cortando cenoura', figma: '1141:8182' },
    cadeado:        { src: 'midia/trilha/cadeado.png',             descricao: 'Bloqueada', figma: '1141:8691' },
  },
  mascote: {
    bannerFundo: { src: 'midia/mascotes/banner-fundo.png', descricao: 'Fundo verde do banner “Comece por aqui”', figma: '994:7866' },
    bannerHome: { src: 'midia/mascotes/banner-home.png',     descricao: 'Banner “Comece por aqui” com o mascote gato', figma: '872:5262' },
    dupla:      { src: 'midia/mascotes/gato-e-cachorro.png', descricao: 'Gato e cachorro', figma: '872:5803' },
    cachorro:   { src: 'midia/mascotes/cachorro.png',        descricao: 'Cachorro com potes', figma: '872:5595' },
    gatoTrilha: { src: 'midia/mascotes/gato-trilha.png',     descricao: 'Gato no card “Primeiros passos”', figma: '872:7957' },
    cachorroIngredientes: { src: 'midia/mascotes/cachorro-ingredientes.png', descricao: 'Cachorro com os ingredientes', figma: '872:7957' },
    cozinhando: { src: 'midia/mascotes/mascotes-cozinhando.png', descricao: 'Gato e cachorro batendo massa', figma: '872:6514' },
    conectando: { src: 'midia/mascotes/mascotes-conectando.png', descricao: 'Gato e cachorro conectando', figma: '872:5224' },
    conectado:  { src: 'midia/mascotes/mascotes-conectado.png',  descricao: 'Gato e cachorro com o selo de conexão', figma: '872:5243' },
    ia:         { src: 'midia/mascotes/mascotes-ia.png',         descricao: 'Mascotes da IA', figma: '872:6078' },
    iaAvatar:   { src: 'midia/mascotes/ia-avatar.png',           descricao: 'Avatar da IA', figma: '871:5130' },
  },
  // Ilustrações animadas (vídeos curtos em loop, sem som, tocam sozinhos)
  animacao: {
    inicial:   { arquivo: 'midia/animacoes/mascotes-inicial.mp4', descricao: 'Mascotes dando boas-vindas', figma: '872:4957' },
    comemorar: { arquivo: 'midia/animacoes/comemorar.mp4',        descricao: 'Mascotes comemorando', figma: '872:5939' },
  },
  video: {
    corteCenoura:  { arquivo: 'midia/videos/corte-cenoura.mp4',  poster: 'midia/videos/corte-cenoura.jpg',  duracao: 32, titulo: 'Corte da cenoura' },
    corteBrocolis: { arquivo: 'midia/videos/corte-brocolis.mp4', poster: 'midia/videos/corte-brocolis.jpg', duracao: 28, titulo: 'Corte do brócolis' },
    corteTomate:   { arquivo: 'midia/videos/corte-tomate.mp4',   poster: 'midia/videos/corte-tomate.jpg',   duracao: 24, titulo: 'Corte do tomate' },
    corteAbobora:  { arquivo: 'midia/videos/corte-tomate.mp4',   poster: 'midia/videos/corte-abobora.jpg',  duracao: 24, titulo: 'Corte da abóbora' }, // capa do Figma 872:6107 (vídeo provisório)
    fase1: { arquivo: 'midia/videos/fase-1.mp4', poster: 'midia/videos/fase-1.jpg', duracao: 30, titulo: 'Conheça os ingredientes' },
    fase2: { arquivo: 'midia/videos/fase-2.mp4', poster: 'midia/videos/fase-2.jpg', duracao: 20, titulo: 'Higienize tudo' },
    fase3: { arquivo: 'midia/videos/fase-3.mp4', poster: 'midia/videos/fase-3.jpg', duracao: 25, titulo: 'Separe as partes' },
    fase4: { arquivo: 'midia/videos/fase-4.mp4', poster: 'midia/videos/fase-4.jpg', duracao: 25, titulo: 'Corte os talos' },
    fase5: { arquivo: 'midia/videos/fase-5.mp4', poster: 'midia/videos/fase-5.jpg', duracao: 15, titulo: 'Caldo de cascas' },
    fase6: { arquivo: 'midia/videos/fase-6.mp4', poster: 'midia/videos/fase-6.jpg', duracao: 35, titulo: 'Cozinhe a sopa' },
    fase7: { arquivo: 'midia/videos/fase-7.mp4', poster: 'midia/videos/fase-7.jpg', duracao: 20, titulo: 'Sementes crocantes' },
    fase8: { arquivo: 'midia/videos/fase-8.mp4', poster: 'midia/videos/fase-8.jpg', duracao: 10, titulo: 'Monte e sirva' },
  },
  som: {
    timerFim: 'synth:timer',
    celebrar: 'synth:celebrar',
    toque:    'synth:toque',
    enviar:   'synth:enviar',
  },
};

// Galeria do Meu perfil (Figma 872:8149: duas publicações, 161,5×106, a moqueca é a mais recente)
export const galeriaPerfil = ['moqueca', 'arrozDeForno'];
