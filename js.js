const numeros = [12,44,67,4,2,5,7,0];

// foreach 

numeros.forEach(x => {
    console.log(x * 5);
});

//map 

numeros.map(x => {
   console.log(x);
 })


const res01 = numeros.map(x => x * 10);

console.log(res01);

// find

const res02 = numeros.find(function(elem) {
    return elem >= 45;
} )

console.log(res02);

//filter 

const personas = [
    {nombre: 'javier', edad: 16},
    {nombre: 'itzae', edad: 17},
    {nombre: 'teresa', edad: 30},
    {nombre: 'Diana', edad: 25}
];

const mayoresEdad = personas.filter(function(elem) {
    return elem.edad >= 18;
} )

console.log(mayoresEdad);

// Pluck

