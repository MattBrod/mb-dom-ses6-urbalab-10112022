let number = '';

display = (id) => {
    let selector = document.querySelectorAll(id);
    let valor = document.getElementById(id).value;
    let tag = document.getElementById(id).tagName;
    let name = document.getElementById(id).name;

    document.getElementById('selector').innerHTML = selector;
    document.getElementById('valor').innerHTML = valor;
    document.getElementById('tag').innerHTML = tag;
    document.getElementById('name').innerHTML = name;
}

element = (id) => {
    number = document.getElementById(id).innerHTML;
    if (document.getElementById('input1') == '0') {
        document.getElementById('input1').value = number;
        display(id)
    } else {
        document.getElementById('input1').value += number;
        display(id) 
    }
    console.log("haha")
}

resolve = (id) => {
    document.getElementsById(id).value = number;
    console.log("haha")
}