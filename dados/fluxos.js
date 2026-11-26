// MAPA DE NAVEGAÇÃO (espelho do fluxograma da seção "C · Fluxograma" no Figma, node 929:8527).
// Cada fluxo aponta para a tela onde começa. Cada tela informa seu fluxo, nome e frame de origem
// no Figma (o painel lateral mostra isso). As ligações "botão → destino" ficam em cada arquivo de tela.

export const fluxos = [
  { n: 0, nome: 'Mapa geral', inicio: 'splash' },
  { n: 1, nome: 'Login e cadastro', inicio: 'inicial' },
  { n: 2, nome: 'Onboarding e preferências', inicio: 'onboarding' },
  { n: 3, nome: 'Home, busca e filtros', inicio: 'home' },
  { n: 4, nome: 'Receita e adaptação', inicio: 'detalhes' },
  { n: 5, nome: 'Preparo e conclusão', inicio: 'preparo', params: { etapa: 0, balao: true } },
  { n: 6, nome: 'Trilha de aprendizado', inicio: 'trilha' },
  { n: 7, nome: 'Comunidade · Feed', inicio: 'comunidade' },
  { n: 8, nome: 'Comunidade · Conexões', inicio: 'buscar-pessoas' },
  { n: 9, nome: 'Perfil e configurações', inicio: 'meu-perfil' },
];

// Abas da barra de navegação (Fluxo 0)
export const abas = [
  { id: 'inicio', tela: 'home', icone: 'panela', rotulo: 'Início' },
  { id: 'comunidade', tela: 'comunidade', icone: 'pessoas', rotulo: 'Comunidade' },
  { id: 'trilha', tela: 'trilha', icone: 'trilha', rotulo: 'Trilha' },
  { id: 'perfil', tela: 'meu-perfil', icone: 'chapeu', rotulo: 'Perfil' },
];
