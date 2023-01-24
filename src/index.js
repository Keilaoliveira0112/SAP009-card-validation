import validator from './validator.js';

window.validarFormulario = function () {
    console.log('teste');
    var resultadoValidacaoDoNome = validarCampoNome();
    console.log('resultado ' + resultadoValidacaoDoNome)
    var resultadoValidacaoDoNumeroDoCartao = validaNumeroDoCartao();
    console.log('resultado' + resultadoValidacaoDoNumeroDoCartao)
    var resultadoValidacaoDoMes = validarMes();
    console.log('resultado' + resultadoValidacaoDoMes)
    var resultadoValidacaoDoAno = validarAno();
    console.log('resultado' + resultadoValidacaoDoAno)
    var resultadoValidacaoDoNumeroDoCvv = validaNumeroDoCvv();
    console.log('resultado' + resultadoValidacaoDoNumeroDoCvv)
    if (resultadoValidacaoDoNumeroDoCartao == true) {
        const campoNumeroDoCartao = document.getElementById("numerodocartao");

        const cardValidation = validator.isValid(campoNumeroDoCartao.value);
        console.log('cardValidation ' + cardValidation);
    }
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

