console.log("Vamos ver quanto você terá que pagar.");

const precoNormal = 120;

const formaPagamento = 4

if(formaPagamento === 1){
    console.log("R$"+ (precoNormal * 0.9));
} else if(formaPagamento === 2){
    console.log("R$"+ (precoNormal * 0.85));
} else if(formaPagamento === 3){
    console.log("R$"+ precoNormal);
} else{
    console.log("R$"+ (precoNormal + precoNormal * 0.1));
}