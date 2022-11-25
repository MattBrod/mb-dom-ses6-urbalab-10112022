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

reveal = (id, id2) => {
    document.getElementById(id).style.visibility = "visible";
    document.getElementById(id2).style.setProperty("background-color", "#d3d3d3", "important");
    display(id2);
}