// Documentação viva do design system: renderiza os componentes reais de componentes/ com os dados de exemplo.
import * as C from './componentes/index.js';
import { receitas, pessoas, avaliacoes } from './dados/conteudo.js';

const cores = [['background', '#ECEAD1'], ['surface', '#FBF7EF'], ['surfaceAlt', '#F3F1E8'], ['border', '#E2DBCD'], ['text', '#3A4033'], ['muted', '#727362'], ['primary', '#D27A33'], ['primaryStrong', '#AD5D1C'], ['primarySoft', '#E3A663'], ['link', '#AE4F35'], ['green', '#97C064'], ['greenMedium', '#88AF52'], ['green2', '#3F8C41'], ['greenStrong', '#19632D'], ['greenSoft', '#C8FAAC'], ['selected', '#DFDDA1'], ['timeMedium', '#FAE5AC'], ['timeLong', '#FAC1AC']];
const textos = [['txt-titulo', 'Título · Elms Sans ExtraBold 30/36'], ['txt-secao', 'Seção · Elms Sans ExtraBold 26/32'], ['txt-cabecalho', 'Cabeçalho · Elms Sans ExtraBold 17/22'], ['txt-acao', 'Ação · Elms Sans ExtraBold 14/20'], ['txt-acao-p', 'Ação pequena · Elms Sans Bold 12/16'], ['txt-corpo', 'Corpo · Nunito 14/21'], ['txt-apoio', 'Apoio · Nunito 13/20'], ['txt-rotulo', 'Rótulo · Nunito Bold 13/18'], ['txt-rotulo-p', 'Rótulo pequeno · Nunito Bold 12/18'], ['txt-pequeno', 'Pequeno · Nunito 12/18'], ['txt-sobretitulo', 'SOBRETÍTULO · NUNITO EXTRABOLD 11/16'], ['txt-tag', 'Tag · Nunito ExtraBold 10/14']];

const secoes = [
  ['Cores', 'estilos/ds/tokens.css', '--cor-*', `<div class="ds-cores">${cores.map(([n, h]) => `<div class="ds-cor"><span style="background:var(--cor-${n})"></span><b>${n}</b><code>${h}</code><code>--cor-${n}</code></div>`).join('')}</div>`],
  ['Tipografia', 'estilos/ds/base.css', '.txt-*', textos.map(([c, t]) => `<p class="${c}">${t}</p><code>.${c}</code>`).join('')],
  ['Botão', 'componentes/botao.js', '.botao .botao--principal|secundario|desabilitado|verde|compacto', ['principal', 'secundario', 'desabilitado', 'verde'].map((t) => C.botao('Botão ' + t, { tipo: t })).join('') + C.botao('Editar Perfil', { tipo: 'principal', tamanho: 'compacto', icone: 'lapis' })],
  ['Link de texto e ação', 'componentes/botao.js', '.link-texto · .link-acao', C.linkTexto('Ver receita completa') + C.linkAcao('Ver mais', { seta: true, primaria: true }) + C.linkAcao('Ver perfil')],
  ['Campo de texto e Seletor', 'componentes/campo.js', '.campo .campo__entrada · .seletor', C.campo({ rotulo: 'E-mail', placeholder: 'voce@exemplo.com' }) + C.campo({ rotulo: 'Senha', placeholder: 'Digite sua senha', tipo: 'password', acao: 'Mostrar' }) + C.seletor({ rotulo: 'Qual seu nível na cozinha?', valor: 'Básico' }) + C.campoMultilinha({ rotulo: 'Registro do preparo', placeholder: 'Adicione seu relato aqui.' })],
  ['Busca', 'componentes/busca.js', '.busca .busca__funil--ativo · .busca--alta · .busca--painel', C.busca({ placeholder: 'Busque por receitas' }) + C.busca({ placeholder: 'Busque por receitas', funilAtivo: true }) + C.busca({ placeholder: 'Pesquise aqui', funil: false, painel: true })],
  ['Chip', 'componentes/chip.js', '.chip .chip--selecionado · .grupo-chips--grade2|grade3', C.grupoChips(C.chip('Vegano') + C.chip('Vegetariano', { selecionado: true }) + C.chip('Lactose', { alto: true })) + C.grupoChips(['Brócolis', 'Chuchu', 'Beringela', 'Alho-poró', 'Pimentão', 'Vagem'].map((s, i) => C.chip(s, { selecionado: !i })).join(''), { tipo: 'grade3' })],
  ['Tag', 'componentes/tag.js', '.tag .tag--curto|medio|longo|custo-*|categoria', `<div class="grupo-tags">${C.tagTempo('15 min')}${C.tagTempo('35 min')}${C.tagTempo('50 min')}${C.tagCusto('$')}${C.tagCusto('$$')}${C.tagCusto('$$$')}${C.tagCategoria('Em família')}</div>`],
  ['Opção com seletor', 'componentes/opcao.js', '.opcao .opcao--selecionada', C.grupoOpcoes(C.opcao('Iniciante') + C.opcao('Básico', { selecionada: true }), 'data-opcao-grupo')],
  ['Aba', 'componentes/aba.js', '.abas .aba--ativa · .abas-sublinhado', C.abas(['Ingredientes', 'Equipamentos', 'Informações'], 0) + '<br>' + C.abasSublinhado(['Publicações', 'Atividade'], 0)],
  ['Aba do filtro (Painel de filtros)', 'componentes/aba-filtro.js', '.painel-filtros .aba-filtro--ativa', C.painelFiltros(['Tipo · 1', 'Ingredientes', 'Preparo'].map((a, i) => C.abaFiltro(a, !i, i)).join(''), C.chip('Vegano') + C.chip('Vegetariano', { selecionado: true }), 0)],
  ['Card de receita', 'componentes/card-receita.js', '.card-receita', C.cardReceita(receitas[0])],
  ['Item da lista', 'componentes/item-lista.js', '.item-lista .item-lista--marcado', C.listaItens(C.itemLista('Arroz branco', '1 xícara', { selecao: true }) + C.itemLista('Cenoura', '½ unidade', { selecao: true, marcado: true }) + C.itemLista('Refratário', 'Pequeno'))],
  ['Etapa do progresso', 'componentes/etapa-progresso.js', '.progresso-etapas .etapa-progresso--*', C.progressoEtapas(5, 1).replace('transform:translateX(-0px)', '') + '<br>' + C.progressoEtapas(8, 4, { fino: true })],
  ['Marcador e Etapa do método', 'componentes/etapa-metodo.js', '.marcador-etapa · .etapa-metodo', C.etapaMetodo(1, 'Prepare os ingredientes', 'Preaqueça o forno a 200 °C.')],
  ['Timer', 'componentes/timer.js', '.timer .timer--andamento|pausado|fim', C.timer(5, 'Iniciar timer') + C.timer(20, 'Cozinhar').replace('class="timer"', 'class="timer timer--andamento"')],
  ['Estrelas e Contribuição', 'componentes/estrelas.js · contribuicao.js', '.estrelas · .contribuicao', C.estrelas(4.6) + C.contribuicao(avaliacoes.lista[0])],
  ['Mensagem de estado e Avisos', 'componentes/mensagem-estado.js · aviso.js', '.mensagem-estado · .aviso', C.mensagemEstado('Instagram conectado', 'Sua conta foi conectada.', { check: true }) + C.avisoSucesso('Postagem publicada') + C.avisoInfo('Conteúdo ilustrativo de wireframe.') + C.avisoDica('Deixe de molho por 10 min.')],
  ['Navegação principal', 'componentes/navegacao.js', '.area-navegacao .navegacao__destino--ativo', `<div class="ds-relativo">${C.navegacao('inicio')}</div>`],
  ['Ícone e Ajuda da IA · Identidade da IA', 'componentes/chat.js', '.icone-ia · .ajuda-ia · .identidade-ia', C.ajudaIA('', false) + C.ajudaIA('', true) + C.identidadeIA('Assistentes', 'Online')],
  ['Balões de chat e Barra de envio', 'componentes/chat.js', '.balao-chat--voce|assistente|digitando · .barra-envio', C.balaoVoce('Como substituir um ingrediente?', '14:02') + C.balaoAssistente('Para a abobrinha, <b>brócolis</b> funciona bem.') + '<div class="mensagem"><div class="balao-chat balao-chat--assistente balao-chat--digitando"><i></i><i></i><i></i></div></div>' + C.barraEnvio('Digite sua mensagem…')],
  ['Vídeo', 'componentes/video.js', '.video · .controle-video · .linha-tempo', C.video('fase1')],
  ['Postagem', 'componentes/postagem.js', '.postagem · .interacao', C.postagem({ nome: pessoas.juliane.nome, meta: '@juliane.cozinha · Há 2 h', autorPessoa: pessoas.juliane, midia: 'escondidinho', texto: 'Uma ideia simples para usar abobrinha.', curtidas: 128, comentarios: 18 })],
  ['Pessoa e Avatar', 'componentes/pessoa.js · avatar.js', '.pessoa-card · .pessoa-linha · .avatar', C.pessoaCard(pessoas.thiago, '8 receitas postadas', { nomeGrande: true }) + C.pessoaLinha(['AS', 'Ana Souza', '@ana.cozinha', true]) + C.avatarNivel(pessoas.erika, 3)],
  ['Lista de acessos e Interruptor', 'componentes/lista-acessos.js · interruptor.js', '.lista .acesso · .interruptor', C.lista(C.acesso('Contas vinculadas', 'corrente') + C.acesso('Sair', 'sair', { perigo: true, seta: false })) + C.interruptor(true) + C.interruptor(false)],
  ['Conquista e Barra de progresso', 'componentes/conquista.js · barra-progresso.js', '.conquista--ativa · .barra-progresso', C.conquistas([['Primeiro prato', 'chapeu', true], ['Zero desperdício', 'folha', false]]) + C.barraProgresso(60)],
  ['Adicionar foto', 'componentes/adicionar-foto.js', '.adicionar-foto · .anexar-foto', C.adicionarFoto({ titulo: 'Adicionar foto do prato', texto: 'Toque para tirar ou escolher uma foto', trocar: 'Trocar foto' }) + C.anexarFoto('Anexe sua foto aqui')],
  ['Áreas reservadas', 'componentes/reservado.js', '.reservado--vetor|ilustracao', C.reservado('vetor aqui', 'vetor') + C.reservado('espaço para ilustração vetorizada', 'ilustracao')],
  ['Teclado do sistema', 'componentes/teclado.js', '.teclado', C.teclado('buscar')],
];

// No celular ou tablet (nucleo/bloqueio.js) a documentação não é montada.
if (!document.documentElement.classList.contains('so-pc')) {
  const id = (t) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  document.getElementById('menu').innerHTML = secoes.map(([t]) => `<a href="#${id(t)}">${t}</a>`).join('');
  document.getElementById('ds').innerHTML = secoes.map(([t, arq, classes, html]) => `<section class="ds-doc__secao" id="${id(t)}">
    <div class="ds-doc__cab"><h2>${t}</h2><code>${arq}</code><code>${classes}</code></div>
    <div class="ds-doc__exemplo">${html}</div></section>`).join('');
  requestAnimationFrame(() => requestAnimationFrame(() => C.animarBarras(document)));
}
