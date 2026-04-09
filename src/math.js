/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo filter/map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros) {
    return numeros
        .filter(num => num % 2 === 0)    
        .map(num => num * 2)             
        .reduce((acc, curr) => acc + curr, 0); 
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros) {
    let soma = 0; // Variável acumuladora

    for (let i = 0; i < numeros.length; i++) {
        // Verifica se o número atual é par
        if (numeros[i] % 2 === 0) {
            const dobro = numeros[i] * 2;
            soma = soma + dobro;
        }
    }

    return soma;
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
