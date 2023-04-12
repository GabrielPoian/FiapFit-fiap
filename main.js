function calcularTotal() {
    var planoNormal = 129;
    var planoBlack = 150;
    var nutricao = 30;
    var personal = 300;

    var total = 0;

    // Verifica qual plano foi selecionado
    if (document.getElementById('planoNormal').checked) {
        total += planoNormal;
    } else if (document.getElementById('planoBlack').checked) {
        total += planoBlack;
    }

    // Verifica quais serviços extras foram selecionados
    if (document.getElementById('nutricao').checked) {
        total += nutricao;
    }
    if (document.getElementById('personal').checked) {
        total += personal;
    }

    // Exibe o total no campo de valor
    document.getElementById('total').innerText = 'Valor Total: R$ ' + total.toFixed(2);
}