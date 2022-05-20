/* 

Abaixo tem o resumo de três aulas do Gustavo Gunabara que eu assisti no metrô

AULA 5: 

VARIÁVEIS:

Os tipos PRIMITIVOS são:
Number (Infinity and NaN)
string
boolean
null
undefined
objetct
Array (Objetos)
functions (É um tipo primitivo) 

O comando Typeof Ajuda

------------------------------------------------

AULA 6: 
*/

var n1 = Number(window.prompt('Digite um número: ')); // Number(n) -> Conver para número inteiro
var n2 = Number(window.prompt('Digite outro número: '));
document.write("Teste com document.write");
var soma = n1 + n2;
window.alert("Soma = " + String(2)); // String(var) transforma em String. Pode ser toString também
// 

window.alert(`Testando o Placeholder do JavaScript, n1 é ${n1}`); // Tem que ser crase para o mesmo lado
var text = 'amor';
alert(`Palvara ${text} antes do toUpperCase and toLowerCase`);
alert(`Com to Uppser: ${text.toUpperCase()}`);
alert(`Com to Uppser: ${text.toLowerCase()}`);


var n3 = 1345.10
alert(n3.toFixed(2));// Converti para decinal fixo com duas casas

//Usando Vírgulas
alert(n3.toFixed(2).replace('.', ',')); // Acabei de converter . para vírgulas


//Convertendo para salário:
alert(n3.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
alert(n3.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}));
alert(n3.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}));