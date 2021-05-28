//Meu primeiro código
/*comentário multi-linha ou 
comentário de bloco*/

//let name = "felipe";


// Declaração de variável (atributos/dados/propriedades) e valores (string, number, boolean, etc.)


/*




console.log(typeof "felipe")

let student = {
    name: "Felipe",
    age: 28,
    weight: 74.8,
    issubscribed: true
}
// Declaração de varável e atributos (atributos/dados/propriedades x valores)
console.log(typeof student)
// Dados são dados! Dados dentro de dados se torna objeto (object).

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg.`)
// Vários tipos de dados difenrentes ficam dentro de crases. O console sempre retorna ou mostra o que está contido nele. O exemplo acima é interpolação, dados declarados e dados não declarados (talvez uma string).

//Console.log("dkfl") //retornou anonymous

let students = []
// variável do tipo array

//students [
//    student
//]

//Reatribuição: variável students que recebe o dado student do tipo object na posição zero. Note que student já e um dado especificado (let). Subscreve a atribuição anterior (vazia).

let coutinho = {
    name: "Coutinho",
    age: 28,
    weight: 74.8,
    issubscribed: true
   
}

//students [1] = coutinho
//inserir linha no array não tão segura, ou
students [
    student,
    coutinho,
    fifi
]




//console.log(students)
//indefined

const contry = [
    Brasil
]

const states = [
"Acre-AC",	
"Alagoas-AL",
"Amapá-AP",       
"Amazonas-AM",
"Bahia-BA",	
"Ceará-CE",	
"Espírito Santo-ES",
"Goiás-GO",	
"Maranhão-MA",	
"Mato Grosso-MT",	
"Mato Grosso do Sul-MS",
"Minas Gerais-MG",
"Pará-PA",
"Paraíba-PB",
"Paraná-PR",
"Pernambuco-PE",
"Piauí-PI",
"Rio de Janeiro-RJ",
"Rio Grande do Norte-RN",
"Rio Grande do Sul-RS",	
"Rondônia-RO",	
"Roraima-RR",
"Santa Catarina-SC",
"São Paulo-SP",	
"Sergipe-SE",
"Tocantins-TO",
]

const municipios = [
    RiodeJaneiro
]

const regioes = [
    CidadeNova
    //tooltip para informar sobre regiões. Nome de regiões não são padronizados.
] 

//const Bairros = []

//const subRegioes = []

//console.log (typeof RiodeJAneiro)


let score = 90




document.querySelector ("form")
.addEventListener("submit", envent => {
    console.log("enviar formulário")
    
    event.preventDefault()
    //quando não tiver nada no formulário vazio enviar evento de falha acima.

})


document.getElementById('myImage').src='pic_bulboff.gif'
//No documento pega o elemento de id myImage e transforma sua ////fonte...


function criarParagrafo() {
    let para = document.createElement('p');
    para.textContent = 'Você clicou no botão!';
    document.body.appendChild(para);
  }
  
  const botoes = document.querySelectorAll('button');
  
  for(var i = 0; i < botoes.length ; i++) {
    botoes[i].addEventListener('click', criarParagrafo);
  }

new
0
% - resto_da_divisão
delete 
3**3 = trê elevado a três


pão = true
queijo = true
&& (and) vrificação de valores booleanos
 pão && queijo = true
 ou ||
 ! false

 ? então
 : senão

 (3 > 2 > 1) true depois 2 == 1

 ''




*/


/*

let input = Number
let number = 0 < Number < 1000000

let number / 100  return 0 : return result (que é um número inteiro)number == float return %
return 
*/


let score = 90

if (score>=90) {
    console.log(score)
}