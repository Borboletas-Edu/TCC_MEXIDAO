// DS · Marcador de etapa (Concluído / Pendente) · 32
export const marcadorEtapa = (n, estado = 'pendente') => `<span class="marcador-etapa marcador-etapa--${estado}">${n}</span>`;
