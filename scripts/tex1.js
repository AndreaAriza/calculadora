function suma() {
    let val1 = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("suma").innerHTML;
    document.getElementById("resultado").innerHTML = val1 + sumado
}

function resta() {
    let val1 = document.getElementById("resultado").innerHTML;
    let restado = document.getElementById("resta").innerHTML;
    document.getElementById("resultado").innerHTML = val1 + restado
}

function multiplicacion() {
    let val1 = document.getElementById("resultado").innerHTML;
    let multiplicado = document.getElementById("multiplicacion").innerHTML;
    document.getElementById("resultado").innerHTML = val1 + multiplicado
}

function divicion() {
    let val1 = document.getElementById("resultado").innerHTML;
    let dividido = document.getElementById("divicion").innerHTML;
    document.getElementById("resultado").innerHTML = val1 + dividido
}

function add1() {
    let val1 = document.getElementById("resultado").innerHTML;
    let nu1 = document.getElementById("add1").innerHTML;
    document.getElementById("resultado").innerHTML = val1 + nu1
}

function add2() {
    let val1 = document.getElementById("resultado").innerHTML;
    let nu2 = document.getElementById("add2").innerHTML;
    document.getElementById("resultado").innerHTML = val1 + nu2
}

function add3() {
    let val1 = document.getElementById("resultado").innerHTML;
    let nu3 = document.getElementById("add3").innerHTML;
    document.getElementById("resultado").innerHTML = val1 + nu3
}

function add4() {
    let val1 = document.getElementById("resultado").innerHTML;
    let nu4 = document.getElementById("add4").innerHTML;
    document.getElementById("resultado").innerHTML = val1 + nu4
}

function add5() {
    let val1 = document.getElementById("resultado").innerHTML;
    let nu5 = document.getElementById("add5").innerHTML;
    document.getElementById("resultado").innerHTML = val1 + nu5
}

function add6() {
    let val1 = document.getElementById("resultado").innerHTML;
    let nu6 = document.getElementById("add6").innerHTML;
    document.getElementById("resultado").innerHTML = val1 + nu6
}

function add7() {
    let val1 = document.getElementById("resultado").innerHTML;
    let nu7 = document.getElementById("add7").innerHTML;
    document.getElementById("resultado").innerHTML = val1 + nu7
}

function add8() {
    let val1 = document.getElementById("resultado").innerHTML;
    let nu8 = document.getElementById("add8").innerHTML;
    document.getElementById("resultado").innerHTML = val1 + nu8
}

function add9() {
    let val1 = document.getElementById("resultado").innerHTML;
    let nu9 = document.getElementById("add9").innerHTML;
    document.getElementById("resultado").innerHTML = val1 + nu9
}

function add0() {
    let val1 = document.getElementById("resultado").innerHTML;
    let nu0 = document.getElementById("add0").innerHTML;
    document.getElementById("resultado").innerHTML = val1 + nu0
}

function addi() {
    let val1 = document.getElementById("resultado").innerHTML;
    let suma = val1.indexOf("+");
    let resta = val1.indexOf("-");
    let divicion = val1.indexOf("/");
    let multiplicacion = val1.indexOf("*");
    if (suma !== -1) {
        arr = val1.split("+", 2);
        res = parseInt(arr[0]) + parseInt(arr[1]);
        document.getElementById("resultado").innerHTML = res;
    } else if (resta !== -1) {
        arr = val1.split("-", 2);
        res = arr[0] - arr[1];
        document.getElementById("resultado").innerHTML = res;

    } else if (divicion !== -1) {
        arr = val1.split("/", 2);
        res = arr[0] / arr[1];
        document.getElementById("resultado").innerHTML = res;

    } else if (multiplicacion !== -1) {
        arr = val1.split("*", 2);
        res = arr[0] * arr[1];
        document.getElementById("resultado").innerHTML = res;

    }
}