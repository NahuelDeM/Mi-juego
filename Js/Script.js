function getRandom() {
    let inicio = document.getElementById('inicio').value;
    let fin = document.getElementById('fin').value;
    document.getElementById('number').innerHTML = 'The random number is: ' + getRandomBetween(parseInt(inicio), parseInt(fin));
}

function getRandomBetween(inicio, fin) {
    return Math.floor(Math.random() * (fin - inicio + 1)) + inicio;
}