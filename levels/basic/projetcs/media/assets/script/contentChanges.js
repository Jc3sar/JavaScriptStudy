// Pegando o que vai aparecer
var img = document.getElementById('img');
var nomeDoAluno = document.getElementById('nomeDoAluno');
var msgAluno = document.getElementById('msgAluno');




function carregar(){
    // img.src = 'assets/imgs/Happy.png';
    // nomeDoAluno.innerHTML = "TESTE";
    // msgAluno.innerHTML = "teste2";
    // let nome = document.querySelector('#nome').value;
    let nome = document.getElementById('nome').value;
    let nBio = parseFloat(document.getElementById('bio').value);
    let nMat = parseFloat(document.getElementById('mat').value);
    let nPort = parseFloat(document.getElementById('port').value)
    
    while (nBio || nMat || nPort > 10 || nBio || nMat || nPort < 0){
        alert('Digite uma nota entre 0 e 10');
        break;
    }

    // Fazendo o cálculo
    let media = (nBio + nMat + nPort) / 3;
   
    // Processando mensagem

    if (media >= 7){
        img.src = 'assets/imgs/Happy.png';
        nomeDoAluno.innerHTML = `Parabéns!, ${nome}`;
        msgAluno.innerHTML = `Você passou com ${media} de média`;
    } else if (media < 7){
        img.src = 'assets/imgs/Happy.png';
        nomeDoAluno.innerHTML = `Poxa, ${nome}, não foi dessa vez :/=`;
        msgAluno.innerHTML = `Você passou com ${media} de média`;
    }
    
    console.log(" Nome: " + nome + " Bio: " +  nBio + " Mat: " + nMat + " Port: " + nPort + " " + media);
   
    // console.log(media1())
} 



// A ideia e adicionar aqui futuramente TODO MUNDO!
// var alunosAprovados = [];

// Calculando a media
// function carregar (){
//     alunosAprovados[0] =  {
//         nome:  document.getElementById('nome').value,
//         nBio: parseFloat(document.getElementById('bio').value),
//         nMat: parseFloat(document.getElementById('mat').value),
//         nPort: parseFloat(document.getElementById('port').value),
//         media: nBio + nMat + nPort,
//     }
//     console.log(alunosAprovados[0]);
// }
