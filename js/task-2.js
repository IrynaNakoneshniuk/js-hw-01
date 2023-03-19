alert('Task 2');

let total=prompt('Введіть кількість товару на складі:');
let ordered=prompt('Введіть необхідну кількість товару:');

if(Number(ordered)>0&&Number(total)>=Number(ordered)){
alert('Замовлення оформлено, з вами зв’яжеться менеджер');
}
else if(Number(ordered)>0&&Number(total)<Number(ordered)){
alert('На складі недостатня кількість товарів!');
}
