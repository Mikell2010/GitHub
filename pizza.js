







var pizza = {
    tipoCorteza: ["gruesa", "delgada"],
    tipoSalsa: ["crema", "tomate"],
    quesos: ["provolone", "cheddar", "mozzarella"],
    salsas: ["alfredo", "bolognesa", "barbecue"]
};
console.log(pizza);

function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

var p1 = pizzaOven(["gruesa", "delgada"], ["crema", "tomate"], ["provolone", "cheddar", "mozzarella"], ["alfredo", "bolognesa", "barbecue"]);
console.log(p1);

var pizza1 = {
    tipoCorteza: "estilo chicago",
    tipoSalsa: "tradicional",
    quesos: ["mozzarella"],
    salsas: ["pepperoni", "salchicha"]
};
console.log(pizza1);

var p2 = pizzaOven("estilo chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(p2);

var pizza2 = {
    tipoCorteza: "lanzada a mano",
    tipoSalsa: "marinara",
    quesos: ["mozzarella", "feta"],
    salsas: ["champiñones", "aceitunas", "cebollas"]
};
console.log(pizza2);

var p3 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(p3);

var tipoCorteza = [
    "gruesa", "delgada", "estilo chicago", "lanzada a mano"
];
var tipoSalsa = [
    "crema", "tomate", "tradicional", "marinara"
];
var quesos = [
    "provolone", "cheddar", "mozzarella", "feta"
];
var salsas = [
    "alfredo", "bolognesa", "barbecue", "pepperoni", "salchicha", "champiñones", "aceitunas", "cebollas"
];

function randomrange(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.tipoCorteza = randomPick(tipoCorteza);
    pizza.tipoSalsa = randomPick(tipoSalsa);
    pizza.quesos = [];
    pizza.salsas = [];
    for (i = 0; i < randomrange(5, 1); i++) {
        pizza.quesos.push(randomPick(quesos));
    }
    for (i = 0; i < randomrange(4, 0); i++) {
        pizza.salsas.push(randomPick(salsas));
    }
    return pizza;
}

console.log(randomPizza());
