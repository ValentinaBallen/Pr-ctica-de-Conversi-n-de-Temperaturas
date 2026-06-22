let temperaturaCelsius;

// Solicitar datos hasta que el usuario ingrese un número válido
do {
    temperaturaCelsius = prompt("Ingresa la temperatura en grados Celsius:");

    if (temperaturaCelsius === null) {
        alert("Debes ingresar un valor.");
        continue;
    }

    temperaturaCelsius = Number(temperaturaCelsius);

    if (isNaN(temperaturaCelsius)) {
        alert("Error: debes ingresar un valor numérico.");
    }

} while (isNaN(temperaturaCelsius));

// Conversiones
let kelvin = temperaturaCelsius + 273.15;
let fahrenheit = (temperaturaCelsius * 9 / 5) + 32;

// Mostrar resultados
console.log(`Grados Kelvin: ${kelvin}`);
console.log(`Grados Fahrenheit: ${fahrenheit}`);


document.body.innerHTML = `
    <h2>Resultados</h2>
    <p>Grados Kelvin: ${kelvin}</p>
    <p>Grados Fahrenheit: ${fahrenheit}</p>
`;