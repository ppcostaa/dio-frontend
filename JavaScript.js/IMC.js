console.log("Vamos verificar seu IMC");

const peso = 45;
const altura = 1.59;
const IMC = (peso/(altura * altura));

if(IMC < 18.5){
    console.log("Você está abaixo do peso.");
} else if(IMC >= 18.5 && IMC < 25){
    console.log("Você está com o peso normal.");
} else if(IMC >= 25 && IMC < 30){
    console.log("Você está acima do peso.")
} else if(IMC >= 30 && IMC < 40){
    console.log("Você está obeso.");
} else{
    console.log("Você está com obesidade grave.")
}