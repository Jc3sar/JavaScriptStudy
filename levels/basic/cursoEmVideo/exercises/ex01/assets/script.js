// Criar um objeto para o que vai aparecer a mensagem;
// var msg = window.document.getElementById('msg');
// var img = window.document.getElementById('imagem'); // Esse id é diretamente buscado da imagem
// AGORA DICIONANDO EM UMA FUNÇÃO


function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem'); // Esse id é diretamente buscado da imagem
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;

    //Agora fazendo aparer a IMAGEM correta

    if (hora >= 0 && hora < 12){
        // BOM DIA

        img.src = 'assets/img/morning.png'; // Como eu peguei o elemento ID ali em cima do 'msg', aqui eu consigo alterar a imagem adicionando .src
        // Obs: Tem que colocar o nome certinho da iamgem;

        // Para mudar a cor de fundo:
        document.body.style.background = '#cad1e4';

    } else if (hora >= 12 && hora < 18){
        // BOA TARDE
        img.src = 'assets/img/afternoon.png';
        document.body.style.background = '#dc5734';
      
    } else{
        img.src = 'assets/img/night.png';
        document.body.style.background = ' #2c5985';
    }

}

// vai funcionar quando a págian carregar, logo eu preciso por o 'onload' no body e chamar a função carregar;



