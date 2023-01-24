const validator = {
  /* isvalid: function () {
     console.log("validar cartão de crédito")
   }*/


  isValid: function (campoNumeroDoCartao) {
    const arrayCard = campoNumeroDoCartao.split("")
    let somaTotal = 0;
    let resultadoDaValidacao = false;
    for (let i = 0; i < campoNumeroDoCartao.length; i++) {
      let digito = parseInt(arrayCard[i]); // parseInt vai converter o primeiro argumento para uma string, vai analisar e retornar um inteiro ou NaN

      console.log("validar cartão de crédito" + digito)

      if (i % 2 == 0) {
        digito = digito * 2;
        if (digito > 9) {
          let digitoRestante = digito % 10; // 16 % 10 = 6
          digito = 1 + digitoRestante;// 1 + 6 = 7

        }
      }

      somaTotal = somaTotal + digito;
    }
    if (somaTotal % 10 == 0) {
      resultadoDaValidacao = true;
    }
    console.log('somaTotal ' + somaTotal)
    return resultadoDaValidacao;



  }



}







export default validator;
