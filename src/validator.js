const validator = {
  isvalid: function () {
    console.log("validar cartão de crédito")
  }


    .isValid(campoNumeroDoCartao) {
      const arrayCard = [];
for (let i = 0; i < campoNumeroDoCartao.length; i++) {
  const digit = parseInt(campoNumeroDoCartao[i]); // parseInt vai converter o primeiro argumento para uma string, vai analisar e retornar um inteiro ou NaN
  arrayCard.push(digit);
  console.log("validar cartão de crédito")
  //o push() vai adicionar1 ou + elementos ao final de um array e retorna o novo cumprimento de array.
}

const frontBackToFront = arrayCard.reverse();
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
return somaTotal % 10 === 0;


  }



}







export default validator;
