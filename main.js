var textoDoUsuario = document.getElementById("tDUsuario");
var testAnime = document.createElement("div");
var testUsuario = document.createElement("div");
var test = document.querySelector(".test");
var aquiUsuario = document.querySelector(".imagensDoUsuarioAqui");

var listaDoUsuarioAnimes = [];
var listaDoUsuarioFilmes = [];
var listaDoUsuarioJogos = [];
var listaFilmes = [
  "https://br.web.img3.acsta.net/c_310_420/pictures/17/04/19/21/08/577190.jpg",
  "https://br.web.img3.acsta.net/pictures/17/07/13/21/40/079851.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/93/98/96/20293294.jpg"
];
var listaAnimes = [
  "https://img1.ak.crunchyroll.com/i/spire3/40e6c04e05ce1efb08815b870a6d39331412797514_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire2/dc24870ae3c042db983cae330ffe60141644515734_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire4/8056a82e973dde98ebb82abd39dc69731564519729_full.jpg"
];
var listaJogos = [
  "https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png",
  "https://upload.wikimedia.org/wikipedia/pt/9/96/The_Last_of_Us_2_capa.png",

  "https://m.media-amazon.com/images/I/718-Zd5XQfL._AC_SY741_.jpg"
];

var limiteDeImagens = 3;
var contadorAnime = 0;
var imagensA = 0;
var imagensF = 0;
var imagensJ = 0;
var interruptorA = false;
var interruptorF = false;
var interruptorJ = false;
var adicionarA = false;
var adicionarF = false;
var adicionarJ = false;

function filmes() {
  var imagensDoUsuario = document.getElementById("imagenDoUsuario").value;
  test.appendChild(testAnime);
  testAnime.innerHTML = ``;
  adicionarA = false;
  adicionarF = true;
  adicionarJ = false;
  desenhaImagem(listaFilmes, testAnime);
  testUsuario.innerHTML = ``;
  desenhaImagem(listaDoUsuarioFilmes, testUsuario);
}

function animes() {
  var imagensDoUsuario = document.getElementById("imagenDoUsuario").value;
  test.appendChild(testAnime);
  testAnime.innerHTML = ``;
  adicionarA = true;
  adicionarF = false;
  adicionarJ = false;
  desenhaImagem(listaAnimes, testAnime);
  testUsuario.innerHTML = ``;
  desenhaImagem(listaDoUsuarioAnimes, testUsuario);
}

function jogos() {
  var imagensDoUsuario = document.getElementById("imagenDoUsuario").value;
  test.appendChild(testAnime);
  testAnime.innerHTML = ``;
  adicionarA = false;
  adicionarF = false;
  adicionarJ = true;
  desenhaImagem(listaJogos, testAnime);
  testUsuario.innerHTML = ``;
  desenhaImagem(listaDoUsuarioJogos, testUsuario);
}

function insira() {
  var imagensDoUsuario = document.getElementById("imagenDoUsuario").value;
  aquiUsuario.appendChild(testUsuario);
  if (adicionarA) {
    if (listaDoUsuarioAnimes.length < limiteDeImagens) {
      desenhaImagemDoUsuario(
        listaDoUsuarioAnimes,
        imagensDoUsuario,
        interruptorA,
        imagensA
      );
      retornaImagens(imagensA);
    }
  }
  if (adicionarF) {
    if (listaDoUsuarioFilmes.length < limiteDeImagens) {
      desenhaImagemDoUsuario(
        listaDoUsuarioFilmes,
        imagensDoUsuario,
        interruptorF,
        imagensF
      );
      retornaImagens(imagensF);
    }
  }
  if (adicionarJ) {
    if (listaDoUsuarioJogos.length < limiteDeImagens) {
      desenhaImagemDoUsuario(
        listaDoUsuarioJogos,
        imagensDoUsuario,
        interruptorJ,
        imagensJ
      );
      retornaImagens(imagensJ);
    }
  }
}
function desenhaImagem(array, tipoDeLista) {
  for (let i = 0; i < array.length; i++) {
    tipoDeLista.innerHTML += `<img src=${array[i]}>`;
  }
}
function desenhaImagemDoUsuario(
  tipoDeListaDoUsuario,
  urlDaImagemDoUsuario,
  interruptor,
  imagens
) {
  let contador = 0;
  for (let i = -1; i < tipoDeListaDoUsuario.length; i++) {
    interruptor = false;
    if (tipoDeListaDoUsuario.length == 0) {
      imagens += tipoDeListaDoUsuario.length;
      tipoDeListaDoUsuario.push(urlDaImagemDoUsuario);
      interruptor = true;
      break;
    }
    if (
      urlDaImagemDoUsuario != tipoDeListaDoUsuario[contador] &&
      urlDaImagemDoUsuario != tipoDeListaDoUsuario[contador + 1] &&
      urlDaImagemDoUsuario != tipoDeListaDoUsuario[contador + 2]
    ) {
      interruptor = true;
      imagens += tipoDeListaDoUsuario.length;
      tipoDeListaDoUsuario.push(urlDaImagemDoUsuario);
      textoDoUsuario.innerHTML =
        "insira o endereço das imagens que estão no seu top 3";
      break;
    }
    textoDoUsuario.innerHTML =
      "Voce tentou insirir uma imagem duplicada, tente uma nova imagem";
  }
  if (interruptor) {
    testUsuario.innerHTML += `<img src=${tipoDeListaDoUsuario[imagens]}>`;
    console.log(imagens + " primeiro");
  }
  if (imagens == 2) {
    textoDoUsuario.innerHTML =
      "Parabéns, voce tem um excelente gosto. Esperimente fazer um top 3 clicando nas outras lista usando os botões acima";
    console.log(imagens + " segunda");
  }
}
function retornaImagens(imagens) {
  return imagens;
}
