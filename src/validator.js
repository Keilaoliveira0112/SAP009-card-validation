const validator = {
  /* isvalid: function () {
     console.log("validar cartão de crédito")
   }*/


  isValid: function (campoNumeroDoCartao) {
    const arrayCard = campoNumeroDoCartao.split("")
    let somaTotal = 0;
    var resultadoDaValidacao = false;
    for (let i = 0; i < campoNumeroDoCartao.length; i++) {
      let digit = parseInt(arrayCard[i]); // parseInt vai converter o primeiro argumento para uma string, vai analisar e retornar um inteiro ou NaN

      console.log("validar cartão de crédito" + digit)

      if (i % 2 == 0) {
        digit = digit * 2;
        if (digit > 9) {
          var digitoRestante = digit % 10; // 16 % 10 = 6
          digit = 1 + digitoRestante;// 1 + 6 = 7

        }
      }

      somaTotal = somaTotal + digit;
      //o push() vai adicionar1 ou + elementos ao final de um array e retorna o novo cumprimento de array.
    }
    if (somaTotal % 10 == 0) {
      resultadoDaValidacao = true;
    }
    console.log('somaTotal ' + somaTotal)
    return resultadoDaValidacao;
    /*else {
    somaTotal = somaTotal + arrayCard[i];
  }
    /*const frontBackToFront = arrayCard.reverse();
    for (let i = 0; i < frontBackToFront.length; i++) {
      if ((i + i) % 2 === 0) {
        frontBackToFront[i] = frontBackToFront[i] * 2;
      }
      if (frontBackToFront[i] >= 10) {
        frontBackToFront[i] = frontBackToFront[i] - 9;
      }
    }

    let somaTotal = 0;
    for (let i = 0; i < frontBackToFront.length; i++) {
      somaTotal = somaTotal + frontBackToFront[i];
    }
    return somaTotal % 10 === 0;*/


  }



}







export default validator;
