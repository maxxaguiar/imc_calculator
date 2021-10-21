
const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){
        
        const  valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso!';
        }
        else if (valorIMC <24.9) {
            classificacao = 'no peso ideal!';
        }
        else if (valorIMC <30) {
            classificacao = 'acima do peso!';
        }
        else if (valorIMC >30) {
            classificacao = 'obeso(a)!';
        }
        
        
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else {
        resultado.textContent = 'Todos os campos devem ser preenchidos';
    }

}

calcular.addEventListener('click', imc);