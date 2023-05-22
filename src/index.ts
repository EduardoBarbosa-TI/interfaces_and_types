//Qual a diferença entre Interfaces e Types ?

interface IProfesssion{
    name: string;
}

interface IProfesssion{
    salary: number;
}

//Quando ciramos as interfaces estamos assinando um contrato em que qualquer classe que implemente essa interface, necessitará dos atributos, tipos e métodos que estão definidos na interface. Estabelecendo um padrão em todas as classes que implementarem essa interface.
//Com isso explica o erro a baixo, temos duas interfaces e nelas estão definidos tais atributos, porém a classe que implementa essa interface tem somente o atributo name.
//OBSERVAÇÃO: Utilizando duas interfaces na mesma classe e com o mesmo nome, porém atributos diferentes, permite executar uma merge declaration entre as interfaces.

const devTeste01: IProfesssion = {
    name: 'Eduardo'
}

//Forma certa, sem erros...
const devTeste02: IProfesssion = {
    name: 'Eduardo',
    salary: 2000
}

// E o type ?
// Com o type não conseguimos realizar a merge declaration, ele entende como duplicação de indentificador. Não podemos ter dois types com o mesmo nome, portanto o erro a baixo é gerado.
type TProfesssion = {
    name: string;
}

type TProfesssion = {
    salary: number;
}

const devTeste03: Professsion = {
    name: 'Eduardo',
}

//Forma correta
type Professsion = {
    name: string;
}


const devTeste04: Professsion = {
    name: 'Eduardo',
}

//Na utilização de mapped types conseguimos realizar um mapeamento de um tipo para outro, com isso necessitamos de uma estrutura definida para isso. Conforme o código a baixo

type Stringify<T> = {
    [P in keyof T]: string;
}

//Essa estrutura só conseguimos utilizar através do type, não consguimos utilizar uma interface para realizar o mapeamento de um tipo para o outro. Conforme o código a baixo.
//Não existe in e keyoff na interface
interface Stringify<T> {
    [P in keyof T]: string;
}

//O tipo genérico conseguimos utilizar tranquilamente nas interfaces.
interface IStringify<T> {
    name: T;
}

//Como dito anteriormente a interface é vista como um contrato que estabelecemos o formato dos objetos que irão implementar essa interface. Podendo conter a tipagem dos atributos, os atributos, métodos e funções.

interface Person {
    name: string;
}

//Já os types são visto como alias podemos utilizar os types em conjunto com tipos primitivos, como mostra o exemplo a baixo. Podemos declarar quantos tipos primitivos necessários.
type UserEmail =  string;
function sendEmail(email: UserEmail) {}
sendEmail('eduardobb@rede.ulbra.br');

type UserPassword =  string | number;
function sendPassword(senha: UserPassword) {}
sendPassword('%3$36@#235');