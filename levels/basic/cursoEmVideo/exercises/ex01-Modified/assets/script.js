// OnLoad
// Pegar a imagem e a hora
var img = window.document.getElementById('imagem'); 
var msg = window.document.getElementById('msg');

function carregar(){
    var data = new Date();
    var hora = data.getHours();  
    msg.innerHTML = `Por enquanto são ${hora} horas`;

    // Mudar IMAGEM e Fundo
    if (hora >= 0 && hora < 12){
        img.src = 'assets/img/morning.png'; 
        document.body.style.background = '#cad1e4';
    } else if (hora >= 12 && hora < 18){
        img.src = 'assets/img/afternoon.png';
        document.body.style.background = '#dc5734';
    } else{
        img.src = 'assets/img/night.png';
        document.body.style.background = '#2c5985';
    }
}

  // OnClick
  function HoraAdicionada(){
    let horaUser = parseFloat(document.getElementById('horaUser').value);
    // msg.innerHTML = ``; (Redundante)
     // Dúvida, tem como dar Display nisso? Por estilo?
    // let header = document.getElementById('header');
    if (horaUser >= 0 && horaUser <= 12){
        img.src = 'assets/img/morning.png';
        document.body.style.background = '#cad1e4';
        msg.innerHTML = `Agora é ${horaUser} horas`;
    } else if (horaUser > 12 && horaUser <= 18){
        img.src = 'assets/img/afternoon.png';
        document.body.style.background = '#dc5734';
        msg.innerHTML = `Agora é ${horaUser} horas`;
    } else if (horaUser > 18 && horaUser <= 23){
        img.src = 'assets/img/night.png';
        document.body.style.background = '#2c5985';
        // document.body.style.display = 'none';
        msg.innerHTML = `Agora é ${horaUser} horas`;
    } else{
        alert("Digite o horário corretamente");
    }
}


/**
 * Isolar variaveis
 */

 /*
function functionA() {
    for (let i=0; i<5; i++) {
        console.log(i + " Mars is a planet");
    }
}
function functionB() {
    for (let i=0; i<5; i++) {
        console.log(i + " The sky is blue");
    }
}

*/

