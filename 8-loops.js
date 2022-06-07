console.log("trabalhando com loops \n\n");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

console.log(`Destinos possíveis: ${listaDeDestinos}\n`);

const idadeComprador = 15;
const acompanhado = true;
const podeComprar = idadeComprador >= 18 || acompanhado == true;

let passagemComprada = false;
const destinoEscolhido = `São Paulo`;
let destinoExiste = false;
let cont = 0;

while(cont<=3){
    if(listaDeDestinos[cont] == destinoEscolhido){
        destinoExiste = true;
        console.log(`Destino escolhido existe`);
        break;
    }else{
        destinoExiste = false;
        cont++;
    }
};

if(destinoExiste == false){
    console.log(`Destino escolhido não existe`);
};

if(podeComprar && destinoExiste){
    console.log(`Compra efetuada. \nDestino escolhido: ${listaDeDestinos[1]}\n`);
    listaDeDestinos.slice(1,1);
    passagemComprada = true;
}else{
    console.log(`Erro na compra. \nDestinos possíveis: ${listaDeDestinos}\n`);
}



//for(let i = 0; i<=3 ; i++){
//    if(listaDeDestinos[i] == destinoEscolhido){
//        destinoExiste = true;
//        console.log(`Destino escolhido existe`);
//        break;
//    }else{
//        destinoExiste = false;
//    }
//};