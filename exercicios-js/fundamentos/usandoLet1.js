let numero = 1
{
    let numero = 2
    console.log('Dentro= ', numero)
}
console.log('Fora =', numero)

//Diferente de Var, o let ele vai procurar primeiro a variavel no escopo menor (bloco onde ele tá)
//Caso ele não encontre, ele vai encontrar no escopo mais abrangente.