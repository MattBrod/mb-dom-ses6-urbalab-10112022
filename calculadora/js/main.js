let suma = '';

function element(id) {
    alert(document.getElementById(id).innerHTML);
    console.log(document.getElementById(id));
    suma += document.getElementById(id).innerHTML;
}

function sumar() {
    console.log(eval(suma))
}

