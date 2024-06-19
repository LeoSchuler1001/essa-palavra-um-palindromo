function essaPalavraEUmPalindromo (palavra) {
    let separacaoDaPalavra = palavra.split('');
    let palavraInvertida = separacaoDaPalavra.reverse();
    let palavraUnidaAoContrario = palavraInvertida.join('');

    if (palavra.toLowerCase() === palavraUnidaAoContrario.toLowerCase()) {
        console.log ('Esta palavra é um palindromo!');
    } else {
        console.log ('Esta palavra não é um palindromo!');
    }
}

essaPalavraEUmPalindromo('Radar');
essaPalavraEUmPalindromo('radar');
essaPalavraEUmPalindromo('pipoca');

