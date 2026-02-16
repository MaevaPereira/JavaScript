
//Part1
var kelvin = prompt("Quelle est la température en Kelvins aujourd'hui ?");
console.log('Kelvin:' + " " + kelvin);

//Part2
const celsius = ((kelvin) - 273)
console.log('Celsius:' + " " + celsius);
// on affecte à celsius la valeur kelvin -273

//Part3

/*
let fahrenheits = celsius * (9 / 5) + 32; 
console.log('Fahrenheits:' + " " + fahrenheits);
//on rècupere la valeur de celsius + le calcul pour affecter cette nouvel valeur à fahrenheits
*/


//Part4

const fahrenheits = Math.floor(celsius * (9 / 5) + 32);
console.log('Fahrenheits:' + " " + fahrenheits);
// on ajoute  Math.floor() pour utiliser le modulo % et convertir en entier