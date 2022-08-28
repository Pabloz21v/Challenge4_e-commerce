
const starWars = () => fetch("https://akabab.github.io/starwars-api/api/all.json")
    .then(respuesta => respuesta.json())

//const pokemon = () => fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
//    .then(respuesta => respuesta.json())

starWars();
console.log("respuesta de starwars" );
console.table( starWars())


//pokemon();
//console.log("respuesta de pokemon");
//console.log( pokemon())


// https://github.com/akabab/starwars-api
// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
