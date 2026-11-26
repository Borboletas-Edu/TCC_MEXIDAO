// Ilustrações animadas por partes (geradas a partir das artes do Figma: cada parte é um pedaço separado da arte).
// Com "svg": a ilustração é uma animação SVG pronta (midia/animacoes), posicionada no mesmo espaço da arte antiga
//   (x, y, largura, altura em % da caixa w×h). As animações respeitam prefers-reduced-motion.
// papel: corpo/balanco/mexer/respira = movimento leve · chapeu = flutua · ponto = aparece e some (como a IA digitando)
//        selo = pulsa · brilho = cintila · atraso em segundos.
export const ilustracoes = {
 "mascotes-conectando": {
  "w": 1032,
  "h": 456,
  "partes": [
   {
    "src": "midia/mascotes/partes/mascotes-conectando-6.png",
    "x": 60.465,
    "y": 30.921,
    "w": 37.5,
    "h": 61.184,
    "papel": "corpo",
    "atraso": 0.5
   },
   {
    "src": "midia/mascotes/partes/mascotes-conectando-7.png",
    "x": 2.422,
    "y": 35.088,
    "w": 50.291,
    "h": 54.167,
    "papel": "corpo",
    "atraso": 0
   },
   {
    "src": "midia/mascotes/partes/mascotes-conectando-1.png",
    "x": 52.907,
    "y": 7.895,
    "w": 5.426,
    "h": 12.5,
    "papel": "ponto",
    "atraso": 0.25
   },
   {
    "src": "midia/mascotes/partes/mascotes-conectando-2.png",
    "x": 38.857,
    "y": 16.009,
    "w": 5.523,
    "h": 12.281,
    "papel": "ponto",
    "atraso": 0
   },
   {
    "src": "midia/mascotes/partes/mascotes-conectando-3.png",
    "x": 65.504,
    "y": 16.009,
    "w": 5.523,
    "h": 12.281,
    "papel": "ponto",
    "atraso": 0.5
   },
   {
    "src": "midia/mascotes/partes/mascotes-conectando-4.png",
    "x": 17.442,
    "y": 18.64,
    "w": 11.822,
    "h": 25.658,
    "papel": "chapeu",
    "atraso": 0
   },
   {
    "src": "midia/mascotes/partes/mascotes-conectando-5.png",
    "x": 78.295,
    "y": 21.272,
    "w": 12.597,
    "h": 26.535,
    "papel": "chapeu",
    "atraso": 0.7
   }
  ]
 },
 "mascotes-conectado": {
  "w": 1034,
  "h": 640,
  "partes": [
   {
    "src": "midia/mascotes/partes/mascotes-conectado-4.png",
    "x": 59.381,
    "y": 50.938,
    "w": 37.331,
    "h": 43.594,
    "papel": "corpo",
    "atraso": 0.5
   },
   {
    "src": "midia/mascotes/partes/mascotes-conectado-5.png",
    "x": 1.644,
    "y": 53.75,
    "w": 50,
    "h": 38.594,
    "papel": "corpo",
    "atraso": 0
   },
   {
    "src": "midia/mascotes/partes/mascotes-conectado-1.png",
    "x": 37.621,
    "y": 1.719,
    "w": 30.271,
    "h": 47.656,
    "papel": "selo",
    "atraso": 0
   },
   {
    "src": "midia/mascotes/partes/mascotes-conectado-2.png",
    "x": 16.538,
    "y": 42.031,
    "w": 11.799,
    "h": 18.281,
    "papel": "chapeu",
    "atraso": 0
   },
   {
    "src": "midia/mascotes/partes/mascotes-conectado-3.png",
    "x": 77.176,
    "y": 43.906,
    "w": 12.379,
    "h": 19.062,
    "papel": "chapeu",
    "atraso": 0.7
   }
  ]
 },
 "mascotes-cozinhando": {
  "w": 1022,
  "h": 706,
  "svg": "midia/animacoes/batendo-massa-v2.svg",
  "x": 1.03,
  "y": 2.13,
  "largura": 97.73,
  "altura": 97.89
 },
 "cachorro-ingredientes": {
  "w": 478,
  "h": 484,
  "svg": "midia/animacoes/cachorro-ingredientes.svg",
  "x": 1.73,
  "y": -0.05,
  "largura": 97.42,
  "altura": 112.53
 },
 "gato-trilha": {
  "w": 420,
  "h": 528,
  "partes": [
   {
    "src": "midia/mascotes/partes/gato-trilha-1.png",
    "x": 0,
    "y": 0,
    "w": 100,
    "h": 100,
    "papel": "balanco",
    "atraso": 0
   },
   {
    "src": "midia/mascotes/partes/gato-trilha-2.png",
    "x": 14.286,
    "y": 4.735,
    "w": 30.952,
    "h": 23.106,
    "papel": "chapeu",
    "atraso": 0.3
   }
  ]
 },
 "mascotes-ia": {
  "w": 568,
  "h": 414,
  "partes": [
   {
    "src": "midia/mascotes/partes/mascotes-ia-1.png",
    "x": 7.042,
    "y": 5.797,
    "w": 85.915,
    "h": 85.749,
    "papel": "respira",
    "atraso": 0
   }
  ]
 },
 "banner-gato": {
  "w": 1014,
  "h": 444,
  "svg": "midia/animacoes/gato-acenando-v2.svg",
  "x": 49.63,
  "y": 0.72,
  "largura": 44.64,
  "altura": 99.16
 },
 "cachorro": {
  "w": 520,
  "h": 580,
  "svg": "midia/animacoes/cachorro-temperos.svg",
  "x": -25.22,
  "y": -33.14,
  "largura": 156.03,
  "altura": 153.37
 },
 "gato-e-cachorro": {
  "w": 645,
  "h": 410,
  "svg": "midia/animacoes/lavando-as-maos-v3.svg",
  "x": -8.79,
  "y": -39.17,
  "largura": 120.32,
  "altura": 165.58
 }
};
