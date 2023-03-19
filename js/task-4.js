alert('Task 4');

let credits=23580 ;
let pricePerDroid=3000;
let totalPrice;

let amountDroid = prompt('Введіть необхідну кількіть дроїдів');

if(!amountDroid){
    console.log('Відмінено користувачем!');
}
else{
     totalPrice=Math.round(Number(amountDroid))*pricePerDroid;
 if(totalPrice>credits){
    console.log('Недостатньо коштів на рахунку!');
 }
 else if(totalPrice<=credits){
console.log(`Ви купили ${amountDroid} дроїди, на рахунку залишилось ${credits-totalPrice} кредитів.`);
 }
}