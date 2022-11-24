const red = "#FF0000";
const yellow = "#FFFF00";
let player = red;

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
}

// document.getElementsByClassName("round")[0].style.backgroundColor = "#FF0000";

// let haha = document.getElementsByClassName("round")[0].value;
// console.log(haha);