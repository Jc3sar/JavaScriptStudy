const hamburguer = document.querySelector('.hamburguer'); // Pega essa classe
const navMenu = document.querySelector('.nav-menu'); // Pega essa classe

/* querySelector
- Retorna o primeiro elemento dentro do documento
var el = document.querySelector(".myclass");
Neste exemplo, o primeiro elemento no documento com a classe "myclass" é retornado:

*/

hamburguer.addEventListener("click", () => { // Assim que eu clicar no hamburguer, eu vou 'ativar' a classe.
    hamburguer.classList.toggle("active"); /*Pesquisar o que é */
    navMenu.classList.toggle("active");
})

// Aqui em baixo ele remove o 'active';
document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", 
()=>{ // Se eu dexar 'nav-link' como no video não funciona
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}))

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
//         hamburguer.classList.remove("active");
//         navMenu.classList.remove("active");
//     }));

    

// Talvez, eu tenha que ver sore esse classlist (claro, além dos demais);
