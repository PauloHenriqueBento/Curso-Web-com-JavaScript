// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) //resultar em 5
imprimirSoma(2) //vai dar NaN (Not a Number), pois o b será undefined
imprimirSoma(2, 3, 4, 5 ,6 ,7) // vai em 5, da 3º casa em diante o JS vai ignorar
imprimirSoma() // NaN

// Funcao com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // Retornar 2, diferente do anterior, o B é definido inicialmente como 0
console.log(soma())// Por a não ter nada definido inicialmente, então ele irá encorporar Undefined, logo retornando NaN
