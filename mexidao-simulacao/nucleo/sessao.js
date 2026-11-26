// Memória da sessão (só enquanto a página estiver aberta; "Reiniciar simulação" limpa tudo).
// Única exceção à regra "sem memória": o nome informado em "Sobre você".
const inicial = () => ({ nome: '' });
export const sessao = inicial();
export function limparSessao() { Object.assign(sessao, inicial()); }
