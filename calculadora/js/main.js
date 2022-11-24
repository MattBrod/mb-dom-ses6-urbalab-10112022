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
    document.getElementById('save').innerHTML += number;
    display(id);
}

clearSave = () => {
    document.getElementById('save').innerHTML = '';
    display(id);
}

resolve = () => {
    userInput = document.getElementById('save').innerHTML;
    document.getElementById('input1').value = eval(userInput);
    display(id);
}