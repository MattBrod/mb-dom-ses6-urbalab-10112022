const red = "#FF0000";
const yellow = "#FFFF00";
let player = red;

display = (id) => {
    let selector = document.querySelectorAll(id);
    let valor = document.getElementById(id).value;
    let tag = document.getElementById(id).tagName;
    let name = document.getElementById(id).name;
    

    document.getElementById('selector').innerHTML = selector;
    document.getElementById('valor').innerHTML = valor;
    document.getElementById('tag').innerHTML = tag;
    document.getElementById('name').innerHTML = name;
    // comprueba el color de la última jugada pero como 
    // la varible cambia tiene que poner lo contrario
    if (player == yellow) {
        document.getElementById('color').innerHTML = "rojo";
    } else {
        document.getElementById('color').innerHTML = "amarillo";
    }
    document.getElementById('turno').style.color = player;
}

jugada = (id) => {
    
    let col = Number(document.getElementById(id).value);
    let circleNum = 35 + col;
    while (circleNum>=0) {
        let color = document.getElementsByClassName("round")[circleNum].value;
        if (color == 0){
            document.getElementsByClassName("round")[circleNum].style.backgroundColor = player;
            document.getElementsByClassName("round")[circleNum].value = 1;
            if (player == red) {
                player = yellow;
            } else {
                player = red;
            }
            break
        } else {
            circleNum = circleNum - 7;
        }
    }
    display(id);
}