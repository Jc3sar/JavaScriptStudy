// DATAS em em Javascript são Objetos,
// var a = new Date().getHours();

// var d = new Date();
// console.log(d);
/* E se eu quiser criar uma data específica?
    Esse é o formato:
    - var d1 = new Date(year, month, day, hours, minutes, seconds, miliseconds);

    [IMPORTANTE]
    Quando passamos o mês em formato de número, esse número vai oresponder ao index de um Array de meses, de 12 posições, onde 0 = Janeiro e 11 = Dez.
    Por isso 8 representa Setembro e não Agosto.
*/

d1 = new Date(2000, 2, 10); // Meses estão num Arra yde 12 posições;
console.log(d1);

// getDay(Pega o dia da semana)
// console.log(d1.getDay());

var dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
d2 = new Date();
console.log(d2);
console.log(d2.getDay()); // Mostra três porque Quarta está no índice/posição 3 do Array
console.log(dias[d2.getDay()]);
// // d2 = new Date(1000);
// // console.log(0);

