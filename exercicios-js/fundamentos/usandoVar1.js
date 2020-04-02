{
    {
        {
            { 
                var sera = 'Será?'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

// Em outras linguagem a variavel 'sera', só seria visivel dentro do bloco
// mas no JS, é possivel ver a variavel fora do bloco

function teste() {
    var local = 123
    console.log(local) // Visivel
}

teste()
console.log(local) //  Não visivel

// Já nesse caso, como a variavel tá dentro de uma função, não é possivel ver fora da function
// Se fosse criado fora da function, a varaivel seria global e seria visivel.
