import validator from './validator.js';

const campoNumeroDoCartao = document.getElementById("numerodocartao");

window.validarFormulario = function () {
    console.log('teste');
    let resultadoValidacaoDoNome = validarCampoNome();
    console.log('resultado ' + resultadoValidacaoDoNome)
    let resultadoValidacaoDoNumeroDoCartao = validaNumeroDoCartao();
    console.log('resultado' + resultadoValidacaoDoNumeroDoCartao)
    let resultadoValidacaoDoMes = validarMes();
    console.log('resultado' + resultadoValidacaoDoMes)
    let resultadoValidacaoDoAno = validarAno();
    console.log('resultado' + resultadoValidacaoDoAno)
    let resultadoValidacaoDoNumeroDoCvv = validaNumeroDoCvv();
    console.log('resultado' + resultadoValidacaoDoNumeroDoCvv)
    if (resultadoValidacaoDoNumeroDoCartao == true) {
        //const campoNumeroDoCartao = document.getElementById("numerodocartao");

        const cardValidation = validator.isValid(campoNumeroDoCartao.value);
        console.log('cardValidation ' + cardValidation);

    }
    ocultarDoNumero(campoNumeroDoCartao.value);
}

function ocultarDoNumero(fullNumber) {

    const maskedNumber = validator.maskify(fullNumber);

    document.getElementById("numerodocartao").value = maskedNumber;

    console.log(maskedNumber)


    //return (result.innerHTML = "Por favor, digite novamente. Número de cartão inválido!");

}

function validarCampoNome() {
    const campoNome = document.getElementById("nomedotitular");
    campoNome.classList.remove("invalid");
    let valid = true;
    console.log('campoNome ' + campoNome.value)
    if (campoNome.value.length == 0) {
        valid = false;
        campoNome.classList.add("invalid");

    }
    return valid;
}

function validaNumeroDoCartao() {
    const campoNumeroDoCartao = document.getElementById("numerodocartao");
    campoNumeroDoCartao.classList.remove("invalid");
    let valid = true;
    console.log('campoNumero' + campoNumeroDoCartao.value)
    if (campoNumeroDoCartao.value.length != 16) {
        valid = false;
        campoNumeroDoCartao.classList.add("invalid");

    }
    return valid;

}

function validarMes() {
    const campoMes = document.getElementById("mes");
    campoMes.classList.remove("invalid");
    let valid = true;
    console.log('campoMes' + campoMes.value)
    if (campoMes.value == "mes") {
        valid = false;
        campoMes.classList.add("invalid");

    }
    return valid;


}

function validarAno() {
    const campoAno = document.getElementById("ano");
    campoAno.classList.remove("invalid");
    let valid = true;
    console.log('campoAno' + campoAno.value)
    if (campoAno.value == "Ano") {
        valid = false;
        campoAno.classList.add("invalid");
    }
    return valid;
}

function validaNumeroDoCvv() {
    const campoNumeroDoCvv = document.getElementById("cvv");
    campoNumeroDoCvv.classList.remove("invalid");
    let valid = true;
    console.log('campoNumeroDoCvv' + campoNumeroDoCvv.value)
    if (campoNumeroDoCvv.value.length != 3) {
        valid = false;
        campoNumeroDoCvv.classList.add("invalid");
    }
    return valid;
}

