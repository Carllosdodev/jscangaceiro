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

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);


    // limpa o campo data
    campos[].value = '';
    // limpa campo quantidade
    campos[].value = 1;
    // limpa valor
    campos[].value = 0;
    // foca no campo data
    campos[].focus();
});

// nova td que armazenará o volume da negociação

// substituir o alert por um novo código

