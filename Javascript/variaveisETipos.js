//Criar e atribuir Variáveis
var age = 19
var email = 'jhondoe@email.com'
email = 'jhondoe@gmail.com'

// Variaveis são case sensitives
var produto = 'arroz'
var Produto = 'feijao'

//let - Let só pode ser declarado uma vez por escopo
let user = 'Jhon Doe'
{
    let user = 'Jhon Connor' //neste escopo pode redeclarar user
    console.log(user)
}
//let user = 'Jhon Connor'
console.log(user)

//const - cria uma variavel com valor fixo que não muda
const PI = 3.1454
// const PI = 2 não pode redeclarar no mesmo escopo

//Hoisting - por causa do hoisting, variáveis são declaradas primeiro que tudo
var firstName = 'Matheus'

//Nomes para variaveis
var userName //camel case
var user_name //snake case
//não pode
//var 1userName

//Concatenação
var firstName = 'Jhon'
var lastName = 'Doe'
var age = 70

console.log(firstName, lastName)
console.log(firstName + ' ' + lastName + ' has ' + age + ' years old!')

//Template Literals - Interpolação de Strings
console.log(`${firstName} ${lastName} has ${age + 10} years old!`)

var radius = 18
console.log(`A área de um circulo com o raio de ${radius} é de ${(Math.PI * radius ** 2).toFixed(2)}!`)


//Tipo Numérico
console.log(typeof (5))
console.log(typeof (-5))
console.log(typeof (2.443))
console.log(2.44 / 'Alo Mudo') // retorna NaN - Not a Number

//Tipo Booleano
console.log(true)
console.log(false)
var hasChecked = true
console.log(typeof (hasChecked))


//Undefined e Null
var isLoading
console.log(typeof (isLoading))
var isNull = null
console.log(typeof (isLoading))

//Conversão de Tipos - Type Casting
var value = '9'
console.log(typeof (value))
console.log(typeof (Number(value)))
var age = 18
console.log(typeof (age))
console.log(typeof (String(age)))
console.log(typeof (age.toString()))

var choice = 1
console.log(typeof (choice))
console.log(typeof (Boolean(choice)))

//Devemos tomar cuidado!! Com a Coerção de Tipos
console.clear()
console.log('10' + 5)
console.log(10 + '5')
console.log(10 - '5')






