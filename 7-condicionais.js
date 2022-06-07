console.log("trabalhando com condicionais \n");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

console.log(`Destinos possíveis: ${listaDeDestinos}\n`);

const idadeComprador = 15;
const acompanhado = true;

let passagemComprada = false;

if(idadeComprador >= 18 || acompanhado == true){
    console.log(`Compra efetuada. \nDestino escolhido: ${listaDeDestinos[1]}\n`);
    listaDeDestinos.slice(1,1);
    passagemComprada = true;
}else{
    console.log(`Comprador menor de idade e desacompanhado`);
    console.log(`Erro na compra. \nDestinos possíveis: ${listaDeDestinos}\n`);
}

//Embarque
console.log(`Emarque: \n`);

if((idadeComprador >= 18 || acompanhado == true) && passagemComprada == true){
    console.log(`Boa viagem!`);
}else{
    console.log(`Não é possível o embarque`);
}