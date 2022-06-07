console.log("trabalhando com listas \n");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`);

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);