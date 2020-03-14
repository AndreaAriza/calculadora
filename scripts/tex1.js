var val1;

function init() {
    val1 = document.getElementById('resultado');
}

function suma() {
    let sumado = document.getElementById('suma').innerHTML;
    document.getElementById('resultado').innerHTML = val1.innerHTML + sumado;
}

function resta() {
    let restado = document.getElementById('resta').innerHTML;
    document.getElementById('resultado').innerHTML = val1.innerHTML + restado;
}

function multiplicacion() {
    let multiplicado = document.getElementById('multiplicacion').innerHTML;
    document.getElementById('resultado').innerHTML =
        val1.innerHTML + multiplicado;
}

function divicion() {
    let dividido = document.getElementById('divicion').innerHTML;
    document.getElementById('resultado').innerHTML = val1.innerHTML + dividido;
}

function add1() {
    let nu1 = document.getElementById('add1').innerHTML;
    document.getElementById('resultado').innerHTML = val1.innerHTML + nu1;
}

function add2() {
    let nu2 = document.getElementById('add2').innerHTML;
    document.getElementById('resultado').innerHTML = val1.innerHTML + nu2;
}

function add3() {
    let nu3 = document.getElementById('add3').innerHTML;
    document.getElementById('resultado').innerHTML = val1.innerHTML + nu3;
}

function add4() {
    let nu4 = document.getElementById('add4').innerHTML;
    document.getElementById('resultado').innerHTML = val1.innerHTML + nu4;
}

function add5() {
    let nu5 = document.getElementById('add5').innerHTML;
    document.getElementById('resultado').innerHTML = val1.innerHTML + nu5;
}

function add6() {
    let nu6 = document.getElementById('add6').innerHTML;
    document.getElementById('resultado').innerHTML = val1.innerHTML + nu6;
}

function add7() {
    let nu7 = document.getElementById('add7').innerHTML;
    document.getElementById('resultado').innerHTML = val1.innerHTML + nu7;
}

function add8() {
    let nu8 = document.getElementById('add8').innerHTML;
    document.getElementById('resultado').innerHTML = val1.innerHTML + nu8;
}

function add9() {
    let nu9 = document.getElementById('add9').innerHTML;
    document.getElementById('resultado').innerHTML = val1.innerHTML + nu9;
}

function add0() {
    let nu0 = document.getElementById('add0').innerHTML;
    document.getElementById('resultado').innerHTML = val1.innerHTML + nu0;
}

function addc() {
    val1.innerHTML = '';
}

function addi() {
    let suma = val1.innerHTML.indexOf('+');
    let resta = val1.innerHTML.indexOf('-');
    let divicion = val1.innerHTML.indexOf('/');
    let multiplicacion = val1.innerHTML.indexOf('*');
    if (suma !== -1) {
        arr = val1.innerHTML.split('+', 7);
        res = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6];
        document.getElementById('resultado').innerHTML = res;
    } else if (resta !== -1) {
        arr = val1.innerHTML.split('-', 7);
        res = arr[0] - arr[1] - arr[2] - arr[3] - arr[4] - arr[5] - arr[6];
        document.getElementById('resultado').innerHTML = res;
    } else if (divicion !== -1) {
        arr = val1.innerHTML.split('/', 7);
        res = arr[0] / arr[1] / arr[2] / arr[3] / arr[4] / arr[5] / arr[6];
        document.getElementById('resultado').innerHTML = res;
    } else if (multiplicacion !== -1) {
        arr = val1.innerHTML.split('*', 7);
        res = arr[0] * arr[1] * arr[2] * arr[3] * arr[4] * arr[5] * arr[6];
        document.getElementById('resultado').innerHTML = res;
    }
}