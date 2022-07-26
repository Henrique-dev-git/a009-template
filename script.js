// let nome = prompt("qual o seu nome?")
// let cor = prompt("qual sua cor favorita?")

// let mensagem= "a cor favorita de "+nome+" é "+cor;
// console.log(mensagem);

// let mensagem2 =`a cor favorida de ${nome} é ${cor}`;
// console.log(mensagem2);

// const citacao = prompt("qual sua citação favorita?")
// console.log(`e a citação é ${citacao}`)

// const mensagem1 = `nome: ${nome}
// cor favorita: ${cor}
// citação: ${citacao}`;

// console.log(mensagem1);

// console.log(`o nome ${nome.toLocaleUpperCase()} poossui ${nome.length} caracteres.`);

// console.log (`o nome possui a letra A ${nome.includes("A")}`);

const nomeDoUsuario = prompt("qual o seu nome ?")
let email = prompt("qual seu email?")

console.log (`o email ${email} foi cadastrado com sucesso!
boas vindas, ${nomeDoUsuario}!`)

console.log(`seu nome tem ${nomeDoUsuario.length} caracteres`);

let novaString = `seu email agora é ${email.replace("r","l")}`

console.log(novaString);

console.log(email.includes("@"));
