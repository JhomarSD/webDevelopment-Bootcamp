console.log("Hello World")
/*FIRST UPPERCASE*/
const firstName = "Jhomar sanchez";
const firstNameWithUpperCase = firstName.toUpperCase();
const lastName = "Sanchez";

console.log(firstNameWithUpperCase);

/**Arrays*/
const list = [];
const anotherList = list.concat(157);

const persona = {
    nombre: "Jhomar",
    apellido: "Sanchez",
    apodo: "JhomarSan",
    edad: 21,
    links: ['www.google.com', 'www.youtube.com']
}
console.log(anotherList[0]);

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.apodo);
console.log(persona.links);

/*TIP: Para buscar dentro de personas puedes usar esto */

const field = 'apodo';
console.log(persona[field]);

const sumar = (numero1, numero2) => {
    console.log(numero1)
    console.log(numero2)
    return numero1 + numero2
}

function restar(numero1, numero2){
    return numero1 - numero2
}

console.log(sumar(4, 5));