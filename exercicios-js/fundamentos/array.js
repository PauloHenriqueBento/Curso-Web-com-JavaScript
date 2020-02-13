const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // Mostra quantos elementos tem no Array

valores.push({id: 3}, false, null, 'teste')// JS é fracamente tipada... permitindo varios tipo de dados num Array
console.log(valores)

console.log(valores.pop()) //exclui o ultimo elemento da Array
delete valores[0]
console.log(valores)

console.log(typeof valores)