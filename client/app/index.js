// cliente/app/index.js

var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos); // verificar conteúdo do array!

// precisa por tbody, para construir a tr

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){
    alert('oi');

    var tr = document.createElement('tr');

    campos.forEach(function(campo){
        // criar uma td sem informações
        var td = document.createElement('td');

        // atribui o valor para campo à td
        td.textContent = campo.value;

        // adicionar a td na tr
        tr.appendChild(td);
    });
});

// nova td que armazenará o volume da negociação

// substituir o alert por um novo código

