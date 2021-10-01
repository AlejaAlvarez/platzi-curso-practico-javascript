//Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El área del cuadrado es: " + AreaCuadrado + "cm^2");
console.groupEnd();

//Código del triangulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triangulo miden: "
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo + "cm"
// ); //idente el código, separandolo por lineas cada que hay un +

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}
//console.log("El área del triangulo es: " + areaTriangulo +  "cm^2")
console.groupEnd();

//Código triangulo isósceles
console.group("Triangulo isoceles");
function trianguloIsosceles (ladoA, ladoB, baseIsosceles) {
    if (ladoA =! ladoB) {
        console.error("Los lados no son iguales");
    } else {
        const lado2B = baseIsosceles / 2;
        const baseIsosceles2 = ladoA;

        const lado2BCuadrdado = lado2B **2;
        const baseIsosceles2Cuadrado = baseIsosceles2 **2;

        const lado2A = Math.sqrt(baseIsosceles2 - lado2B);

        const altura = lado2A;
        return altura;
    }
}
//Código del circulo
console.group("Círculos");
//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo +  "cm");

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}

//Área
function areaCirculo (radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


//Aqui interactuamos con el html
function CalcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

