const button = document.getElementById('iniciar-calculadora');

button.addEventListener('click', () => {
    calculatorInit();
});

const calculatorInit = () => {

    alert('Iniciando calculadora....');
    alert('Por favor selecciona un número:');

    var select_operation = prompt("1. Suma 2. Resta 3. Multiplicación 4. División");

    if (select_operation === '') {

        alert('Por favor ingrese un número');
        alert('La calculadora se reiniciará....')

        return calculatorInit();

    } else if (select_operation) {

        var primer_valor = parseInt(prompt('Ingrese el primer número para operar')),
            segundo_valor = parseInt(prompt('Ingrese el segundo número para operar'));

        if (select_operation === '1') {
            alert(`La suma de ${primer_valor} y ${segundo_valor} es ${primer_valor + segundo_valor}`);
        } else if (select_operation === '2') {
            alert(`La resta de ${primer_valor} y ${segundo_valor} es ${primer_valor - segundo_valor}`);
        } else if (select_operation === '3') {
            alert(`La multiplicación de ${primer_valor} y ${segundo_valor} es ${primer_valor * segundo_valor}`);
        } else if (select_operation === '4') {
            alert(`La división entre ${primer_valor} y ${segundo_valor} es ${primer_valor / segundo_valor}`);
        } else {

            primer_valor, segundo_valor = null;
            alert('No es un número válido');
        }
    } else {
        alert('Cerrando calculadora....');
    }
}
