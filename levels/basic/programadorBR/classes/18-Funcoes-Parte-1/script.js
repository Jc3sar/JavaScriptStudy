
// function media(){
//     var n1 = 10;
//     var n2 = 8;;
//     var media = (n1 + n2) / 2;
//     console.log(media);
// }


function media(n1, n2){
    var media = (n1 + n2) / 2;
    // console.log(media);

    return media;
}


// Fazendo um teste ALETAÓRIO:
let results = new Array;
for (let i = 0; i < 5; i++){
    for (let j = 1; j < 6; j++)
        var test = i + j;
        results[i] = media(i, test)
    console.log(results[i]);
}

