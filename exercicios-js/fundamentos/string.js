const escola = "Cod3r"

console.log(escola.charAt(4)) // Mostra a letra na posição informada
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //Verifica na tabela ASC-II
console.log(escola.indexOf('3')) //Procura o caractérie na string 

console.log(escola.substring(1)) // Faz começar pelo indice 1
console.log(escola.substring(0, 3))// Faz começar pelo indice 0 até o indice 3 (não inclui o indice 3)

console.log('Escola '.concat(escola).concat("!")) //concatenar 
console.log(escola.replace(3, 'e')) // Troca o 3 pelo "e"

console.log('Ana,Maria,Pedro'.split(',')) // Converte em array (no caso separa semrpe que encontrar uma virgula)