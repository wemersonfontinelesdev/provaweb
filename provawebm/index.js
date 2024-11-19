import { criptografia } from "./criptografia.js";
import decifraLetra from "./criptografia.js";


const mensagem = "Hello World!";
const chave = 3;

console.log("Mensagem original:", mensagem);


const mensagemCriptografada = criptografia(mensagem, chave);
console.log("Mensagem criptografada:", mensagemCriptografada);


const mensagemDescriptografada = mensagemCriptografada
    .split("")
    .map((char) => decifraLetra(char, chave))
    .join("");
console.log("Mensagem descriptografada:", mensagemDescriptografada);
