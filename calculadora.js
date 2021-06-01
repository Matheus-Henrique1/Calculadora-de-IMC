let botaoCalcular = document.getElementById('btnCalcular')

function calculandoIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value / 100;
    let resultado = document.getElementById('resultado')

    if (altura !== "" && peso !== "") {
        let imc = (peso / (altura * altura)).toFixed(2);
        let mensagem = "";

        if (imc < 18.5) {
            mensagem = "Abaixo do peso!"
        }
        else if (imc < 25) {
            mensagem = "Você esta com o peso ideal!"
        }
        else if (imc < 30) {
            mensagem = "Você esta levemente acima do peso!"
        }
        else if (imc < 35) {
            mensagem = "Cuidado Obesidade grau I"
        }
        else if (imc < 40) {
            mensagem = "Cuidado Obesidade grau II"
        }
        else {
            mensagem = "Cuidado Obesidade grau III"
        }

        // let minhaMensagem = "Seu IMC é " + imc + " " + mensagem
        resultado.textContent = `Seu IMC é ${imc}. ${mensagem}`;

    } else {
        resultado.textContent = "Preencha todos os campos!!!"
    }

}

botaoCalcular.addEventListener('click', calculandoIMC);