
function criptografia(mensagem, chave) {
    return mensagem
        .split("")
        .map((char) => cifraletra(char, chave))
        .join("");
}


export default function decifraLetra(letra, chave) {
    return cifraletra(letra, -chave);
}

function cifraletra(letra, chave) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    const isLetter = alfabeto.includes(letra.toLowerCase());
    if (!isLetter) return letra;

    const letraIndex = alfabeto.indexOf(letra.toLowerCase());
    const novoIndex = (letraIndex + chave + 26) % 26;
    const novaLetra = alfabeto[novoIndex];

    
    return letra === letra.toUpperCase() ? novaLetra.toUpperCase() : novaLetra;
}


export { criptografia, cifraletra };
