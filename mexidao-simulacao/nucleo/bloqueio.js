/* Bloqueio para celular e tablet: a simulação só abre no computador.
   Script comum (não é módulo) carregado no <head>, antes de tudo: marca <html class="so-pc">
   e o app nem chega a iniciar. Para desligar o bloqueio, mude BLOQUEAR para false. */
(function () {
  var BLOQUEAR = true;
  if (!BLOQUEAR) return;
  var ua = navigator.userAgent || '';
  var celularOuTablet = /Android|iPhone|iPad|iPod|Mobile|Windows Phone|webOS|BlackBerry|Opera Mini|IEMobile|Silk|Kindle/i.test(ua);
  var uaMobile = !!(navigator.userAgentData && navigator.userAgentData.mobile);
  var iPadOS = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;             // iPad que se identifica como Mac
  var soToque = !!(window.matchMedia && matchMedia('(pointer: coarse)').matches && !matchMedia('(any-pointer: fine)').matches); // sem mouse/trackpad
  if (celularOuTablet || uaMobile || iPadOS || soToque) document.documentElement.classList.add('so-pc');
})();
