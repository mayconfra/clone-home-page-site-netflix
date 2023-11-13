/*JavaScript/DOM*/

/*Respostas da área de perguntas frequentes.*/

let cont = 0;
function pergunta() {
    cont+=1;
    if(cont == 1) {
        document.getElementById("simbolo").innerHTML="<";
        document.getElementById("resp").style.padding="3%";
        document.getElementById("resp").innerHTML="A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries que quiser, quando e onde quiser, tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.";
    } else if(cont == 2) {
        document.getElementById("resp").innerHTML="";
        document.getElementById("resp").style.padding="0";
        document.getElementById("simbolo").innerHTML=">";
        cont = 0;
    }
}

let contDois = 0;
function perguntaDois() {
    contDois+=1;
    if(contDois == 1) {
        document.getElementById("simbolo-dois").innerHTML="<";
        document.getElementById("resp-dois").style.padding="3%";
        document.getElementById("resp-dois").innerHTML="Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras.";
    } else if(contDois == 2) {
        document.getElementById("resp-dois").innerHTML="";
        document.getElementById("resp-dois").style.padding="0";
        document.getElementById("simbolo-dois").innerHTML=">";
        contDois = 0;
    }
}

let contTres = 0;
function perguntaTres() {
    contTres+=1;
    if(contTres == 1) {
        document.getElementById("simbolo-tres").innerHTML="<";
        document.getElementById("resp-tres").style.padding="3%";
        document.getElementById("resp-tres").innerHTML="Um plano com anúncios é uma excelente maneira de assistir a séries e filmes por um preço mais baixo. Você pode assistir ao seu conteúdo favorito com intervalos limitados para anúncios (sujeito a restrições de localização e aparelho). Este plano não permite fazer downloads e não inclui algumas séries e filmes com restrições de licenciamento.";
    } else if(contTres == 2) {
        document.getElementById("resp-tres").innerHTML="";
        document.getElementById("resp-tres").style.padding="0";
        document.getElementById("simbolo-tres").innerHTML=">";
        contTres = 0;
    }
}

let contQuatro = 0;
function perguntaQuatro() {
    contQuatro+=1;
    if(contQuatro == 1) {
        document.getElementById("simbolo-quatro").innerHTML="<";
        document.getElementById("resp-quatro").style.padding="3%";
        document.getElementById("resp-quatro").innerHTML="Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.";
    } else if(contQuatro == 2) {
        document.getElementById("resp-quatro").innerHTML="";
        document.getElementById("resp-quatro").style.padding="0";
        document.getElementById("simbolo-quatro").innerHTML=">";
        contQuatro = 0;
    }
}

let contCinco = 0;
function perguntaCinco() {
    contCinco+=1;
    if(contCinco == 1) {
        document.getElementById("simbolo-cinco").innerHTML="<";
        document.getElementById("resp-cinco").style.padding="3%";
        document.getElementById("resp-cinco").innerHTML="A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento você pode começar ou encerrar a sua assinatura a qualquer momento.";
    } else if(contCinco == 2) {
        document.getElementById("resp-cinco").innerHTML="";
        document.getElementById("resp-cinco").style.padding="0";
        document.getElementById("simbolo-cinco").innerHTML=">";
        contCinco = 0;
    }
}

let contSeis = 0;
function perguntaSeis() {
    contSeis+=1;
    if(contSeis == 1) {
        document.getElementById("simbolo-seis").innerHTML="<";
        document.getElementById("resp-seis").style.padding="3%";
        document.getElementById("resp-seis").innerHTML="A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.";
    } else if(contSeis == 2) {
        document.getElementById("resp-seis").innerHTML="";
        document.getElementById("resp-seis").style.padding="0";
        document.getElementById("simbolo-seis").innerHTML=">";
        contSeis = 0;
    }
}

let contSete = 0;
function perguntaSete() {
    contSete+=1;
    if(contSete == 1) {
        document.getElementById("simbolo-sete").innerHTML="<";
        document.getElementById("resp-sete").style.padding="3%";
        document.getElementById("resp-sete").innerHTML="A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis. O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.";
    } else if(contSete == 2) {
        document.getElementById("resp-sete").innerHTML="";
        document.getElementById("resp-sete").style.padding="0";
        document.getElementById("simbolo-sete").innerHTML=">";
        contSete = 0;
    }
}
