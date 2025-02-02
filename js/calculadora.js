$(document).ready(function () {
    $('#itemForm').on('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Seleciona todos os checkboxes marcados e mapeia seus valores
        const selectedValues = $('input[type="checkbox"]:checked').map(function () {
            return $(this).val(); // Pega o valor do checkbox
        }).get(); // Converte o resultado para um array

        // Exibe os valores no console (ou envie para o backend)
        console.log(selectedValues);

        $.getJSON('./json/lista.json', function (data) {
            console.log(data)
        })

        // Caso precise enviar os dados via AJAX
        // $.post('/sua-url', { items: selectedValues }, function (response) {
        //     console.log('Resposta do servidor:', response);
        // });
    });
});
